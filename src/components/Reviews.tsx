import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: 'Sarah M.',
    location: 'Watford',
    rating: 5,
    text: 'Absolutely fantastic service. I was locked out at 7am and they arrived within 20 minutes. Professional, friendly, and no damage to my door. Highly recommended!',
    date: 'March 2025',
  },
  {
    name: 'James R.',
    location: 'Rickmansworth',
    rating: 5,
    text: 'Had all the locks in our office upgraded to anti-snap cylinders. Great price, tidy work, and the technician explained everything clearly. Will use again.',
    date: 'February 2025',
  },
  {
    name: 'Linda K.',
    location: 'Bushey',
    rating: 5,
    text: 'Used Elite AK after a break-in attempt. They came same day, assessed the damage, and fitted new British Standard locks. Felt so much safer afterwards.',
    date: 'January 2025',
  },
  {
    name: 'Tom H.',
    location: 'Northwood',
    rating: 5,
    text: 'Locked keys in the car. Called and they were there in under 30 minutes. Car opened without any marks or damage. Fair price too. Five stars without question.',
    date: 'April 2025',
  },
  {
    name: 'Priya S.',
    location: 'Oxhey',
    rating: 5,
    text: 'Moved into a new home and wanted all locks changed. They were efficient, professional and gave me a free security assessment on top of the job. Great local business.',
    date: 'March 2025',
  },
  {
    name: 'David L.',
    location: 'Chorleywood',
    rating: 5,
    text: 'My elderly mother was locked out. They prioritised her and had her back inside within the hour. So grateful for their quick, kind response. Genuine five stars.',
    date: 'May 2025',
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <p className="text-yellow-600 font-semibold text-sm uppercase tracking-widest mb-2">Customer Reviews</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <div className="flex items-center justify-center gap-1.5 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
            ))}
            <span className="text-gray-700 font-bold ml-2">5.0</span>
            <span className="text-gray-400 text-sm ml-1">— 200+ Google Reviews</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="w-7 h-7 text-yellow-300 mb-4" />
              <p className="text-gray-600 text-sm leading-relaxed mb-5">{review.text}</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-gray-900 text-sm">{review.name}</p>
                  <p className="text-gray-400 text-xs">{review.location} · {review.date}</p>
                </div>
                <div className="flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
