import { Phone, MapPin, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Zavoláte nám',
    description: 'Popíšete nám svůj zámečnický problém. Hned po telefonu vám sdělíme přibližnou cenu a čas příjezdu zámečníka.',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'Rychle přijedeme',
    description: 'Zámečník vyjíždí ihned po vašem schválení. Díky lokální působnosti jsme v Brně a okolí obvykle na místě do 30 minut.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Vyřešeno bez poškození',
    description: 'Šetrně a profesionálně otevřeme dveře, auto nebo vyměníme zámek. Odjíždíme až po vaší plné spokojenosti a kontrole.',
  },
];

export function HowItWorks() {
  return (
    <section id="jak-to-funguje" className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">Jednoduchý postup</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">Jak to funguje?</h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Získat rychlou pomoc je snadné. Stačí 3 rychlé kroky od vašeho telefonátu k vyřešení problému.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(33.33%+1.5rem)] right-[calc(33.33%+1.5rem)] h-px bg-gradient-to-r from-amber-500/20 via-amber-500/70 to-amber-500/20 shadow-md shadow-amber-500/10" />

          {steps.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center group">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-slate-900 border-2 border-slate-800/80 rounded-2xl flex items-center justify-center group-hover:border-amber-500/50 transition-all duration-300 shadow-2xl">
                  <Icon className="w-10 h-10 text-amber-400 group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center shadow-lg shadow-amber-500/30 border border-amber-400/20">
                  <span className="text-slate-950 font-black text-xs">{number}</span>
                </div>
              </div>
              <h3 className="text-white font-extrabold text-xl mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
