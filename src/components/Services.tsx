import { Key, Car, Lock, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Key,
    title: 'Nouzové otevírání dveří',
    description: 'Byty, domy, zabouchnuté i zamčené klíče. Šetrně bez poškození, rychle na místě.',
    features: ['Dveře bytů a domů', 'Zabouchnuté klíče', 'Bez poškození zámku'],
  },
  {
    icon: Car,
    title: 'Otevírání automobilů',
    description: 'Rychlé otevření aut všech značek při ztrátě nebo zabouchnutí klíčů uvnitř.',
    features: ['Všechny značky aut', 'Do 30 minut na místě', 'Ztracené i zabouchnuté klíče'],
  },
  {
    icon: Lock,
    title: 'Výměna zámků a zabezpečení',
    description: 'Výměna cylindrických vložek, servis po vloupání, montáž bezpečnostního kování.',
    features: ['Cylindrické vložky', 'Servis po vloupání', 'Bezpečnostní kování'],
  },
];

export function Services() {
  return (
    <section id="sluzby" className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">Naše služby</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Profesionální zámečnické služby
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Rychlé a spolehlivé řešení každé situace. Pomoc je na cestě ihned po vašem zavolání.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-slate-900/40 backdrop-blur-md rounded-2xl p-7 border border-slate-800/80 hover:border-amber-500/40 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-500/10 group-hover:bg-amber-500 border border-amber-500/20 group-hover:border-transparent rounded-xl flex items-center justify-center mb-5 transition-all duration-300">
                  <Icon className="w-7 h-7 text-amber-400 group-hover:text-slate-950 transition-colors duration-300" />
                </div>

                <h3 className="font-extrabold text-white text-xl mb-3">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2.5 text-sm text-slate-300">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <a
            href="tel:+420777818339"
            className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold transition-colors group"
          >
            <span>Potřebujete pomoc ihned? Zavolejte nám</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
