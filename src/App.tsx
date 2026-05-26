import { useState, useEffect } from 'react';
import { Hero } from './components/zamecnictvi/Hero';
import { Services } from './components/zamecnictvi/Services';
import { Reviews } from './components/zamecnictvi/Reviews';
import { Contact } from './components/zamecnictvi/Contact';
import { Footer } from './components/zamecnictvi/Footer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'new' | 'old'>('new');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    if (hash === 'old') {
      setCurrentPage('old');
    }
  }, []);

  const switchToOld = () => {
    setCurrentPage('old');
    window.location.hash = 'old';
  };

  const switchToNew = () => {
    setCurrentPage('new');
    window.location.hash = '';
  };

  if (currentPage === 'old') {
    return (
      <div className="min-h-screen bg-white">
        <div className="fixed top-4 right-4 z-50">
          <button
            onClick={switchToNew}
            className="bg-amber-500 hover:bg-amber-400 text-slate-900 font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow-lg"
          >
            Nová stránka
          </button>
        </div>
        <OldPage />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <div className="fixed top-4 right-4 z-50">
        <button
          onClick={switchToOld}
          className="bg-slate-800 hover:bg-slate-700 text-white font-semibold px-4 py-2 rounded-lg text-sm transition-colors shadow-lg"
        >
          Stará stránka
        </button>
      </div>
      <Hero />
      <Services />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

function OldPage() {
  const { Header } = require('./components/Header');
  const { HeroSlider } = require('./components/HeroSlider');
  const { TrustBar } = require('./components/TrustBar');
  const { Services: OldServices } = require('./components/Services');
  const { AboutUs } = require('./components/AboutUs');
  const { ContactForm } = require('./components/ContactForm');
  const { HowItWorks } = require('./components/HowItWorks');
  const { Reviews: OldReviews } = require('./components/Reviews');
  const { FinalCTA } = require('./components/FinalCTA');
  const { Footer: OldFooter } = require('./components/Footer');

  return (
    <>
      <Header />
      <HeroSlider />
      <TrustBar />
      <OldServices />
      <AboutUs />
      <ContactForm />
      <HowItWorks />
      <OldReviews />
      <FinalCTA />
      <OldFooter />
    </>
  );
}
