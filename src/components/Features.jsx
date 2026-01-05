import { ShieldCheck, Compass, Map } from 'lucide-react';

const Features = () => (
  <section className="py-24 bg-slate-950">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
      <div className="space-y-4 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors">
        <Compass className="text-cyan-500 w-12 h-12" />
        <h3 className="text-xl font-bold text-white">Expert Guides</h3>
        <p className="text-slate-400">Our local guides know the hidden gems that aren't on any map.</p>
      </div>
      <div className="space-y-4 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors">
        <ShieldCheck className="text-cyan-500 w-12 h-12" />
        <h3 className="text-xl font-bold text-white">Safety First</h3>
        <p className="text-slate-400">Premium insurance and 24/7 support for every journey you take.</p>
      </div>
      <div className="space-y-4 p-8 bg-slate-900/50 border border-slate-800 rounded-2xl hover:border-cyan-500/50 transition-colors">
        <Map className="text-cyan-500 w-12 h-12" />
        <h3 className="text-xl font-bold text-white">Custom Itinerary</h3>
        <p className="text-slate-400">Tailor-made trips that fit your pace, budget, and interests.</p>
      </div>
    </div>
  </section>
);

export default Features;