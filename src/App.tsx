import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { LogosCarousel } from './components/LogosCarousel';
import { Comparison } from './components/Comparison';
import { Methodology } from './components/Methodology';
import { Projects } from './components/Projects';
import { Recurrence } from './components/Recurrence';
import { TargetAudience } from './components/TargetAudience';
import { Instructor } from './components/Instructor';
import { Pricing } from './components/Pricing';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { MatrixBackground } from './components/MatrixBackground';
import { MoneyRain } from './components/MoneyRain';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const App: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-black text-slate-200 selection:bg-cyan-500 selection:text-black overflow-x-hidden font-inter">
      {/* Background Effects - Reduzida opacidade para garantir contraste */}
      <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
        <MatrixBackground />
      </div>
      <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
        <MoneyRain />
      </div>

      <main className="relative z-10 flex flex-col gap-0">
        <Hero />
        <LogosCarousel />
        <Comparison />
        <Methodology />
        <Projects />
        <Recurrence />
        <TargetAudience />
        <Instructor />
        <Pricing />
        <FAQ />
      </main>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-4 bg-cyan-600/20 border border-cyan-500 hover:bg-cyan-500 hover:text-black text-cyan-400 rounded-full backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.3)] transition-all"
          >
            <ChevronUp size={24} />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;