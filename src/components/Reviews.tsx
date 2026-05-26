import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    text: 'Rychlý příjezd v noci do Líšně, super domluva a férová cena. Práce byla hotová během 20 minut. Velvetmi doporučuji!',
    author: 'Martin K.',
    location: 'Brno-Líšeň',
    rating: 5,
  },
  {
    text: 'Zabouchnuté klíče od auta vyřešeny do půl hodiny. Pan Kodýs byl velmi ochotný a profesionální. Díky!',
    author: 'Petra S.',
    location: 'Brno-střed',
    rating: 5,
  },
  {
    text: 'Přišli rychle, otevřeli dveře bez poškození a vyměnili zámek. Vše bez skrytých poplatků. Spokojenost.',
    author: 'Jan H.',
    location: 'Brno-Královo Pole',
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reference" className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 right-1/4 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">Reference</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Co říkají naši zákazníci
          </h2>
          <p className="text-slate-450 text-lg max-w-xl mx-auto">
            Rychlá a spolehlivá pomoc, když ji nejvíce potřebujete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-6 border border-slate-800/80 hover:border-amber-500/30 hover:shadow-2xl hover:shadow-amber-500/5 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <Quote className="w-8 h-8 text-amber-500/20 mb-4" />
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
              </div>

              <div className="flex items-center justify-between border-t border-slate-800/60 pt-4 mt-auto">
                <div>
                  <p className="font-extrabold text-white text-sm">{review.author}</p>
                  <p className="text-slate-500 text-xs mt-0.5">{review.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400 animate-pulse" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2.5 text-slate-400 text-sm bg-slate-900/40 border border-slate-850 px-4 py-2 rounded-full w-fit mx-auto backdrop-blur-md">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
              ))}
            </div>
            <span>5.0 průměrné hodnocení • 500+ spokojených zákazníků</span>
          </div>
        </div>
      </div>
    </section>
  );
}
