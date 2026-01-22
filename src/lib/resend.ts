import { Resend } from "resend";

// Vérification différée pour éviter le crash au build
export const resend = new Resend(process.env.RESEND_API_KEY || "");

export function getResend() {
  if (!process.env.RESEND_API_KEY) {
    throw new Error("RESEND_API_KEY is not defined");
  }
  return resend;
}
