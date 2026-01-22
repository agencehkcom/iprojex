import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import ContactEmail from "@/emails/ContactEmail";
import { contactFormSchema } from "@/lib/validations";
import { checkRateLimit } from "@/lib/rate-limit";

export async function POST(request: Request) {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") ||
               request.headers.get("x-real-ip") ||
               "unknown";
    const { allowed, remaining } = checkRateLimit(ip);

    if (!allowed) {
      return NextResponse.json(
        { success: false, error: "Trop de requêtes. Veuillez réessayer dans une minute." },
        {
          status: 429,
          headers: { "X-RateLimit-Remaining": remaining.toString() }
        }
      );
    }

    const body = await request.json();

    // Validation des données
    const validatedData = contactFormSchema.parse(body);

    // Formatage de la date
    const dateFormatted = new Date().toLocaleDateString("fr-FR", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });

    // Liste des destinataires
    const recipients = (process.env.CONTACT_EMAILS || "contact@iprojex.fr")
      .split(",")
      .map((email) => email.trim());

    // Envoi de l'email
    const { error } = await getResend().emails.send({
      from: "IPROJEX <noreply@hkcom.fr>",
      to: recipients,
      replyTo: validatedData.email,
      subject: `Nouvelle demande de devis - ${validatedData.name}${validatedData.company ? ` (${validatedData.company})` : ""}`,
      react: ContactEmail({
        name: validatedData.name,
        email: validatedData.email,
        phone: validatedData.phone,
        company: validatedData.company,
        message: validatedData.message,
        date: dateFormatted,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { success: false, error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
