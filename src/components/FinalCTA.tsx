import { Phone, MessageSquare } from 'lucide-react';

export function FinalCTA() {
  return (
    <section className="py-20 bg-yellow-500">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-950 mb-4">
          Locked Out? Need a Locksmith Now?
        </h2>
        <p className="text-gray-800 text-lg sm:text-xl mb-10 max-w-2xl mx-auto">
          Don't wait in the cold. Call us now for a fast, friendly, no-fuss locksmith response across Watford and Hertfordshire.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:07700000000"
            className="flex items-center justify-center gap-2.5 bg-gray-950 hover:bg-gray-800 text-white font-bold px-8 py-4 rounded-xl text-lg transition-all hover:shadow-2xl hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5" />
            Call 0770 000 0000
          </a>
          <a
            href="#contact"
            className="flex items-center justify-center gap-2.5 bg-white/30 hover:bg-white/50 text-gray-950 font-bold px-8 py-4 rounded-xl text-lg transition-all border border-gray-950/20"
          >
            <MessageSquare className="w-5 h-5" />
            Request a Quote
          </a>
        </div>
        <p className="text-gray-700 text-sm mt-8">Available 6AM – 10PM, 7 days a week · No call-out fee · 30-minute response</p>
      </div>
    </section>
  );
}
