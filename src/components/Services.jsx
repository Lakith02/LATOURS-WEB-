import React from 'react';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Plane, MapPin, Users, Calendar } from 'lucide-react';

const services = [
  {
    icon: Plane,
    title: 'Flight Booking',
    description: 'Book flights to any destination with the best rates guaranteed.'
  },
  {
    icon: MapPin,
    title: 'Destination Guides',
    description: 'Expert local guides to show you the best hidden gems.'
  },
  {
    icon: Users,
    title: 'Group Tours',
    description: 'Join curated group tours with like-minded travelers.'
  },
  {
    icon: Calendar,
    title: 'Itinerary Planning',
    description: 'Custom itineraries tailored to your preferences.'
  }
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-900 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Everything you need for an unforgettable travel experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group p-8 rounded-2xl bg-slate-800/50 border border-slate-700 hover:border-cyan-500/50 transition-all hover:bg-slate-800"
              >
                <Icon className="w-12 h-12 text-cyan-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400">{service.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
