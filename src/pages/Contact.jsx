import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const contactDetails = [
    { icon: <Phone />, title: "Call Us", detail: "+94 (081) 234-5678", sub: "Mon-Fri, 9am-6pm" },
    { icon: <Mail />, title: "Email Us", detail: "expeditions@latours.com", sub: "24/7 Support" },
    { icon: <MapPin />, title: "Visit Us", detail: "123 Travel St, Colombo 03", sub: "Sri Lanka" },
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6 tracking-tighter"
          >
            GET IN <span className="text-cyan-500">TOUCH</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto font-light">
            Ready to start your next adventure? Our travel architects are waiting to craft your perfect journey.
          </p>
        </div>
      </section>

      {/* --- MAIN CONTENT --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-12">
          
          {/* LEFT: Contact Info Cards */}
          <div className="space-y-6">
            {contactDetails.map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-3xl bg-slate-900/50 border border-white/5 hover:border-cyan-500/30 transition-colors group"
              >
                <div className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform">
                  {React.cloneElement(item.icon, { size: 28 })}
                </div>
                <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                <p className="text-white text-lg mb-1">{item.detail}</p>
                <p className="text-slate-500 text-sm">{item.sub}</p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT: The Contact Form */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2 bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 relative overflow-hidden"
          >
            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                className="h-full flex flex-col items-center justify-center text-center py-20"
              >
                <div className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(6,182,212,0.5)]">
                  <Send className="text-slate-950" size={32} />
                </div>
                <h2 className="text-3xl font-bold mb-2">Message Received!</h2>
                <p className="text-slate-400">Our team will reach out to you within 24 hours.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input type="text" required className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                    <input type="email" required className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 focus:border-cyan-500 focus:outline-none transition-colors" placeholder="john@example.com" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Preferred Destination</label>
                  <select className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 focus:border-cyan-500 focus:outline-none transition-colors appearance-none">
                    <option>Iceland Expeditions</option>
                    <option>Bali Retreats</option>
                    <option>Swiss Alps Trekking</option>
                    <option>Other / Custom</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Your Message</label>
                  <textarea rows="5" required className="w-full bg-slate-950 border border-white/10 rounded-2xl p-4 focus:border-cyan-500 focus:outline-none transition-colors resize-none" placeholder="Tell us about your dream trip..."></textarea>
                </div>

                <button type="submit" className="w-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-black py-5 rounded-2xl transition-all flex items-center justify-center gap-3 uppercase tracking-widest">
                  Send Inquiry <Send size={20} />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;