"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Demande de devis",
    description: "Remplissez notre formulaire en ligne ou contactez-nous par téléphone. Nous répondons sous 24h.",
  },
  {
    number: "02",
    title: "Étude technique",
    description: "Un expert se déplace sur site pour évaluer vos besoins et réaliser un diagnostic précis.",
  },
  {
    number: "03",
    title: "Devis détaillé",
    description: "Recevez un devis complet et transparent sous 48h, incluant toutes les prestations.",
  },
  {
    number: "04",
    title: "Réalisation",
    description: "Nos équipes certifiées interviennent selon le planning défini, avec un suivi en temps réel.",
  },
];

export default function Process() {
  return (
    <section id="process" className="section-padding bg-primary">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Notre processus
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-4 mb-6">
            Comment ça marche ?
          </h2>
          <p className="text-lg text-gray-300">
            Un processus simple et transparent pour vous accompagner de A à Z
            dans votre projet de protection incendie.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-primary-light" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                {/* Step Number */}
                <div className="relative z-10 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-bold text-lg mb-6 mx-auto lg:mx-0">
                  {step.number}
                </div>

                {/* Content */}
                <div className="text-center lg:text-left">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
