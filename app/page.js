'use client';

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Team from '../components/Team';
import Coverage from '../components/Coverage';
import Trust from '../components/Trust';

// Lazy load only heavy bottom components to balance mobile/desktop performance
const Contact = dynamic(() => import('../components/Contact'), {
  loading: () => <div className="min-h-screen" />,
});
const Location = dynamic(() => import('../components/Location'), {
  loading: () => <div className="min-h-screen" />,
});
const Footer = dynamic(() => import('../components/Footer'), {
  loading: () => <div className="min-h-[200px]" />,
});

export default function Home() {
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
