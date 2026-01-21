import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Le nom doit contenir au moins 2 caractères")
    .max(100, "Le nom ne peut pas dépasser 100 caractères"),
  company: z.string().optional(),
  email: z.string().email("Veuillez entrer une adresse email valide"),
  phone: z
    .string()
    .regex(
      /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
      "Veuillez entrer un numéro de téléphone français valide"
    ),
  message: z
    .string()
    .min(10, "Veuillez décrire votre besoin (minimum 10 caractères)")
    .max(1000, "Le message ne peut pas dépasser 1000 caractères"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
