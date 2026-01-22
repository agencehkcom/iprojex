"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { contactFormSchema, ContactFormData } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";

interface ContactFormProps {
  variant?: "hero" | "standalone";
}

export default function ContactForm({ variant = "standalone" }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(
    null
  );

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitStatus("success");
        reset();
      } else {
        setSubmitStatus("error");
      }
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`${
        variant === "hero"
          ? "bg-white rounded-2xl shadow-2xl p-6 md:p-8"
          : "bg-gray-50 rounded-2xl p-6 md:p-8"
      }`}
    >
      <h3 className="text-2xl font-bold text-gray-900 mb-2">
        Votre devis en 2 minutes
      </h3>
      <p className="text-gray-500 mb-6">
        Remplissez ce formulaire et recevez votre devis sous 48h
      </p>

      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <p>
              Merci ! Votre demande a été envoyée. Nous vous recontacterons sous
              48h.
            </p>
          </div>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-50 border border-red-200 text-red-800 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-2 flex-shrink-0"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <p>Une erreur est survenue. Veuillez réessayer ou nous appeler.</p>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <Input
          label="Nom"
          placeholder="Votre nom"
          {...register("name")}
          error={errors.name?.message}
        />

        <Input
          label="Société (si professionnel)"
          placeholder="Nom de votre entreprise"
          {...register("company")}
          error={errors.company?.message}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email"
            type="email"
            placeholder="votre@email.fr"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Téléphone"
            type="tel"
            placeholder="06 12 34 56 78"
            {...register("phone")}
            error={errors.phone?.message}
          />
        </div>

        <Textarea
          label="Décrivez votre besoin"
          placeholder="Type de projet, surface, délais souhaités..."
          {...register("message")}
          error={errors.message?.message}
        />

        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full"
          isLoading={isSubmitting}
        >
          Obtenir mon devis gratuit
        </Button>

        <p className="text-xs text-gray-500 text-center">
          En soumettant ce formulaire, vous acceptez d&apos;être recontacté par
          IPROJEX.
        </p>
      </form>
    </motion.div>
  );
}
