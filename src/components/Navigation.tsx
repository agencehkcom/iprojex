"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Container from "./ui/Container";
import Button from "./ui/Button";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById("contact-form");
    element?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm"
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="IPROJEX"
              width={160}
              height={50}
              className="h-10 w-auto"
              priority
            />
          </a>

          {/* Desktop Navigation - Centered Menu */}
          <div className="hidden lg:flex items-center justify-center flex-1">
            <div className="flex items-center space-x-8">
              <a
                href="#features"
                className="text-white hover:text-accent transition-colors font-medium"
              >
                Nos services
              </a>
              <a
                href="#realisations"
                className="text-white hover:text-accent transition-colors font-medium"
              >
                Réalisations
              </a>
              <a
                href="#process"
                className="text-white hover:text-accent transition-colors font-medium"
              >
                Processus
              </a>
              <a
                href="#testimonials"
                className="text-white hover:text-accent transition-colors font-medium"
              >
                Témoignages
              </a>
            </div>
          </div>

          {/* Right side - Phone + CTA */}
          <div className="hidden lg:flex items-center space-x-4 shrink-0">
            <a
              href="tel:+33187661381"
              className="flex items-center text-white hover:text-accent transition-colors font-medium"
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
            <Button onClick={scrollToForm} variant="primary" size="md">
              Devis Gratuit
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Menu"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white border-t"
            >
              <div className="py-4 space-y-2">
                <a
                  href="#features"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Nos services
                </a>
                <a
                  href="#realisations"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Réalisations
                </a>
                <a
                  href="#process"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Processus
                </a>
                <a
                  href="#testimonials"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center text-gray-600 hover:text-primary transition-colors py-2 font-medium"
                >
                  Témoignages
                </a>
                <a
                  href="tel:+33187661381"
                  className="flex items-center justify-center text-gray-600 hover:text-primary transition-colors py-2 font-medium"
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
                <div className="px-4 pt-2">
                  <Button
                    onClick={scrollToForm}
                    variant="primary"
                    size="md"
                    className="w-full"
                  >
                    Devis Gratuit
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </motion.nav>
  );
}
