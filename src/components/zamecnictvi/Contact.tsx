import { Phone, Mail, Clock, MapPin, Shield } from 'lucide-react';

export function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Contact info */}
          <div>
            <p className="text-amber-400 font-semibold text-sm uppercase tracking-widest mb-2">Kontakt</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5">
              Non-stop pohotovost 24/7
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Zavolejte nám kdykoliv. Jsme připraveni vyrazit ihned po vašem volání.
            </p>

            <div className="space-y-5">
              <a
                href="tel:+420777818339"
                className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
              >
                <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Telefon (pohotovost)</p>
                  <p className="text-white font-bold text-lg group-hover:text-amber-400 transition-colors">
                    +420 777 818 339
                  </p>
                </div>
              </a>

              <a
                href="mailto:kodys.petr1@gmail.com"
                className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl hover:bg-slate-700 transition-colors group"
              >
                <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Email</p>
                  <p className="text-white font-semibold group-hover:text-amber-400 transition-colors">
                    kodys.petr1@gmail.com
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl">
                <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Provozní doba</p>
                  <p className="text-white font-semibold">Non-stop pohotovost 24/7</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-slate-800 rounded-xl">
                <div className="w-11 h-11 bg-amber-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mb-1">Oblast působnosti</p>
                  <p className="text-white font-semibold">Brno a okolí do 50 km</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: CTA card */}
          <div className="bg-gradient-to-br from-amber-500 to-amber-600 rounded-2xl p-8 text-center">
            <Shield className="w-12 h-12 text-slate-900/50 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-slate-900 mb-3">
              Zablokované dveře? Zavolejte ihned
            </h3>
            <p className="text-slate-800 text-sm mb-6">
              Průměrný čas příjezdu 25 minut. Šetrné otevírání bez poškození.
            </p>
            <a
              href="tel:+420777818339"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold px-6 py-4 rounded-xl transition-colors"
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
