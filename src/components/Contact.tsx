import { Phone, Mail, Clock, MapPin, Shield } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-amber-500/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact info */}
          <div>
            <p className="text-amber-500 font-bold text-sm uppercase tracking-widest mb-2">Kontakt</p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-5">
              Non-stop pohotovost 24/7
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Zavolejte nám kdykoliv. Jsme připraveni vyrazit ihned po vašem volání.
            </p>

            <div className="space-y-4">
              <a
                href="tel:+420777818339"
                className="flex items-start gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:bg-slate-850 hover:border-amber-500/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Telefon (pohotovost)</p>
                  <p className="text-white font-extrabold text-lg group-hover:text-amber-400 transition-colors">
                    +420 777 818 339
                  </p>
                </div>
              </a>

              <a
                href="mailto:kodys.petr1@gmail.com"
                className="flex items-start gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl hover:bg-slate-850 hover:border-amber-500/20 transition-all duration-300 group"
              >
                <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-200">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Email</p>
                  <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    kodys.petr1@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl">
                <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Provozní doba</p>
                  <p className="text-white font-semibold">Non-stop pohotovost 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-900/40 border border-slate-800/80 rounded-xl">
                <div className="w-11 h-11 bg-amber-500/10 border border-amber-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-0.5">Oblast působnosti</p>
                  <p className="text-white font-semibold">Brno a okolí do 50 km</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-slate-900/40 backdrop-blur-md rounded-2xl p-8 text-center border border-slate-800/80 shadow-2xl relative overflow-hidden group">
            {/* Glowing amber inside card */}
            <div className="absolute -bottom-10 -right-10 w-44 h-44 bg-amber-500/5 blur-[45px] rounded-full pointer-events-none group-hover:bg-amber-500/10 transition-all duration-500" />

            <Shield className="w-12 h-12 text-amber-400/20 mx-auto mb-4 group-hover:scale-105 transition-transform duration-300" />
            <h3 className="text-2xl font-black text-white mb-3">
              Zablokované dveře? Zavolejte ihned
            </h3>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              Průměrný čas příjezdu 25 minut. Šetrné otevírání bez poškození.
            </p>
            <a
              href="tel:+420777818339"
              className="inline-flex items-center gap-2.5 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-4 rounded-xl transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-0.5 animate-pulse-gold"
            >
              <Phone className="w-5 h-5" />
              +420 777 818 339
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
