"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Container from "@/components/ui/Container";

const clients = [
  {
    name: "Groupe SNEF",
    type: "svg",
    svg: (
      <svg viewBox="0 0 120 40" className="h-10 w-auto">
        <text x="0" y="30" className="fill-current" style={{ fontSize: "14px", fontWeight: 300, letterSpacing: "3px" }}>GROUPE</text>
        <text x="0" y="38" className="fill-current" style={{ fontSize: "28px", fontWeight: 700 }}>SNEF</text>
      </svg>
    ),
  },
  {
    name: "Eiffage Construction",
    type: "svg",
    svg: (
      <svg viewBox="0 0 140 40" className="h-10 w-auto">
        <text x="0" y="25" className="fill-current" style={{ fontSize: "22px", fontWeight: 700 }}>EIFFAGE</text>
        <text x="0" y="38" className="fill-current" style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "1px" }}>CONSTRUCTION</text>
      </svg>
    ),
  },
  {
    name: "Ville de Nantes",
    type: "svg",
    svg: (
      <svg viewBox="0 0 120 45" className="h-12 w-auto">
        <text x="0" y="12" className="fill-current" style={{ fontSize: "8px", letterSpacing: "1px" }}>VILLE DE</text>
        <text x="0" y="35" className="fill-current" style={{ fontSize: "24px", fontWeight: 700 }}>Nantes</text>
      </svg>
    ),
  },
  {
    name: "Vinci Energies",
    type: "svg",
    svg: (
      <svg viewBox="0 0 120 40" className="h-10 w-auto">
        <text x="0" y="25" className="fill-current" style={{ fontSize: "24px", fontWeight: 700 }}>VINCI</text>
        <text x="75" y="25" className="fill-current" style={{ fontSize: "10px", fontWeight: 400 }}>ENERGIES</text>
      </svg>
    ),
  },
  {
    name: "McDonald's",
    type: "image",
    src: "/images/clients/mcdonalds.png",
  },
  {
    name: "Bouygues Construction",
    type: "svg",
    svg: (
      <svg viewBox="0 0 160 40" className="h-10 w-auto">
        <rect x="0" y="5" width="160" height="30" rx="4" className="fill-current opacity-20" />
        <text x="80" y="23" textAnchor="middle" className="fill-current" style={{ fontSize: "14px", fontWeight: 700 }}>BOUYGUES</text>
        <text x="80" y="33" textAnchor="middle" className="fill-current" style={{ fontSize: "8px" }}>CONSTRUCTION</text>
      </svg>
    ),
  },
  {
    name: "Université de Paris",
    type: "svg",
    svg: (
      <svg viewBox="0 0 160 40" className="h-10 w-auto">
        <text x="0" y="25" className="fill-current" style={{ fontSize: "16px", fontWeight: 600 }}>Université</text>
        <text x="85" y="25" className="fill-current" style={{ fontSize: "16px", fontWeight: 300 }}>de Paris</text>
      </svg>
    ),
  },
  {
    name: "Mairie de Toulouse",
    type: "svg",
    svg: (
      <svg viewBox="0 0 140 45" className="h-12 w-auto">
        <text x="0" y="12" className="fill-current" style={{ fontSize: "10px", letterSpacing: "0.5px" }}>MAIRIE DE</text>
        <text x="0" y="35" className="fill-current" style={{ fontSize: "22px", fontWeight: 700 }}>TOULOUSE</text>
      </svg>
    ),
  },
  {
    name: "Carrefour",
    type: "image",
    src: "/images/clients/carrefour.png",
  },
  {
    name: "Total Energies",
    type: "svg",
    svg: (
      <svg viewBox="0 0 140 40" className="h-10 w-auto">
        <text x="0" y="28" className="fill-current" style={{ fontSize: "22px", fontWeight: 700 }}>Total</text>
        <text x="55" y="28" className="fill-current" style={{ fontSize: "22px", fontWeight: 400 }}>Energies</text>
      </svg>
    ),
  },
];

export default function Clients() {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Ils nous font confiance
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Nos clients
          </h2>
        </motion.div>
      </Container>

      {/* Infinite scroll container */}
      <div className="relative">
        {/* Gradient overlays for fade effect */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-white to-transparent z-10" />

        {/* Scrolling container */}
        <div className="flex animate-scroll">
          {/* First set */}
          <div className="flex shrink-0 items-center">
            {clients.map((client, index) => (
              <div
                key={`first-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12"
              >
                <div className="w-44 h-20 flex items-center justify-center text-gray-400 grayscale hover:grayscale-0 hover:text-gray-700 transition-all duration-300">
                  {client.type === "image" ? (
                    <Image
                      src={client.src!}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-14"
                    />
                  ) : (
                    client.svg
                  )}
                </div>
              </div>
            ))}
          </div>
          {/* Duplicate set for seamless loop */}
          <div className="flex shrink-0 items-center">
            {clients.map((client, index) => (
              <div
                key={`second-${index}`}
                className="flex items-center justify-center mx-8 md:mx-12"
              >
                <div className="w-44 h-20 flex items-center justify-center text-gray-400 grayscale hover:grayscale-0 hover:text-gray-700 transition-all duration-300">
                  {client.type === "image" ? (
                    <Image
                      src={client.src!}
                      alt={client.name}
                      width={120}
                      height={60}
                      className="object-contain max-h-14"
                    />
                  ) : (
                    client.svg
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
