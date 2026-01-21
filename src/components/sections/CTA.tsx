"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";

export default function CTA() {
  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Prêt à sécuriser vos bâtiments ?
          </h2>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-8">
            Obtenez votre devis gratuit sous 48h et bénéficiez de l&apos;expertise
            d&apos;IPROJEX pour votre projet de protection incendie.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button onClick={scrollToForm} variant="primary" size="lg">
              Demander un devis gratuit
            </Button>
            <a
              href="tel:+33187661381"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg border-2 border-white text-white bg-white/10 hover:bg-white hover:text-primary transition-all duration-200"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              01 87 66 13 81
            </a>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
