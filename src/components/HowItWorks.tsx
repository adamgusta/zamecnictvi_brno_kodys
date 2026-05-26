import { Phone, MapPin, CircleCheck as CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Phone,
    number: '01',
    title: 'Call or Request a Quote',
    description: 'Phone us directly or fill out the contact form. We\'ll confirm availability and give you an upfront price — no surprises.',
  },
  {
    icon: MapPin,
    number: '02',
    title: 'We Come to You Fast',
    description: 'A local, certified locksmith will be dispatched immediately. Most Watford call-outs arrive within 30 minutes.',
  },
  {
    icon: CheckCircle2,
    number: '03',
    title: 'Problem Solved, Guaranteed',
    description: 'We fix the issue quickly and cleanly. All work is guaranteed and we leave you with a more secure property than before.',
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-500 font-semibold text-sm uppercase tracking-widest mb-2">Simple Process</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">How It Works</h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto">
            Getting help is straightforward. Three simple steps from your call to problem resolved.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop) */}
          <div className="hidden md:block absolute top-12 left-[calc(33.33%+1.5rem)] right-[calc(33.33%+1.5rem)] h-px bg-gradient-to-r from-yellow-500/40 via-yellow-500/70 to-yellow-500/40" />

          {steps.map(({ icon: Icon, number, title, description }) => (
            <div key={number} className="relative flex flex-col items-center text-center">
              <div className="relative mb-6">
                <div className="w-24 h-24 bg-gray-900 border-2 border-yellow-500/30 rounded-2xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-yellow-400" />
                </div>
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">
                  <span className="text-gray-950 font-bold text-xs">{number}</span>
                </div>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">{title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
