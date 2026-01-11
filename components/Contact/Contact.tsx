import React, { useState } from 'react';
import ContactFooter from '../ContactFooter';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Membership Inquiry',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate network delay
    setTimeout(() => {
        const mailSubject = `Inquiry: ${formData.subject} from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\nInterest: ${formData.subject}\n\nMessage:\n${formData.message}`;
        
        window.location.href = `mailto:x1fitness@gmail.com?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
        
        setStatus('success');
        
        setTimeout(() => {
            setStatus('idle');
            setFormData({ name: '', email: '', subject: 'Membership Inquiry', message: '' });
        }, 3000);
    }, 1500);
  };

  return (
     <div className="pt-20 min-h-screen bg-brand-dark overflow-hidden relative">
        {/* Ambient Background - Enhanced Red Shading */}
        <div className="fixed inset-0 pointer-events-none z-0">
             {/* Deep Red Gradient Overlay */}
             <div className="absolute inset-0 bg-gradient-to-br from-[#1a0505] via-[#050505] to-[#1a0505] opacity-60"></div>
             
             {/* Top Right Intense Glow */}
             <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(220,0,0,0.15)_0%,transparent_70%)] blur-[100px]"></div>
             
             {/* Bottom Left Intense Glow */}
             <div className="absolute bottom-0 left-0 w-[60vw] h-[60vw] bg-[radial-gradient(circle,rgba(220,0,0,0.12)_0%,transparent_70%)] blur-[100px]"></div>
             
             {/* Center Warmth */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] bg-[radial-gradient(circle,rgba(230,0,0,0.05)_0%,transparent_60%)]"></div>
        </div>

        {/* Header */}
        <div className="relative py-20 px-6 text-center z-10 border-b border-white/5">
            <span className="text-brand-red font-bold tracking-[0.2em] uppercase text-sm animate-fade-in">Contact Us</span>
            <h1 className="text-5xl md:text-7xl font-display font-bold uppercase text-white mb-6 mt-2 animate-fade-in-up">
                Start Your <span className="text-transparent stroke-white" style={{ WebkitTextStroke: '1px white' }}>Journey</span>
            </h1>
            <p className="text-gray-400 max-w-xl mx-auto text-lg font-medium leading-relaxed animate-fade-in-up delay-100">
                Have questions about memberships, training, or our facility? Reach out to us directly.
            </p>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                
                {/* Left: Info & Visual */}
                <div className="space-y-12">
                    {/* Facility Visual (Replaced Map) */}
                    <div className="w-full h-80 bg-[#0a0a0a] border border-white/10 relative overflow-hidden group">
                        <img 
                            src="https://images.unsplash.com/photo-1540497077202-7c8a33801524?q=80&w=2070&auto=format&fit=crop" 
                            alt="Gym Interior" 
                            className="w-full h-full object-cover opacity-60 transition-all duration-700 grayscale group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>
                        
                        <div className="absolute bottom-8 left-8 z-10">
                            <h3 className="text-3xl font-display font-bold text-white uppercase mb-2">
                                The <span className="text-brand-red">Sanctuary</span>
                            </h3>
                            <p className="text-gray-400 text-sm font-medium max-w-xs leading-relaxed">
                                Come see where the work gets done. Tour our flagship facility today.
                            </p>
                        </div>
                        
                        {/* Decorative Corner */}
                        <div className="absolute top-6 right-6 w-16 h-16 border-t border-r border-brand-red/30 group-hover:border-brand-red transition-colors duration-500"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-10">
                        {[
                            { icon: MapPin, label: "Location", val: "8008 Wilshire Blvd\nLos Angeles, CA 90210" },
                            { icon: Phone, label: "Phone", val: "+1 (555) 012-3456" },
                            { icon: Mail, label: "Email", val: "x1fitness@gmail.com" },
                            { icon: Clock, label: "Hours", val: "Mon-Sun: 5am - 11pm" },
                        ].map((item, i) => (
                            <div key={i} className="group">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-brand-red transition-colors">
                                        <item.icon className="w-4 h-4 text-white group-hover:text-brand-red transition-colors" />
                                    </div>
                                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">{item.label}</span>
                                </div>
                                <p className="text-white font-display text-xl tracking-wide whitespace-pre-line pl-11">{item.val}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right: Modern Form */}
                <div className="bg-[#0a0a0a] border border-white/5 p-8 md:p-12 relative">
                    <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-brand-red to-transparent opacity-50"></div>
                    
                    <h3 className="text-3xl font-display font-bold text-white uppercase mb-8">
                        Send a Message
                    </h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Full Name</label>
                                <input 
                                    id="name"
                                    type="text" 
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#111] border border-white/10 px-4 py-4 text-white focus:border-brand-red focus:outline-none focus:bg-[#151515] transition-all placeholder:text-gray-700 font-medium" 
                                    placeholder="Enter your name" 
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                                <input 
                                    id="email"
                                    type="email" 
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    className="w-full bg-[#111] border border-white/10 px-4 py-4 text-white focus:border-brand-red focus:outline-none focus:bg-[#151515] transition-all placeholder:text-gray-700 font-medium" 
                                    placeholder="Enter your email" 
                                />
                            </div>
                        </div>
                        
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Subject</label>
                            <div className="relative">
                                <select 
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full bg-[#111] border border-white/10 px-4 py-4 text-white focus:border-brand-red focus:outline-none focus:bg-[#151515] transition-all appearance-none font-medium cursor-pointer"
                                >
                                    <option>Membership Inquiry</option>
                                    <option>Personal Training</option>
                                    <option>Day Pass</option>
                                    <option>Other</option>
                                </select>
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                    <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-white/30"></div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-xs font-bold text-gray-400 uppercase tracking-wider">Message</label>
                            <textarea 
                                id="message"
                                rows={4} 
                                value={formData.message}
                                onChange={handleChange}
                                required
                                className="w-full bg-[#111] border border-white/10 px-4 py-4 text-white focus:border-brand-red focus:outline-none focus:bg-[#151515] transition-all placeholder:text-gray-700 resize-none font-medium" 
                                placeholder="How can we help you?"
                            ></textarea>
                        </div>

                        <button 
                            type="submit"
                            disabled={status !== 'idle'}
                            className={`
                                w-full bg-brand-red text-white font-bold uppercase py-4 tracking-widest text-sm hover:bg-red-600 transition-all duration-300
                                ${status === 'success' ? 'bg-green-600 hover:bg-green-600' : ''}
                            `}
                        >
                            <span className="flex items-center justify-center gap-2">
                                {status === 'idle' && <>Send Message <ArrowRight className="w-4 h-4" /></>}
                                {status === 'sending' && <>Sending...</>}
                                {status === 'success' && <>Message Sent <CheckCircle className="w-4 h-4" /></>}
                            </span>
                        </button>
                    </form>
                </div>
            </div>
        </div>

        <ContactFooter />
        
        <style>{`
            .animate-fade-in { animation: fadeIn 0.8s ease-out forwards; }
            .animate-fade-in-up { animation: fadeInUp 0.8s ease-out forwards; }
            @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
            @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>
     </div>
  );
};

export default Contact;