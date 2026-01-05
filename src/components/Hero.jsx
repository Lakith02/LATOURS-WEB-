import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  // Animation variants for cleaner code
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-slate-950">
      
      {/* 1. BACKGROUND LAYER: Cinematic Zoom Effect */}
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 20, ease: "linear" }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/HGATaVJubj6casdeu/videoblocks-world-tourism-animation-with-airplane-flying-in-monuments-and-earth-planet-4k-video-animated_rbgvvdyasv_thumbnail-1080_09.png" 
          alt="Travel Adventure" 
          className="w-full h-full object-cover opacity-80"
        />
      </motion.div>

      {/* 2. OVERLAY LAYER: Gradient for Readability */}
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-slate-950/20 via-slate-950/50 to-slate-950"></div>

      {/* 3. CONTENT LAYER */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 text-center px-4 max-w-5xl"
      >
        {/* Floating Tag */}
        <motion.span 
          variants={itemVariants}
          className="inline-block px-4 py-1 mb-6 border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-bold tracking-[0.3em] uppercase rounded-full"
        >
          Discover the World 2026
        </motion.span>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-6xl md:text-8xl lg:text-9xl font-black text-white leading-[0.9] tracking-tighter mb-8"
        >
          BEYOND <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600">
            HORIZONS
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p 
          variants={itemVariants}
          className="text-slate-300 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-light"
        >
          Experience curated journeys to the world's most breathtaking landscapes. 
          Luxury meets adventure in every mile we travel together.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <button className="group relative flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 px-8 py-4 rounded-full font-bold transition-all overflow-hidden">
            <span className="relative z-10">Start Your Journey</span>
            <ArrowRight size={18} className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </button>

          <button className="flex items-center gap-3 text-white hover:text-cyan-400 transition-colors font-medium">
            <span className="p-3 border border-white/20 rounded-full bg-white/5 hover:bg-white/10 transition-all">
              <Play size={16} fill="currentColor" />
            </span>
            Watch Expedition
          </button>
        </motion.div>
      </motion.div>

      {/* 4. SCROLL INDICATOR */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-[1px] h-16 bg-gradient-to-b from-cyan-500 to-transparent"></div>
      </motion.div>

    </section>
  );
};

export default Hero;