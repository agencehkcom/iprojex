"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Container from "@/components/ui/Container";

const faqs = [
  {
    question: "Qu'est-ce que le flocage et comment fonctionne-t-il ?",
    answer: "Le flocage est une technique d'application d'un revêtement protecteur sur les structures métalliques et autres éléments de construction. Il crée une barrière isolante qui retarde la propagation du feu et protège l'intégrité structurelle du bâtiment en cas d'incendie.",
  },
  {
    question: "Pourquoi le flocage est-il important ?",
    answer: "Le flocage est essentiel pour la sécurité incendie des bâtiments. Il permet de gagner un temps précieux lors d'un incendie en retardant l'effondrement des structures, ce qui facilite l'évacuation des occupants et l'intervention des secours.",
  },
  {
    question: "Le flocage peut-il être appliqué sur n'importe quelle structure ?",
    answer: "Le flocage peut être appliqué sur la plupart des structures, notamment les poutres métalliques, les planchers collaborants, les gaines techniques et les éléments de charpente. Une étude technique préalable permet de déterminer la solution la plus adaptée à votre projet.",
  },
  {
    question: "Combien de temps le flocage dure-t-il ?",
    answer: "Correctement appliqué, le flocage peut protéger une structure pendant de nombreuses années, mais des inspections et une maintenance régulières sont recommandées pour garantir son efficacité optimale.",
  },
  {
    question: "Le matériau de flocage est-il nocif pour les humains ou l'environnement ?",
    answer: "Les matériaux de flocage modernes utilisés par IPROJEX sont conformes aux normes environnementales et sanitaires en vigueur. Ils sont sans amiante et respectent les réglementations européennes les plus strictes.",
  },
  {
    question: "Quel est le processus d'application du matériau de flocage ?",
    answer: "Le processus implique la préparation de la surface, l'application du matériau de flocage par projection, puis le temps de séchage. Les spécificités peuvent varier selon le projet et le type de protection requise.",
  },
  {
    question: "Comment savoir si mon bâtiment respecte les normes de flocage ?",
    answer: "IPROJEX peut réaliser un diagnostic complet de votre bâtiment pour évaluer sa conformité aux normes de sécurité incendie actuelles et vous proposer des solutions adaptées si nécessaire.",
  },
  {
    question: "Combien coûte le flocage ?",
    answer: "Le coût dépend de plusieurs facteurs : surface à traiter, type de protection requis, accessibilité du chantier, etc. IPROJEX propose des devis gratuits et personnalisés pour chaque projet.",
  },
  {
    question: "Combien de temps faut-il pour floquer un bâtiment ?",
    answer: "Le temps nécessaire dépend de la taille et de la complexité du projet. Nous nous efforçons de travailler efficacement tout en garantissant la plus haute qualité d'application.",
  },
  {
    question: "Le flocage peut-il être réalisé dans des bâtiments occupés ?",
    answer: "Oui, dans de nombreux cas, le flocage peut être réalisé pendant que le bâtiment est occupé, avec des mesures appropriées pour minimiser les perturbations. Nous planifions nos interventions en fonction de vos contraintes.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section-padding bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Questions fréquentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            F.A.Q.
          </h2>
          <p className="text-lg text-gray-600">
            Retrouvez les réponses aux questions les plus fréquentes sur le flocage coupe-feu.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-5 bg-gray-50 hover:bg-gray-100 rounded-xl transition-colors text-left"
              >
                <span className="font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="p-5 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Vous avez d&apos;autres questions ?
          </p>
          <a
            href="tel:+33187661381"
            className="inline-flex items-center px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-light transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            Contacter un expert
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
