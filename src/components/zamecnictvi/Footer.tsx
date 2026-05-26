import { Phone, Mail, Lock } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo/Brand */}
          <div className="flex items-center gap-2 text-white">
            <div className="w-8 h-8 bg-amber-500 rounded-lg flex items-center justify-center">
              <Lock className="w-4 h-4 text-slate-900" />
            </div>
            <span className="font-bold">Zámečnictví Brno</span>
          </div>

          {/* Contact info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
            <a
              href="tel:+420777818339"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +420 777 818 339
            </a>
            <a
              href="mailto:kodys.petr1@gmail.com"
              className="flex items-center gap-2 hover:text-amber-400 transition-colors"
            >
              <Mail className="w-4 h-4" />
              kodys.petr1@gmail.com
            </a>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-slate-800 mt-6 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>&copy; {currentYear} Petr Kodýs, Brno. Všechna práva vyhrazena.</p>
          <p className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
            Non-stop pohotovost 24/7
          </p>
        </div>
      </div>
    </footer>
  );
}
