import { Chrome as Home, Building2, Car, KeyRound, ShieldCheck, Wrench } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Residential Locksmith',
    description: 'Emergency lockouts, lock replacements, and security upgrades for homes across Watford and Hertfordshire.',
  },
  {
    icon: Building2,
    title: 'Commercial Locksmith',
    description: 'Master key systems, access control, and high-security locks for offices, shops, and businesses.',
  },
  {
    icon: Car,
    title: 'Auto Locksmith',
    description: 'Locked out of your car? We open all vehicle types without damage. Key cutting and transponder programming.',
  },
  {
    icon: KeyRound,
    title: 'Lock-Outs & Entry',
    description: 'Fast, damage-free entry when you\'re locked out of your home, office, or vehicle. No damage guaranteed.',
  },
  {
    icon: ShieldCheck,
    title: 'Security Upgrades',
    description: 'British Standard lock fitting, anti-snap cylinders, and free home security assessments to keep you safe.',
  },
  {
    icon: Wrench,
    title: 'Lock Repairs & Fitting',
    description: 'Broken, stiff or faulty locks repaired or replaced quickly. Competitive rates with no hidden charges.',
  },
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">What We Offer</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Professional Locksmith Services</h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            From emergency lockouts to full security installations, we cover every lock and key need across Watford and surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-yellow-300 hover:shadow-xl hover:shadow-yellow-50 transition-all duration-300 cursor-default"
            >
              <div className="w-12 h-12 bg-yellow-50 group-hover:bg-yellow-500 rounded-xl flex items-center justify-center mb-5 transition-colors duration-300">
                <Icon className="w-6 h-6 text-yellow-500 group-hover:text-gray-950 transition-colors duration-300" />
              </div>
              <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
