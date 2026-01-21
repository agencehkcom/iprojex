import { NextResponse } from "next/server";
import { getResend } from "@/lib/resend";
import { contactFormSchema } from "@/lib/validations";
import ContactEmail from "@/emails/ContactEmail";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate the request body
    const validatedData = contactFormSchema.safeParse(body);

    if (!validatedData.success) {
      return NextResponse.json(
        { error: "Données invalides", details: validatedData.error.flatten() },
        { status: 400 }
      );
    }

    const { name, company, email, phone, message } = validatedData.data;

    // Send email via Resend
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "IPROJEX <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL || "contact@iprojex-flocage.fr",
      replyTo: email,
      subject: `Nouvelle demande de devis - ${name}`,
      react: ContactEmail({
        name,
        company,
        email,
        phone,
        message,
      }),
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi de l'email" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: true, message: "Demande envoyée avec succès" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json(
      { error: "Une erreur est survenue" },
      { status: 500 }
    );
  }
}
