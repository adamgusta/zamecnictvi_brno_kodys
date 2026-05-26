import Slider from 'react-slick';
import { Phone, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: 'https://images.pexels.com/photos/279810/pexels-photo-279810.jpeg?auto=compress&cs=tinysrgb&w=1600',
    headline: 'Locked Out? We\'re On Our Way.',
    subtext: 'Fast emergency locksmith response across Watford — available 6AM to 10PM, 7 days a week.',
    cta: 'Call Now',
    ctaHref: 'tel:07700000000',
  },
  {
    image: 'https://images.pexels.com/photos/4291574/pexels-photo-4291574.jpeg?auto=compress&cs=tinysrgb&w=1600',
    headline: 'Expert Lock Fitting & Upgrades',
    subtext: 'British Standard locks fitted to keep your home and business secure. Free security assessment included.',
    cta: 'Get a Quote',
    ctaHref: '#contact',
  },
  {
    image: 'https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=1600',
    headline: 'Trusted Watford Locksmiths Since 2010',
    subtext: 'Fully licensed, insured, and rated 5 stars by hundreds of satisfied customers across Hertfordshire.',
    cta: 'See Our Reviews',
    ctaHref: '#reviews',
  },
];

export function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
  };

  return (
    <section className="relative">
      <Slider {...settings}>
        {slides.map((slide, i) => (
          <div key={i} className="relative h-screen min-h-[600px] max-h-[820px]">
            {/* Background image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/60 to-gray-950/20" />

            {/* Content */}
            <div className="relative z-10 h-full flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 bg-yellow-500/20 border border-yellow-500/40 text-yellow-400 text-xs font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5">
                    <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                    Available Now
                  </div>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
                    {slide.headline}
                  </h1>
                  <p className="text-gray-300 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl">
                    {slide.subtext}
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={slide.ctaHref}
                      className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-400 text-gray-950 font-bold px-6 py-3.5 rounded-xl text-base transition-all hover:shadow-lg hover:shadow-yellow-500/30 hover:-translate-y-0.5"
                    >
                      <Phone className="w-4 h-4" />
                      {slide.cta}
                    </a>
                    <a
                      href="#services"
                      className="flex items-center gap-2 border border-white/40 hover:border-white text-white font-semibold px-6 py-3.5 rounded-xl text-base transition-all hover:bg-white/10"
                    >
                      Our Services
                      <ChevronRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
