import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Star, Coffee, Camera } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ServicesPage = () => {
  const deepServices = [
    {
      title: "Luxury Accommodation",
      desc: "We partner with the world's most exclusive eco-resorts and 5-star boutiques to ensure your rest is as breathtaking as your adventure.",
      img: "https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=1000",
      features: ["Private Villa Access", "24/7 Concierge", "Organic Dining"]
    },
    {
      title: "Private Expedition Guides",
      desc: "Our guides are certified experts in local history, photography, and survival, providing a safe yet thrilling immersion.",
      img: "https://images.unsplash.com/photo-1551632811-561732d1e306?q=80&w=1000",
      features: ["Multilingual Support", "Hidden Path Access", "Safety Certified"]
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      {/* --- HERO HEADER --- */}
      <section className="pt-32 pb-16 px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tighter">
            PREMIUM <span className="text-cyan-500">SERVICES</span>
          </h1>
          <p className="text-slate-400 text-xl font-light">
            Crafting the impossible. From private jets to mountain-top dinners.
          </p>
        </motion.div>
      </section>

      {/* --- DETAILED SERVICE LAYOUT --- */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto space-y-32">
          {deepServices.map((service, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-12 items-center`}
            >
              <div className="flex-1">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                  <img src={service.img} alt={service.title} className="relative rounded-3xl w-full h-[400px] object-cover" />
                </div>
              </div>
              <div className="flex-1 space-y-6">
                <h2 className="text-4xl font-bold">{service.title}</h2>
                <p className="text-slate-400 text-lg leading-relaxed">{service.desc}</p>
                <ul className="space-y-3">
                  {service.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-cyan-400 font-medium">
                      <CheckCircle2 size={20} /> {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- PACKAGE CARDS --- */}
      <section className="py-24 bg-slate-900/30 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 italic">Curated Packages</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {['Standard', 'Premium Explorer', 'Elite VIP'].map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ scale: 1.05 }}
                className={`p-10 rounded-3xl border ${i === 1 ? 'border-cyan-500 bg-slate-900' : 'border-white/5 bg-slate-950'} flex flex-col`}
              >
                <h3 className="text-2xl font-bold mb-2">{plan}</h3>
                <div className="text-4xl font-black mb-6 text-cyan-500">${(i + 1) * 999}<span className="text-sm text-slate-500 font-normal">/person</span></div>
                <ul className="text-slate-400 space-y-4 mb-10 flex-grow">
                  <li>Full Transport Coverage</li>
                  <li>Luxury Hotel Stays</li>
                  <li>Personal Photography</li>
                  {i > 0 && <li>Private Tour Guide</li>}
                  {i > 1 && <li>Helicopter Transfers</li>}
                </ul>
                <button className={`w-full py-4 rounded-full font-bold transition-all ${i === 1 ? 'bg-cyan-500 text-slate-950' : 'border border-white/20 hover:bg-white/5'}`}>
                  Book This Plan
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;