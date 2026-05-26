import { CheckCircle2 } from 'lucide-react';

const points = [
  'Dlouholetá praxe v Brně a okolí',
  'Plně licencovaný a pojištěný zámečník',
  'Instalace certifikovaných bezpečnostních prvků',
  'Příjezd bez skrytých poplatků za výjezd',
  'Férové nacenění práce předem',
  'Profesionální přístup bez zbytečného prodlení',
];

export function AboutUs() {
  return (
    <section id="o-nas" className="py-20 bg-slate-900/30 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-slate-800/80">
              <img
                src="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Zámečník Petr Kodýs při práci"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl px-6 py-4 shadow-2xl shadow-amber-500/20 border border-amber-400/20 hidden sm:block">
              <p className="text-slate-950 font-black text-3xl leading-none">10+</p>
              <p className="text-slate-950 font-extrabold text-sm mt-1">Let Zkušeností</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">O Nás</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5 leading-tight">
              Spolehlivý a rychlý zámečník v Brně
            </h2>
            <p className="text-slate-350 text-lg leading-relaxed mb-6">
              Zámečnictví Petr Kodýs nabízí profesionální zámečnické služby a non-stop zámečnickou pohotovost pro celé Brno a okolní obce. Zakládáme si na rychlosti dojezdu, stoprocentní šetrnosti bez zbytečného poškození dveří a férových, předem domluvených cenách.
            </p>
            <p className="text-slate-400 leading-relaxed mb-8">
              Ať už jste si zabouchli dveře bytu, ztratili klíče od auta v nejnevhodnější dobu, nebo potřebujete kompletní výměnu cylindrické vložky, naši zámečníci dorazí vybaveni moderním nářadím a vyřeší váš problém čistě a bez stresu.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 group">
                  <CheckCircle2 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200" />
                  <span className="text-slate-300 text-sm font-medium leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
