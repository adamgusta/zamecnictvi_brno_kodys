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
    <section id="o-nas" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Zámečník Petr Kodýs při práci"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-amber-500 rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
              <p className="text-slate-950 font-black text-3xl leading-none">10+</p>
              <p className="text-slate-950 font-bold text-sm mt-1">Let Zkušeností</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-amber-600 font-bold text-sm uppercase tracking-widest mb-2">O Nás</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-5 leading-tight">
              Spolehlivý a rychlý zámečník v Brně
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              Zámečnictví Petr Kodýs nabízí profesionální zámečnické služby a non-stop zámečnickou pohotovost pro celé Brno a okolní obce. Zakládáme si na rychlosti dojezdu, stoprocentní šetrnosti bez zbytečného poškození dveří a férových, předem domluvených cenách.
            </p>
            <p className="text-slate-500 leading-relaxed mb-8">
              Ať už jste si zabouchli dveře bytu, ztratili klíče od auta v nejnevhodnější dobu, nebo potřebujete kompletní výměnu cylindrické vložky, naši zámečníci dorazí vybaveni moderním nářadím a vyřeší váš problém čistě a bez stresu.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-amber-500 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
