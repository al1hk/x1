import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomCursor from './components/CustomCursor';
import MarqueeSection from './components/MarqueeSection';
import FeaturesSection from './components/FeaturesSection';
import FacilitiesSection from './components/FacilitiesSection';
import ServicesSection from './components/ServicesSection';
import TestimonialsSection from './components/TestimonialsSection';
import DynamicBackground from './components/DynamicBackground';
import ContactFooter from './components/ContactFooter';

const App: React.FC = () => {
  return (
    <div className="bg-brand-dark min-h-screen w-full relative selection:bg-brand-red selection:text-white cursor-none scroll-smooth">
      <CustomCursor />
      <DynamicBackground />
      <Navbar />
      <Hero />
      <MarqueeSection />
      <FeaturesSection />
      <FacilitiesSection />
      <ServicesSection />
      <TestimonialsSection />
      <ContactFooter />
    </div>
  );
};

export default App;