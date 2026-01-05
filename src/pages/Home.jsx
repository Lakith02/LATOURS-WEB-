import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Destinations from '../components/Destinations';
import BlogPreview from '../components/BlogPreview';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Services />
      <Destinations />
      <BlogPreview />
      <Footer />
    </div>
  );
};

export default Home;