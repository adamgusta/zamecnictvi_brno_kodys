import { CircleCheck as CheckCircle2 } from 'lucide-react';

const points = [
  'Over 14 years serving Watford and Hertfordshire',
  'Fully licensed, DBS-checked locksmiths',
  'British Standard lock specialists',
  'No call-out fee — only pay for the work done',
  'Insurance-approved work and documentation',
  'Free security assessment with every visit',
];

export function AboutUs() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl">
              <img
                src="https://images.pexels.com/photos/8293651/pexels-photo-8293651.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Elite AK Locksmith technician at work"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-5 -right-5 bg-yellow-500 rounded-2xl px-6 py-4 shadow-xl hidden sm:block">
              <p className="text-gray-950 font-bold text-3xl leading-none">14+</p>
              <p className="text-gray-950 font-semibold text-sm">Years Experience</p>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">About Us</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-5">
              Watford's Most Trusted Local Locksmith
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              Elite AK Locksmith has been protecting homes and businesses across Watford since 2010. We're a family-run business built on honesty, craftsmanship, and fast, reliable service — with no hidden fees and no damage.
            </p>
            <p className="text-gray-500 leading-relaxed mb-8">
              Whether you're locked out at 6am or need a full security overhaul, our certified technicians arrive quickly, work cleanly, and leave your property more secure than we found it.
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 text-sm">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
