import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { Services } from './components/Services';
import { AboutUs } from './components/AboutUs';
import { HowItWorks } from './components/HowItWorks';
import { Reviews } from './components/Reviews';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Contact } from './components/Contact';
import { BrandFooter } from './components/BrandFooter';
import { Analytics } from '@vercel/analytics/react';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-amber-500/30 selection:text-white antialiased">
      <Header />
      <Hero />
      <TrustBar />
      <Services />
      <AboutUs />
      <HowItWorks />
      <Reviews />
      <FAQ />
      <FinalCTA />
      <Contact />
      <BrandFooter />
      <Analytics />
    </div>
  );
}
