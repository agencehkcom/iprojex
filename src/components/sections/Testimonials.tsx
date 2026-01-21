"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const testimonials = [
  {
    quote: "Service exceptionnel et professionnalisme remarquable. IPROJEX a réalisé le flocage coupe-feu de notre complexe industriel avec une précision et une efficacité impressionnantes. Les délais ont été respectés et la qualité du travail est irréprochable.",
    author: "Technologies XYZ",
    rating: 5,
  },
  {
    quote: "Une équipe réactive et compétente qui comprend les exigences du secteur de la construction. IPROJEX a su s'adapter à nos contraintes de chantier et livrer un travail de qualité dans les temps. Un partenaire de confiance.",
    author: "ConstructRight Builders",
    rating: 5,
  },
  {
    quote: "Nous avons fait appel à IPROJEX pour la protection incendie de notre salle de spectacle. Le résultat est parfait, conforme aux normes les plus strictes. Leur expertise technique et leur professionnalisme font toute la différence.",
    author: "Harmony Hall",
    rating: 5,
  },
];

const partners = [
  "SNEF",
  "Bouygues Construction",
  "Vinci",
  "Eiffage",
  "Spie Batignolles",
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Avis clients
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
            Ils nous font confiance
          </h2>
          <p className="text-lg text-gray-600">
            Découvrez les retours de nos clients sur leurs projets de protection
            incendie réalisés avec IPROJEX.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-700 leading-relaxed mb-6">
                &quot;{testimonial.quote}&quot;
              </p>

              {/* Author */}
              <div className="pt-4 border-t border-gray-100">
                <p className="font-semibold text-primary">
                  {testimonial.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-sm text-gray-500 mb-6 uppercase tracking-wider">
            Ils travaillent avec nous
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-gray-400 font-semibold text-lg hover:text-primary transition-colors"
              >
                {partner}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
