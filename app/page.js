'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Coverage from '../components/Coverage';
import Trust from '../components/Trust';
import Contact from '../components/Contact';
import Location from '../components/Location';
import Footer from '../components/Footer';

export default function Home() {
  useEffect(() => {
    // Inicializar AOS (Animate On Scroll)
    AOS.init({
      duration: 800,
      once: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });

    // Refresh AOS on route change
    return () => {
      AOS.refresh();
    };
  }, []);

  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Team />
      <Coverage />
      <Trust />
      <Contact />
      <Location />
      <Footer />
    </main>
  );
}
