import React from 'react';
import { Dumbbell, Users, Laptop, Trophy, ArrowUpRight } from 'lucide-react';
import Image from './Image';

const services = [
  {
    id: 1,
    title: "1-on-1 Training",
    description: "Personalized coaching to shatter your limits. We build the roadmap; you put in the work.",
    price: "From $80/session",
    icon: Dumbbell,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Group Warfare",
    description: "High-intensity group classes. Compete, sweat, and dominate together.",
    price: "From $150/month",
    icon: Users,
    image: "https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Online Coaching",
    description: "World-class programming delivered to your phone. Train anywhere, anytime.",
    price: "From $200/month",
    icon: Laptop,
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Competition Prep",
    description: "Elite physique sculpting for bodybuilders and athletes ready for the stage.",
    price: "Custom Plan",
    icon: Trophy,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1200&auto=format&fit=crop"
  }
];

const ServiceCard: React.FC<{ service: typeof services[0] }> = ({ service }) => {
  return (
    <div className="group relative h-[450px] rounded-xl overflow-hidden cursor-pointer bg-[#0a0a0a] border border-white/5 hover:border-brand-red/50 transition-colors duration-500">
        
        {/* --- IMAGE LAYER WITH RED GRADING --- */}
        <div className="absolute inset-0 overflow-hidden">
            <Image 
                src={service.image} 
                alt={service.title} 
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 filter grayscale brightness-75 contrast-125"
                loading="lazy"
                decoding="async"
                width="600"
                height="450"
            />
            <div className="absolute inset-0 bg-brand-red mix-blend-multiply opacity-0 group-hover:opacity-90 transition-opacity duration-500 ease-out" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-90" />
        </div>

        {/* Content */}
        <div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
            {/* Icon Box */}
            <div className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-none skew-x-[-10deg] bg-white/5 backdrop-blur-none border border-white/10 group-hover:bg-brand-red group-hover:border-brand-red group-hover:text-white transition-all duration-300">
                <service.icon className="w-5 h-5 text-gray-400 group-hover:text-white skew-x-[10deg] transition-colors" />
            </div>

            {/* Text Content */}
            <div className="transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-3xl font-display font-bold uppercase text-white tracking-wide">
                        {service.title}
                    </h3>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-75 leading-relaxed font-medium">
                    {service.description}
                </p>

                <div className="flex items-center justify-between border-t border-white/10 pt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                     <span className="text-brand-red font-bold uppercase tracking-wider text-xs">
                        {service.price}
                     </span>
                     <ArrowUpRight className="w-5 h-5 text-brand-red" />
                </div>
            </div>
        </div>
    </div>
  );
};

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="relative w-full py-24 bg-[#050505] overflow-hidden border-t border-white/5">
      
      {/* --- BACKGROUND EFFECTS START --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* 1. Consistent Red Tint Background */}
        <div className="absolute inset-0 bg-gradient-to-tr from-brand-tint via-[#050505] to-brand-tint opacity-100"></div>

        {/* 2. Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20"></div>

        {/* 3. Ambient Red Orbs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-brand-red/5 rounded-full blur-[120px]"></div>

        {/* 4. Marquee Background */}
        <div className="absolute top-0 right-0 w-full opacity-10 rotate-[5deg] scale-110 pointer-events-none">
             <div className="flex whitespace-nowrap animate-marquee-left will-change-transform">
                 <span className="text-[20vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                    TACTICAL • TRAINING • WARFARE • 
                 </span>
                 <span className="text-[20vw] font-display font-black italic text-transparent px-10" style={{ WebkitTextStroke: '2px rgba(255,255,255,0.8)' }}>
                    TACTICAL • TRAINING • WARFARE • 
                 </span>
             </div>
        </div>
      </div>
      {/* --- BACKGROUND EFFECTS END --- */}

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        <div className="mb-16 flex flex-col items-start gap-2">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm">Our Arsenal</span>
            <h2 className="text-5xl md:text-7xl font-display font-bold text-white uppercase">
              Choose Your <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Weapon</span>
            </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;