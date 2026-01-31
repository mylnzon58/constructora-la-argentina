'use client';

import dynamic from 'next/dynamic';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';

// Lazy load below-fold components to reduce initial bundle and TBT
const Portfolio = dynamic(() => import('../components/Portfolio'), {
  loading: () => <div className="min-h-screen" />,
});
const Team = dynamic(() => import('../components/Team'), {
  loading: () => <div className="min-h-screen" />,
});
const Coverage = dynamic(() => import('../components/Coverage'), {
  loading: () => <div className="min-h-screen" />,
});
const Trust = dynamic(() => import('../components/Trust'), {
  loading: () => <div className="min-h-screen" />,
});
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
