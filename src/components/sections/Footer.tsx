"use client";

import Container from "@/components/ui/Container";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark">
      {/* Contact Info Section */}
      <div className="border-b border-gray-800">
        <Container>
          <div className="py-12 grid md:grid-cols-3 gap-8">
            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Adresse</h4>
                <p className="text-gray-400 text-sm">
                  82, rue Maurice Berteaux<br />
                  95360 Montmagny
                </p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Téléphone</h4>
                <a href="tel:+33187661381" className="text-gray-400 text-sm hover:text-accent transition-colors">
                  +33 1 87 66 13 81
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-1">Email</h4>
                <a href="mailto:contact@iprojex.fr" className="text-gray-400 text-sm hover:text-accent transition-colors">
                  contact@iprojex.fr
                </a>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Bottom Section */}
      <Container>
        <div className="py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Logo */}
          <div className="text-2xl font-bold text-white">
            IPRO<span className="text-accent">JEX</span>
          </div>

          {/* Links */}
          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Mentions légales
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Politique de confidentialité
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-500 text-sm">
            © {currentYear} IPROJEX. Tous droits réservés.
          </p>
        </div>
      </Container>
    </footer>
  );
}
