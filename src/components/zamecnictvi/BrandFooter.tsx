import { Lock, Phone, Mail, MapPin, Star } from 'lucide-react';

const services = [
  { name: 'Nouzové otevírání dveří', href: '#sluzby' },
  { name: 'Otevírání automobilů', href: '#sluzby' },
  { name: 'Výměna zámků a cylindrických vložek', href: '#sluzby' },
  { name: 'Servis a opravy po vloupání', href: '#sluzby' },
  { name: 'Montáž bezpečnostního kování', href: '#sluzby' },
];

const areas = [
  'Brno-střed', 'Brno-Líšeň', 'Královo Pole', 'Žabovřesky',
  'Bystrc', 'Židenice', 'Řečkovice', 'Kohoutovice',
];

export function BrandFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-2.5 mb-5 text-white">
              <div className="w-9 h-9 bg-amber-500 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-slate-950" />
              </div>
              <div className="leading-none">
                <span className="block font-extrabold text-base tracking-tight">Zámečnictví Brno</span>
                <span className="text-amber-400 text-[9px] font-bold tracking-widest uppercase">PETR KODÝS</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5 text-slate-450">
              Profesionální zámečnické služby a rychlá non-stop pohotovost po celém Brně a okolí do 50 km. Šetrné otevírání bez poškození a férové jednání.
            </p>
            <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-500/10 border border-amber-500/20 px-3 py-1.5 rounded-full w-fit">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span>5.0 Hodnocení zákazníků</span>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Naše Služby</h4>
            <ul className="space-y-2.5">
              {services.map((s, idx) => (
                <li key={idx}>
                  <a href={s.href} className="text-sm hover:text-amber-450 transition-colors text-slate-400">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage Column */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Oblasti působnosti</h4>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-2.5">
              {areas.map((area) => (
                <li key={area} className="text-sm flex items-center gap-1 text-slate-400">
                  <div className="w-1 h-1 bg-amber-500 rounded-full" />
                  <span>{area}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-slate-500 mt-4 italic">A celé okolí Brna do 50 km</p>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-white font-extrabold mb-5 text-sm uppercase tracking-wider">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+420777818339" className="flex items-start gap-3 hover:text-amber-450 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm font-bold text-slate-350">+420 777 818 339</span>
                </a>
              </li>
              <li>
                <a href="mailto:kodys.petr1@gmail.com" className="flex items-start gap-3 hover:text-amber-450 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                  <span className="text-sm text-slate-350">kodys.petr1@gmail.com</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-amber-500 flex-shrink-0" />
                <span className="text-sm text-slate-350">Brno, Česká republika</span>
              </li>
            </ul>
            <div className="mt-5 p-4 bg-slate-900/50 rounded-xl border border-slate-900">
              <p className="text-white text-sm font-bold mb-0.5">Zámečnická pohotovost</p>
              <p className="text-xs text-amber-400 font-semibold">Non-stop provoz 24/7 (včetně svátků)</p>
            </div>
          </div>
        </div>

        {/* Divider & Bottom copyright */}
        <div className="border-t border-slate-900 pt-8 mt-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; {currentYear} Petr Kodýs, Brno. Všechna práva vyhrazena.</p>
            <div className="flex gap-5 text-slate-500">
              <span>IČO: 05244517</span>
              <span>Non-stop zámečnická pomoc</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
