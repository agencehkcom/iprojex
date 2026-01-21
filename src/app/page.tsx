import Navigation from "@/components/Navigation";
import Hero from "@/components/sections/Hero";
import Clients from "@/components/sections/Clients";
import Features from "@/components/sections/Features";
import Realisations from "@/components/sections/Realisations";
import Process from "@/components/sections/Process";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Coverage from "@/components/sections/Coverage";
import CTA from "@/components/sections/CTA";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Clients />
      <Features />
      <Realisations />
      <Process />
      <Testimonials />
      <Coverage />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
