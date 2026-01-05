import React, { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const photos = [
  { id: 1, src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1000", title: "Yosemite Valley", size: "tall" },
  { id: 2, src: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?q=80&w=1000", title: "Alpine Lakes", size: "wide" },
  { id: 3, src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1000", title: "Norway Fjords", size: "small" },
  { id: 4, src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=1000", title: "Misty Forests", size: "tall" },
  { id: 5, src: "https://images.unsplash.com/photo-1433086566608-5732f1ea4c93?q=80&w=1000", title: "Hidden Waterfalls", size: "small" },
  { id: 6, src: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1000", title: "Icelandic Roads", size: "wide" },
];

const Gallery = () => {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      <section className="pt-32 pb-16 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-8xl font-black mb-4 tracking-tighter"
        >
          VISUAL <span className="text-cyan-500">JOURNEY</span>
        </motion.h1>
        <p className="text-slate-400 text-lg uppercase tracking-[0.3em]">Capturing moments across the globe</p>
      </section>

      {/* --- MASONRY GRID --- */}
      <section className="px-6 pb-24 max-w-7xl mx-auto">
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {photos.map((photo) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              onClick={() => setSelectedImg(photo.src)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl border border-white/5 shadow-2xl"
            >
              <img 
                src={photo.src} 
                alt={photo.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
              />
              <div className="absolute inset-0 bg-cyan-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center backdrop-blur-sm">
                <ZoomIn className="text-white mb-2" size={32} />
                <span className="font-bold tracking-widest uppercase text-xs">{photo.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* --- LIGHTBOX MODAL --- */}
      <AnimatePresence>
        {selectedImg && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-slate-950/95 flex items-center justify-center p-4 md:p-12"
            onClick={() => setSelectedImg(null)}
          >
            <button className="absolute top-10 right-10 text-white hover:text-cyan-500 transition-colors">
              <X size={40} />
            </button>
            <motion.img 
              initial={{ scale: 0.5, rotate: -5 }}
              animate={{ scale: 1, rotate: 0 }}
              exit={{ scale: 0.5, opacity: 0 }}
              src={selectedImg} 
              className="max-w-full max-h-full rounded-lg shadow-2xl border border-white/10"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default Gallery;