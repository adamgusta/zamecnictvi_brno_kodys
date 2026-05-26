import { ShieldCheck, Clock, Star, BadgeCheck, ThumbsUp } from 'lucide-react';

const items = [
  { icon: Clock, label: '30-Min Response', sub: 'Local Watford coverage' },
  { icon: ShieldCheck, label: 'Fully Insured', sub: 'Licensed & certified' },
  { icon: Star, label: '5-Star Rated', sub: '200+ Google reviews' },
  { icon: BadgeCheck, label: 'No Call-Out Fee', sub: 'Transparent pricing' },
  { icon: ThumbsUp, label: 'Damage-Free Entry', sub: 'Non-destructive methods' },
];

export function TrustBar() {
  return (
    <section className="bg-gray-950 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 divide-y sm:divide-y-0 divide-x-0 sm:divide-x divide-gray-800">
          {items.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-3 py-5 px-4 lg:px-6">
              <div className="w-10 h-10 bg-yellow-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Icon className="w-5 h-5 text-yellow-400" />
              </div>
              <div>
                <p className="text-white font-semibold text-sm">{label}</p>
                <p className="text-gray-400 text-xs">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
