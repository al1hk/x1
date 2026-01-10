import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from './Image';

const testimonials = [
  {
    id: 1,
    name: "James T.",
    location: "LA, USA",
    quote: "I Love The Variety Of Workouts On Fit Fusion. Whether It's HIIT, Yoga, Or Strength Training, There's Always Something New To Try. The Progress Tracking Tools Keep Me Motivated!",
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2544&auto=format&fit=crop",
    role: "Member"
  },
  {
    id: 2,
    name: "Ryan Blaze",
    location: "NYC, USA",
    quote: "The intensity of the 1-on-1 coaching completely transformed my physique in 3 months. The community pushes you harder than you ever could alone.",
    image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop",
    role: "Pro Athlete"
  },
  {
    id: 3,
    name: "Ethan Maxx",
    location: "Miami, USA",
    quote: "Competition prep is brutal, but the nutrition guidance here is precise. I stepped on stage in the best shape of my life.",
    image: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    role: "Bodybuilder"
  },
  {
    id: 4,
    name: "Sarah K.",
    location: "London, UK",
    quote: "I never thought I could lift heavy until I joined. The trainers focus on form first, then power. Now I'm stronger than I've ever been.",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    role: "Crossfit Athlete"
  }
];

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  const getVisibleThumbnails = () => {
    const idx1 = (currentIndex + 1) % testimonials.length;
    const idx2 = (currentIndex + 2) % testimonials.length;
    return [testimonials[idx1], testimonials[idx2]];
  };

  return (
    <section className="relative w-full bg-black py-24 overflow-hidden">
      
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Deep Red Grading */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-[#1a0505] to-black opacity-90"></div>
        
        {/* 2. Spotlight Red Effect (Optimized Gradient) */}
        <div className="absolute top-0 left-1/2 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(230,0,0,0.1)_0%,transparent_70%)] -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* 3. Marquee Background */}
        <div className="absolute bottom-0 left-0 w-full opacity-10 select-none pointer-events-none">
             <div className="flex whitespace-nowrap animate-marquee-left will-change-transform">
                 <span className="text-[18vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px white' }}>
                    VICTORY • GLORY • LEGACY • 
                 </span>
                 <span className="text-[18vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px white' }}>
                    VICTORY • GLORY • LEGACY • 
                 </span>
             </div>
        </div>
      </div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter text-white leading-[1]">
            Your Success <br />
            Stories, <span className="text-brand-red">Our Inspiration</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-2xl mx-auto uppercase tracking-wider text-sm font-medium">
            See How Our Customers Have Achieved Their Goals And Let Their Journeys Inspire Yours!
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:h-[600px] items-center">
            
            {/* LEFT COLUMN: Main Active Testimonial */}
            <div className="lg:col-span-7 h-[500px] lg:h-full relative flex items-end">
                {/* Image Container */}
                <div className="absolute inset-0 z-0 overflow-hidden rounded-2xl lg:rounded-none lg:overflow-visible transition-opacity duration-500">
                    <Image 
                        key={current.id}
                        src={current.image}
                        alt={current.name}
                        className="w-full h-full object-cover object-top lg:object-contain lg:object-left-bottom animate-fade-in"
                        style={{ 
                            maskImage: 'linear-gradient(to bottom, black 50%, transparent 100%)',
                            WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' 
                        }}
                        loading="lazy"
                    />
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black lg:via-transparent lg:to-transparent opacity-80 lg:opacity-100" />
                     <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                </div>

                {/* Floating Card - Removed backdrop blur */}
                <div className="relative z-20 bg-[#111]/95 border border-white/10 p-8 rounded-2xl max-w-xl shadow-xl lg:ml-auto lg:mr-12 mb-8 lg:mb-20 group hover:border-brand-red/30 transition-colors duration-300 animate-slide-up">
                    <div className="absolute -top-6 -left-6 bg-brand-red p-3 rounded-xl shadow-lg rotate-3 group-hover:rotate-0 transition-transform duration-300">
                        <Quote className="w-6 h-6 text-white fill-white" />
                    </div>
                    <p className="text-xl md:text-2xl font-display font-medium leading-relaxed text-gray-200 italic mb-6">
                        "{current.quote}"
                    </p>
                    <div className="flex items-center justify-between border-t border-white/10 pt-6">
                        <div>
                            <h4 className="text-xl font-bold text-white uppercase tracking-wide">
                                – {current.name}
                            </h4>
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-widest">{current.location}</span>
                        </div>
                        <div className="flex gap-1 text-brand-red">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-current" />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="lg:col-span-5 flex flex-col justify-center h-full pl-0 lg:pl-12">
                
                {/* Navigation Buttons */}
                <div className="flex items-center gap-4 mb-10">
                    <button 
                        onClick={handlePrev}
                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group hover:scale-110 active:scale-95"
                    >
                        <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform duration-300" />
                    </button>
                    <button 
                        onClick={handleNext}
                        className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-brand-red hover:border-brand-red transition-all duration-300 group hover:scale-110 active:scale-95"
                    >
                        <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                    </button>
                </div>

                {/* Thumbnails */}
                <div className="flex gap-6 overflow-visible">
                    {getVisibleThumbnails().map((item) => (
                        <div 
                            key={item.id}
                            className="relative w-32 md:w-40 h-[300px] md:h-[400px] rounded-[2rem] overflow-hidden cursor-pointer group flex-shrink-0 animate-fade-in-right"
                            onClick={() => setCurrentIndex(testimonials.findIndex(t => t.id === item.id))}
                        >
                            <Image 
                                src={item.image} 
                                alt={item.name} 
                                className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500 scale-110 group-hover:scale-100"
                                loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500" />
                            <div className="absolute bottom-6 right-1/2 translate-x-1/2 w-full flex flex-col items-center gap-2">
                                <span 
                                    className="text-2xl font-display font-bold text-gray-400 group-hover:text-brand-red transition-colors duration-300 uppercase tracking-widest whitespace-nowrap origin-center rotate-[-90deg] translate-y-[-50px]"
                                >
                                    {item.name}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        @keyframes slideUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInRight {
            from { opacity: 0; transform: translateX(20px); }
            to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .animate-slide-up { animation: slideUp 0.5s ease-out forwards; }
        .animate-fade-in-right { animation: fadeInRight 0.5s ease-out forwards; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;