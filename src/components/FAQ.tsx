import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    question: 'Jak rychle přijedete k nouzovému otevření?',
    answer: 'Zámečník vyjíždí ihned po vašem telefonickém schválení. Díky naší lokální působnosti a strategickému rozmístění po celém Brně jsme na místě nehody obvykle do 20 až 30 minut, v závislosti na aktuální dopravní situaci.',
  },
  {
    question: 'Kolik stojí nouzové otevření dveří?',
    answer: 'Naše ceny jsou férové a transparentní – přibližnou částku vám sdělíme hned po telefonu na základě vašeho popisu problému. Základní šetrné otevření zabouchnutých dveří začíná na 800 Kč. U nás se nemusíte bát žádných skrytých poplatků za výjezd nebo neočekávaných přirážek.',
  },
  {
    question: 'Poškodíte mi při otevírání dveře nebo zámek?',
    answer: 'V naprosté většině případů (více než 98 %) otevíráme dveře zcela bez jakéhokoliv poškození zámku, cylindrické vložky či kování. Používáme moderní zámečnické přípravky a šetrné profesionální techniky. Pokud je nutné zámek odvrtat (např. při mechanické závadě uvnitř), ihned namontujeme novou vložku, abyste byli v bezpečí.',
  },
  {
    question: 'Funguje vaše pohotovost i o víkendech a svátcích?',
    answer: 'Ano, naše zámečnická pohotovost funguje nepřetržitě 24 hodin denně, 7 dní v týdnu, 365 dní v roce. Vyjíždíme v noci, o víkendech i během státních svátků. Kdykoliv se ocitnete v nouzi, stačí zavolat.',
  },
  {
    question: 'Jaké oblasti v Brně a okolí obsluhujete?',
    answer: 'Působíme po celém území města Brna (včetně okrajových částí jako Bystrc, Líšeň, Královo Pole, Brno-venkov atd.) a také v celém přilehlém okolí do vzdálenosti přibližně 50 km (např. Kuřim, Šlapanice, Rosice, Modřice, Tišnov).',
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-slate-900/30 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-14">
          <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">Časté dotazy</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            Zeptejte se na cokoliv
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Máte dotaz k našim službám? Zde najdete rychlé odpovědi na nejčastější situace.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`bg-slate-900/40 backdrop-blur-md rounded-2xl border transition-all duration-350 ${
                  isOpen ? 'border-amber-500/40 bg-slate-900/60 shadow-lg shadow-amber-500/2' : 'border-slate-800/80 hover:border-slate-700/80'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex items-center justify-between p-6 text-left cursor-pointer group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-5 h-5 flex-shrink-0 transition-colors duration-300 ${
                      isOpen ? 'text-amber-400' : 'text-slate-500 group-hover:text-slate-400'
                    }`} />
                    <span className="text-white font-extrabold text-base sm:text-lg tracking-tight">
                      {faq.question}
                    </span>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-350 ${
                    isOpen ? 'transform rotate-180 text-amber-400' : 'group-hover:text-slate-350'
                  }`} />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-350 ease-in-out ${
                    isOpen ? 'max-h-60 border-t border-slate-850' : 'max-h-0'
                  }`}
                >
                  <div className="p-6 text-slate-350 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
