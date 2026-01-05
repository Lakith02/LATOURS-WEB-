import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'Top 5 Hidden Gems in Europe',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1000',
    excerpt: 'Discover the most beautiful and lesser-known destinations across Europe.',
    date: 'Dec 20, 2024'
  },
  {
    id: 2,
    title: 'Adventure Sports Around the World',
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1000',
    excerpt: 'Get your adrenaline pumping with these thrilling adventure activities.',
    date: 'Dec 18, 2024'
  },
  {
    id: 3,
    title: 'Cultural Immersion Travel Guide',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1000',
    excerpt: 'How to truly experience local cultures while traveling.',
    date: 'Dec 15, 2024'
  }
];

const BlogPreview = () => {
  return (
    <section className="py-24 bg-slate-950 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-2">Travel Stories</h2>
          <p className="text-slate-400 text-lg">Latest insights and experiences from our community</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogs.map((blog, i) => (
            <motion.article
              key={blog.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-slate-900 border border-slate-800 hover:border-cyan-500/50 transition-all cursor-pointer"
            >
              <div className="overflow-hidden h-48">
                <img 
                  src={blog.image} 
                  alt={blog.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <p className="text-cyan-400 text-sm font-bold mb-2">{blog.date}</p>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {blog.title}
                </h3>
                <p className="text-slate-400 text-sm">{blog.excerpt}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
