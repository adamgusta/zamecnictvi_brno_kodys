import { ShieldCheck, Clock, Star, BadgeCheck, ThumbsUp } from 'lucide-react';

const items = [
  { icon: Clock, label: 'Dojezd do 30 min', sub: 'Pohotovost po celém Brně' },
  { icon: ShieldCheck, label: 'Šetrné otevírání', sub: 'Vždy bez poškození dveří' },
  { icon: Star, label: '5★ Zámečník', sub: 'Stovky spokojených klientů' },
  { icon: BadgeCheck, label: 'Férová cena', sub: 'Znáte cenu předem' },
  { icon: ThumbsUp, label: 'Záruka na práci', sub: 'Profesionální standardy' },
];

export function TrustBar() {
  return (
    <section className="bg-slate-950 border-y border-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-slate-900">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 py-5 px-4 lg:px-6">
              <div className="w-10 h-10 bg-amber-500/10 rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="w-5.5 h-5.5 text-amber-400" />
              </div>
              <div>
                <p className="text-white font-bold text-sm tracking-tight">{label}</p>
                <p className="text-slate-400 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
