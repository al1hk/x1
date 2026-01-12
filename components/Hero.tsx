import React, { useRef } from 'react';
import { Clock, Flame, Activity, Dumbbell } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import FloatingCard from './FloatingCard';
import heroImage from "../assets/heroimage.png";

// Using the hosted image URL since local assets are not available
// const heroImage = "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop";

const Hero: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="relative w-full h-screen overflow-hidden flex flex-col items-center justify-end md:justify-center bg-brand-dark contain-paint">
      
      {/* 1. Background Marquee - Optimized & More Visible */}
      <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none opacity-30 select-none overflow-hidden">
        <div className="absolute w-full rotate-[-5deg] scale-125 transform-gpu">
             {/* CSS-based marquee for better performance */}
            <div className="flex whitespace-nowrap animate-marquee-slow will-change-transform">
                <span className="text-[15vw] md:text-[12vw] font-display font-bold uppercase italic text-outline-red px-4">
                    Obsession • Focus • Grit •
                </span>
                <span className="text-[15vw] md:text-[12vw] font-display font-bold uppercase italic text-outline-red px-4">
                    Obsession • Focus • Grit •
                </span>
            </div>
            <div className="flex whitespace-nowrap animate-marquee-reverse-slow mt-[-4vw] will-change-transform">
                <span className="text-[15vw] md:text-[12vw] font-display font-bold uppercase italic text-transparent stroke-white px-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                    Unstoppable • Relentless • Iron •
                </span>
                <span className="text-[15vw] md:text-[12vw] font-display font-bold uppercase italic text-transparent stroke-white px-4" style={{ WebkitTextStroke: '1px rgba(255,255,255,0.4)' }}>
                    Unstoppable • Relentless • Iron •
                </span>
            </div>
        </div>
      </div>

      {/* 2. Central Red Glow - PERFORMANCE FIX: Removed mix-blend-screen */}
      <motion.div 
        style={{ scale: useTransform(scrollYProgress, [0, 1], [1, 1.2]) }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] md:w-[60vw] md:h-[60vw] rounded-full pointer-events-none z-0 will-change-transform transform-gpu"
      >
        <div className="w-full h-full bg-[radial-gradient(circle,rgba(230,0,0,0.25)_0%,transparent_65%)]"></div>
      </motion.div>
      
      {/* 3. Main Headline - "Redefine" text is solid white */}
      <motion.div 
        style={{ y: textY, opacity }}
        className="absolute top-[12%] md:top-[18%] w-full flex flex-col items-center z-10 pointer-events-auto select-none px-4 will-change-transform transform-gpu"
      >
        <h1 className="font-display font-bold uppercase text-[18vw] md:text-[15vw] leading-[0.85] tracking-tighter text-center cursor-default w-full">
          <span className="block text-white drop-shadow-lg">
            Redefine
          </span>
          <span className="block text-brand-red" style={{ textShadow: '0 0 20px rgba(230,0,0,0.4)' }}>
            Your Limits
          </span>
        </h1>
      </motion.div>

      {/* 4. Main Character Image - PERFORMANCE FIX: Removed drop-shadow from filter */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute bottom-0 z-20 h-[70vh] md:h-[90vh] w-full max-w-6xl flex items-end justify-center pointer-events-none will-change-transform transform-gpu"
      >
        <img 
          src={heroImage}
          alt="Fitness trainer posing"
          loading="eager"
          decoding="async"
          className="h-full w-full object-contain object-bottom"
          style={{
            filter: 'grayscale(100%) contrast(1.1) brightness(0.8)',
            maskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to bottom, black 90%, transparent 100%)',
          }}
          onError={(e) => { e.currentTarget.style.display = 'none'; }}
        />
      </motion.div>

      {/* 5. Floating Info Cards - Adjusted Mobile Positioning for iPhones */}
      <motion.div 
        style={{ y: imageY }}
        className="absolute inset-0 z-30 w-full h-full max-w-7xl mx-auto pointer-events-none"
      >
        {/* Top Left - Moved to left-2 for max space on small screens */}
        <div className="absolute top-[28%] left-2 md:left-[10%] lg:left-[15%] animate-float-slow will-change-transform transform scale-[0.75] md:scale-100 origin-left">
            <FloatingCard 
                icon={<Clock className="w-5 h-5" />} 
                label="Status" 
                value="OPEN 24/7" 
            />
        </div>

        {/* Bottom Left */}
        <div className="absolute bottom-[22%] md:bottom-[15%] left-2 md:left-[15%] lg:left-[20%] animate-float-delayed will-change-transform transform scale-[0.75] md:scale-100 origin-left">
            <FloatingCard 
                icon={<Flame className="w-5 h-5" />} 
                label="Avg Burn" 
                value="800 KCAL" 
            />
        </div>

        {/* Top Right - Moved to right-2 for max space on small screens */}
        <div className="absolute top-[28%] right-2 md:right-[10%] lg:right-[15%] animate-float-reverse will-change-transform transform scale-[0.75] md:scale-100 origin-right">
            <FloatingCard 
                icon={<Activity className="w-5 h-5" />} 
                label="Zone" 
                value="HIIT" 
            />
        </div>

        {/* Bottom Right */}
        <div className="absolute bottom-[22%] md:bottom-[15%] right-2 md:right-[15%] lg:right-[20%] animate-float-slow will-change-transform transform scale-[0.75] md:scale-100 origin-right">
            <FloatingCard 
                icon={<Dumbbell className="w-5 h-5" />} 
                label="Equip" 
                value="ELITE" 
            />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;