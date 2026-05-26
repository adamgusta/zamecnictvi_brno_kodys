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
    <section id="sluzby" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Naše služby</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Profesionální zámečnické služby
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Rychlé a spolehlivé řešení každé situace. Pomoc je na cestě ihned po vašem zavolání.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="group bg-white rounded-2xl p-7 border border-slate-200 hover:border-amber-300 hover:shadow-xl hover:shadow-amber-100/50 transition-all duration-300"
              >
                <div className="w-14 h-14 bg-amber-50 group-hover:bg-amber-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-amber-500 group-hover:text-slate-900 transition-colors duration-300" />
                </div>

                <h3 className="font-bold text-slate-900 text-xl mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-slate-600">
                      <div className="w-1.5 h-1.5 bg-amber-500 rounded-full" />
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
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-500 font-semibold transition-colors group"
          >
            <span>Potřebujete pomoc ihned? Zavolejte nám</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
}
