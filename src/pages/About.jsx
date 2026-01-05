import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />
      
      {/* Header Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-cyan-500 font-bold tracking-[0.3em] uppercase text-sm"
          >
            Our Story
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mt-4 mb-8"
          >
            WE ARE <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">LATOURS</span>
          </motion.div>
        </div>
      </section>

      {/* Content Section: Image + Text */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden border border-white/10">
              <img 
                src="https://images.unsplash.com/photo-1539635278303-d4002c07eae3?q=80&w=1000" 
                alt="Our Team" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-cyan-500 p-8 rounded-2xl hidden md:block">
              <p className="text-slate-950 font-black text-4xl">12+</p>
              <p className="text-slate-900 font-bold text-sm uppercase">Years of Excellence</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6 italic text-cyan-400">Redefining Modern Exploration</h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-6">
              Founded in Colombo, LATOURS started with a simple mission: to make luxury travel accessible to the curious soul. We don't just book tickets; we craft experiences that stay with you forever.
            </p>
            <p className="text-slate-400 text-lg leading-relaxed">
              From the misty peaks of the Himalayas to the hidden blue lagoons of the Pacific, our team of experts works tirelessly to ensure every journey is safe, unique, and breathtaking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-20 bg-slate-900/50 border-y border-white/5 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: <Target />, title: "Our Mission", desc: "To provide sustainable and immersive travel experiences." },
            { icon: <Eye />, title: "Our Vision", desc: "To become the world's most trusted companion for luxury explorers." },
            { icon: <Heart />, title: "Our Values", desc: "Authenticity, safety, and deep respect for local cultures." }
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-10 rounded-3xl bg-slate-950 border border-white/5 hover:border-cyan-500/50 transition-all"
            >
              <div className="text-cyan-500 mb-6">{React.cloneElement(item.icon, { size: 40 })}</div>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;