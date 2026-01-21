"use client";

import { motion } from "framer-motion";
import Container from "@/components/ui/Container";

const regions = [
  "Île-de-France",
  "Hauts-de-France",
  "Normandie",
  "Grand Est",
  "Bretagne",
  "Pays de la Loire",
  "Centre-Val de Loire",
  "Bourgogne-Franche-Comté",
  "Nouvelle-Aquitaine",
  "Occitanie",
  "Auvergne-Rhône-Alpes",
  "Provence-Alpes-Côte d'Azur",
];

export default function Coverage() {
  return (
    <section className="section-padding bg-gray-50">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Intervention nationale
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4 mb-6">
              Notre zone d&apos;intervention
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Chez <strong className="text-gray-900">IPROJEX</strong>, nous sommes fiers de notre capacité à offrir nos services de{" "}
              <strong className="text-gray-900">flocage coupe-feu</strong> partout en France.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Grâce à notre réseau étendu de <strong className="text-gray-900">professionnels qualifiés</strong> et à notre logistique efficace,
              nous intervenons dans toutes les régions, des <strong className="text-gray-900">grandes métropoles</strong> aux{" "}
              <strong className="text-gray-900">zones plus rurales</strong>.
            </p>

            {/* Regions Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {regions.map((region, index) => (
                <motion.div
                  key={region}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-2 text-sm text-gray-600"
                >
                  <svg className="w-4 h-4 text-accent flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  {region}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary to-primary-light rounded-3xl p-8 md:p-12 text-center">
              <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Intervention dans toute la France
              </h3>
              <p className="text-white/80 mb-6">
                Nos équipes se déplacent sur tout le territoire pour vos projets de flocage coupe-feu.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+33187661381"
                  className="inline-flex items-center justify-center px-6 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  Nous appeler
                </a>
                <a
                  href="#contact-form"
                  className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors"
                >
                  Demander un devis
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
