import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Compass, Shield, Zap, Globe } from 'lucide-react';

const services = [
  { icon: <Compass />, title: 'Expert Adventure', desc: 'Customized trails for the boldest explorers.' },
  { icon: <Shield />, title: 'Safe Traveling', desc: 'World-class insurance and certified local guides.' },
  { icon: <Zap />, title: 'Fast Booking', desc: 'Instant confirmation with 24/7 premium support.' },
  { icon: <Globe />, title: 'Worldwide reach', desc: 'Destinations across 50+ countries and 7 continents.' },
];

const Services = () => (
  <section className="py-24 bg-slate-950 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="grid md:grid-cols-4 gap-8">
        {services.map((item, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-slate-900/30 border border-white/5 rounded-3xl hover:bg-slate-900/60 transition-colors group"
          >
            <div className="text-cyan-500 mb-6 group-hover:scale-110 transition-transform duration-300">
              {React.cloneElement(item.icon, { size: 32 })}
            </div>
            <h3 className="text-white text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
const BlogPreview = () => (
  <section className="py-24 bg-slate-950 px-6 border-t border-white/5">
    <div className="max-w-7xl mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-white text-4xl font-bold italic">Latest Stories</h2>
          <p className="text-slate-500 mt-2 uppercase tracking-widest text-xs font-bold">Travel tips from experts</p>
        </div>
        <button className="text-cyan-500 font-bold border-b border-cyan-500 pb-1 hover:text-white hover:border-white transition-all">
          View All Posts
        </button>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div whileHover={{ scale: 1.02 }} className="group cursor-pointer">
          <div className="h-64 rounded-3xl overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" />
          </div>
          <span className="text-cyan-500 font-bold text-xs uppercase">March 15, 2025</span>
          <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">Finding Peace in the Heart of the Himalayas</h3>
        </motion.div>

        <motion.div whileHover={{ scale: 1.02 }} className="group cursor-pointer">
          <div className="h-64 rounded-3xl overflow-hidden mb-6">
            <img src="https://images.unsplash.com/photo-1493246507139-91e8bef99c02?q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Blog" />
          </div>
          <span className="text-cyan-500 font-bold text-xs uppercase">April 02, 2025</span>
          <h3 className="text-2xl font-bold text-white mt-2 group-hover:text-cyan-400 transition-colors">The Ultimate Guide to Photography in Iceland</h3>
        </motion.div>
      </div>
    </div>
  </section>
);
const Footer = () => (
  <footer className="bg-slate-950 border-t border-white/5 pt-20 pb-10 px-6">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 mb-16">
      <div className="col-span-2">
        <h2 className="text-2xl font-black text-white mb-6">VAYU<span className="text-cyan-500">TOURS</span></h2>
        <p className="text-slate-400 max-w-sm mb-8">Crafting unforgettable journeys for explorers who seek the extraordinary. Join us and discover the hidden wonders of the world.</p>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Quick Links</h4>
        <ul className="text-slate-400 space-y-4 text-sm">
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">About Us</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Our Services</li>
          <li className="hover:text-cyan-400 cursor-pointer transition-colors">Gallery</li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold mb-6">Contact</h4>
        <ul className="text-slate-400 space-y-4 text-sm">
          <li>info@vayutours.com</li>
          <li>+1 (234) 567-890</li>
          <li>Colombo, Sri Lanka</li>
        </ul>
      </div>
    </div>
    <div className="text-center border-t border-white/5 pt-10 text-slate-600 text-xs tracking-[0.3em] uppercase">
      © 2025 Vayu Tours. Built for the modern traveler.
    </div>
  </footer>
);


export default Services;