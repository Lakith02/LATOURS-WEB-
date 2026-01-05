import React from 'react';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    category: "Adventure",
    title: "The Silent Peaks: A Journey Through the Himalayas",
    excerpt: "Exploring the untouched trails where silence speaks louder than words. Discover the gear you need for high-altitude trekking.",
    author: "Alex Rivers",
    date: "Dec 24, 2025",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1000"
  },
  {
    id: 2,
    category: "Lifestyle",
    title: "Luxury Meets Nature: Top 10 Eco-Resorts",
    excerpt: "Sustainable travel doesn't mean sacrificing comfort. We review the best green retreats for 2026.",
    author: "Sarah Chen",
    date: "Dec 20, 2025",
    image: "https://images.unsplash.com/photo-1544161515-4ad6ce6e8318?q=80&w=1000"
  },
  {
    id: 3,
    category: "Tips",
    title: "Mastering Travel Photography with Your Phone",
    excerpt: "You don't need a DSLR to capture the world. Learn the lighting secrets used by the pros.",
    author: "Marcus Vane",
    date: "Dec 15, 2025",
    image: "https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=1000"
  }
];

const Blog = () => {
  return (
    <div className="bg-slate-950 min-h-screen text-white">
      <Navbar />

      {/* --- BLOG HERO --- */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-6"
          >
            TRAVEL <span className="text-cyan-500">INSIGHTS</span>
          </motion.h1>
          <p className="text-slate-400 text-xl max-w-2xl mx-auto">
            Stories, tips, and guides from our global community of explorers.
          </p>
        </div>
      </section>

      {/* --- FEATURED POST --- */}
      <section className="px-6 pb-20">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-7xl mx-auto relative group cursor-pointer overflow-hidden rounded-3xl border border-white/10"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200" 
            className="w-full h-[500px] object-cover group-hover:scale-105 transition-transform duration-700"
            alt="Featured"
          />
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-20 max-w-3xl">
            <span className="bg-cyan-500 text-slate-950 px-4 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">Featured Story</span>
            <h2 className="text-4xl md:text-5xl font-black mb-4">Finding Serenity in the Heart of the Amazon</h2>
            <p className="text-slate-300 text-lg mb-6">A deep dive into the lung of our planet, exploring biodiversity like never before.</p>
            <button className="flex items-center gap-2 text-cyan-400 font-bold hover:text-white transition-colors">
              Read Full Article <ArrowRight size={20} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* --- BLOG GRID --- */}
      <section className="py-20 px-6 bg-slate-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post, i) => (
              <motion.article 
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-900 rounded-3xl border border-white/5 overflow-hidden hover:border-cyan-500/50 transition-all flex flex-col"
              >
                <div className="h-56 overflow-hidden">
                  <img src={post.image} className="w-full h-full object-cover" alt={post.title} />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-4 text-xs text-slate-500 mb-4 font-bold uppercase tracking-widest">
                    <span className="text-cyan-500">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4 hover:text-cyan-400 transition-colors cursor-pointer leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-6 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center justify-between pt-6 border-t border-white/5">
                    <div className="flex items-center gap-2 text-xs text-slate-300">
                      <User size={14} className="text-cyan-500" /> {post.author}
                    </div>
                    <button className="text-cyan-500 hover:text-white transition-colors">
                      <ArrowRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;