import { Phone, Mail } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
      {/* Soft ambient glowing spot */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[350px] bg-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      {/* Subtle graphic overlay for luxury feel */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M54 48c-2 0-3 1-4 2v4c1 1 2 2 4 2h4c2 0 3-1 4-2v-4c-1-1-2-2-4-2h-4zm-36 0c-2 0-3 1-4 2v4c1 1 2 2 4 2h4c2 0 3-1 4-2v-4c-1-1-2-2-4-2h-4zM36 30c-2 0-3 1-4 2v4c1 1 2 2 4 2h4c2 0 3-1 4-2v-4c-1-1-2-2-4-2h-4zm-18 0c-2 0-3 1-4 2v4c1 1 2 2 4 2h4c2 0 3-1 4-2v-4c-1-1-2-2-4-2h-4zM18 12c-2 0-3 1-4 2v4c1 1 2 2 4 2h4c2 0 3-1 4-2v-4c-1-1-2-2-4-2h-4zm36 0c-2 0-3 1-4 2v4c1 1 2 2 4 2h4c2 0 3-1 4-2v-4c-1-1-2-2-4-2h-4z' fill='%23ffffff' fill-opacity='0.15' fill-rule='evenodd'/%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4 tracking-tight">
          Zabouchli jste si klíče? Potřebujete zámečníka hned?
        </h2>
        <p className="text-slate-300 font-medium text-lg sm:text-xl mb-10 max-w-2xl mx-auto opacity-90">
          Nečekejte venku v chladu. Zavolejte nám okamžitě pro rychlou, šetrnou a cenově výhodnou pomoc po celém Brně a okolí.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:+420777818339"
            className="flex items-center justify-center gap-3 bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold px-8 py-5 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-amber-500/20 hover:-translate-y-0.5 animate-pulse-gold"
          >
            <Phone className="w-6 h-6 animate-pulse" />
            <span>Zavolat +420 777 818 339</span>
          </a>
          <a
            href="#kontakt"
            className="flex items-center justify-center gap-3 bg-slate-900/60 hover:bg-slate-800/80 text-white font-extrabold px-8 py-5 rounded-2xl text-lg transition-all border border-slate-800 hover:-translate-y-0.5"
          >
            <Mail className="w-5 h-5" />
            <span>Napište nám</span>
          </a>
        </div>
        <p className="text-slate-550 text-sm font-bold mt-8">
          Dostupnost 24/7, včetně víkendů a svátků • Dojezd do 30 minut • Profesionální vybavení
        </p>
      </div>
    </section>
  );
}
