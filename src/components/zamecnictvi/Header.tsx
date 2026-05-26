import { useState, useEffect } from 'react';
import { Phone, Menu, X, Lock, Clock } from 'lucide-react';

const navLinks = [
  { label: 'Domů', href: '#' },
  { label: 'Služby', href: '#sluzby' },
  { label: 'O nás', href: '#o-nas' },
  { label: 'Jak to funguje', href: '#jak-to-funguje' },
  { label: 'Reference', href: '#reference' },
  { label: 'Kontakt', href: '#kontakt' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/95 backdrop-blur-md shadow-lg border-b border-slate-800/50' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 py-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 bg-amber-500 rounded-xl flex items-center justify-center group-hover:bg-amber-400 transition-colors shadow-lg shadow-amber-500/20">
              <Lock className="w-5.5 h-5.5 text-slate-950" />
            </div>
            <div className="leading-tight">
              <span className="block text-white font-extrabold text-lg tracking-tight sm:text-xl">
                Zámečnictví Brno
              </span>
              <span className="block text-amber-400 text-[10px] font-bold tracking-widest uppercase">
                PETR KODÝS • NON-STOP
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 text-sm font-semibold transition-colors relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-0.5 after:bg-amber-500 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA & Emergency Indicator */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-emerald-400 text-xs font-semibold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping" />
              <span>Jsme online 24/7</span>
            </div>
            <a
              href="tel:+420777818339"
              className="flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-2.5 rounded-xl text-sm transition-all hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>+420 777 818 339</span>
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-slate-950 border-t border-slate-850 px-4 pb-6 pt-4 shadow-xl animate-in fade-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-4 mb-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-slate-300 hover:text-amber-400 font-semibold text-base py-1 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-center gap-2 text-emerald-400 text-sm font-semibold bg-emerald-500/10 border border-emerald-500/20 py-2 rounded-xl">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              <span>Pohotovost aktivní: Přijedeme do 30 min</span>
            </div>
            <a
              href="tel:+420777818339"
              className="flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-4 py-3 rounded-xl transition-colors shadow-lg shadow-amber-500/10"
            >
              <Phone className="w-4 h-4" />
              <span>Zavolat pohotovost +420 777 818 339</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
