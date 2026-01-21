"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/forms/ContactForm";

const stats = [
  { value: "30+", label: "Ans d'expérience" },
  { value: "500+", label: "Projets réalisés" },
  { value: "100%", label: "Clients satisfaits" },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen pt-20 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Flocage coupe-feu"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/60" />
      </div>

      <Container className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-12 lg:py-20">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
              30 ans de sécurité incendie à votre service
            </span>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Expert en{" "}
              <span className="text-accent">flocage coupe-feu</span> en France
            </h1>

            <p className="text-lg md:text-xl text-white/90 mb-4 leading-relaxed">
              Une équipe d&apos;<strong className="text-white">experts certifiés</strong> et
              d&apos;<strong className="text-white">ingénieurs</strong> spécialisés dans le
              flocage coupe-feu de vos bâtiments.
            </p>

            <p className="text-base text-white/70 mb-8">
              Entreprise à taille humaine qui fait évoluer son savoir-faire grâce aux
              techniques de flocage coupe-feu les plus innovantes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="tel:+33187661381"
                className="inline-flex items-center justify-center px-6 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover transition-colors shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                Appelez-nous
              </a>
              <a
                href="#contact-form"
                className="inline-flex items-center justify-center px-6 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary transition-colors"
              >
                Demander un devis
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 md:gap-8 pt-8 border-t border-white/20">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-accent">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/80">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            id="contact-form"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:pl-8"
          >
            <ContactForm variant="hero" />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
