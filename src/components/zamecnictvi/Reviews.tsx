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
    <section id="reference" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-amber-600 font-semibold text-sm uppercase tracking-widest mb-2">Reference</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Co říkají naši zákazníci
          </h2>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Rychlá a spolehlivá pomoc, když ji nejvíce potřebujete.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.author}
              className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-8 h-8 text-amber-300 mb-4" />

              <p className="text-slate-600 text-sm leading-relaxed mb-5">{review.text}</p>

              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-slate-900 text-sm">{review.author}</p>
                  <p className="text-slate-400 text-xs">{review.location}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicator */}
        <div className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 text-slate-500 text-sm">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span>5.0 průměrné hodnocení • 500+ spokojených zákazníků</span>
          </div>
        </div>
      </div>
    </section>
  );
}
