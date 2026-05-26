import { Lock, Phone, Mail, MapPin, Facebook, Instagram } from 'lucide-react';

const services = [
  'Emergency Lock-Out',
  'Residential Locksmith',
  'Commercial Locksmith',
  'Auto Locksmith',
  'Lock Fitting & Replacement',
  'Security Upgrades',
];

const areas = [
  'Watford', 'Bushey', 'Rickmansworth', 'Northwood',
  'Chorleywood', 'Oxhey', 'Croxley Green', 'Garston',
];

export function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-5">
              <div className="w-9 h-9 bg-yellow-500 rounded-lg flex items-center justify-center">
                <Lock className="w-5 h-5 text-gray-950" />
              </div>
              <div>
                <span className="block text-white font-bold text-lg leading-tight">Elite AK</span>
                <span className="block text-yellow-500 text-xs font-semibold tracking-widest uppercase">Locksmith</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-5">
              Professional locksmith services across Watford and Hertfordshire. Licensed, insured, and trusted since 2010.
            </p>
            <div className="flex gap-3">
              <SocialLink icon={Facebook} href="#" label="Facebook" />
              <SocialLink icon={Instagram} href="#" label="Instagram" />
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Our Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm hover:text-yellow-400 transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Coverage */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Areas Covered</h4>
            <ul className="space-y-2.5">
              {areas.map((area) => (
                <li key={area} className="text-sm">{area}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:07700000000" className="flex items-start gap-3 hover:text-yellow-400 transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm">0770 000 0000</span>
                </a>
              </li>
              <li>
                <a href="mailto:info@eliteaklocksmith.co.uk" className="flex items-start gap-3 hover:text-yellow-400 transition-colors">
                  <Mail className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                  <span className="text-sm">info@eliteaklocksmith.co.uk</span>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-yellow-500 flex-shrink-0" />
                <span className="text-sm">Watford, Hertfordshire, UK</span>
              </li>
            </ul>
            <div className="mt-5 p-4 bg-gray-900 rounded-xl border border-gray-800">
              <p className="text-white text-sm font-semibold mb-0.5">Operating Hours</p>
              <p className="text-xs">Mon–Sun: 6:00 AM – 10:00 PM</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <p>&copy; {new Date().getFullYear()} Elite AK Locksmith. All rights reserved.</p>
            <div className="flex gap-5">
              <a href="#" className="hover:text-yellow-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-yellow-400 transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ icon: Icon, href, label }: { icon: React.ElementType; href: string; label: string }) {
  return (
    <a
      href={href}
      aria-label={label}
      className="w-9 h-9 bg-gray-900 hover:bg-yellow-500 rounded-lg flex items-center justify-center transition-colors group"
    >
      <Icon className="w-4 h-4 text-gray-400 group-hover:text-gray-950 transition-colors" />
    </a>
  );
}
