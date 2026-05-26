import { Phone, Clock, MapPin, Shield } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Subtle grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-semibold px-4 py-2 rounded-full mb-8">
            <Clock className="w-4 h-4" />
            <span>Příjezd do 30 minut • Non-stop 24/7</span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
            NON-STOP Zámečnictví Brno
          </h1>

          <p className="text-xl sm:text-2xl text-slate-300 max-w-3xl mx-auto mb-10">
            Nouzové otevírání dveří, aut a výměna zámků. Fungujeme 24/7 po celém Brně a okolí.
          </p>

          {/* Primary CTA */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+420777818339"
              className="group flex items-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold px-8 py-5 rounded-xl text-lg transition-all hover:shadow-2xl hover:shadow-amber-500/30 hover:-translate-y-1"
            >
              <Phone className="w-6 h-6 group-hover:animate-pulse" />
              <span>Zavolat pohotovost:</span>
              <span className="text-xl tracking-tight">+420 777 818 339</span>
            </a>
          </div>

          {/* Quick trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-slate-400 text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-500" />
              <span>Šetrné otevírání bez poškození</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-amber-500" />
              <span>Brno a okolí 50 km</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative gradient bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}
