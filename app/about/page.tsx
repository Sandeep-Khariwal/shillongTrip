import type { Metadata } from 'next';
import Link from 'next/link';
import { Mountain, ShieldCheck, HeartHandshake, Map, ArrowRight, Compass } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us — ShillongWander',
  description: 'Learn about our mission to provide honest, independent, and comprehensive travel guides for Shillong and Meghalaya.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 selection:bg-teal-500/30">
      
      {/* Editorial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Abstract Ambient Glows - Earthy, trustworthy tones */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-amber-500 rounded-full" />
              <p className="text-amber-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Mountain className="w-4 h-4" /> About ShillongWander
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Read <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-amber-500">
                Our Story
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
              We started with a simple belief: the best way to experience the Abode of Clouds is through honest, unfiltered local knowledge. No tourist traps, no sponsored filler.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content & Values Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Narrative Column */}
          <div className="lg:col-span-5 prose prose-slate prose-lg">
            <h2 className="font-serif text-3xl font-bold text-slate-900 mb-6 tracking-tight">
              Beyond the Guidebooks
            </h2>
            <p className="text-slate-600 leading-relaxed mb-6">
              Meghalaya is a place of deep magic—from the living root bridges engineered over centuries by the Khasi people, to the crystal-clear waters of Dawki. But too often, visitors are funneled into crowded, commercialized spots while missing the true heart of the state.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              ShillongWander was built to change that. We spend our weekends riding scooters up winding misty roads, eating at roadside dhabas, and talking to local homestay owners to curate a guide that you can actually trust.
            </p>
            <div className="flex items-center gap-4 mt-8 pt-8 border-t border-slate-200">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center">
                <Compass className="w-6 h-6 text-teal-700" />
              </div>
              <div>
                <p className="font-bold text-slate-900">Est. 2024</p>
                <p className="text-sm text-slate-500 font-medium">Proudly based in Shillong</p>
              </div>
            </div>
          </div>

          {/* Core Values Bento Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: ShieldCheck,
                title: "100% Independent",
                desc: "We don't accept payment for listings. If a hotel or restaurant is on this site, it's because we genuinely love it.",
                color: "text-teal-600",
                bg: "bg-teal-50"
              },
              {
                icon: HeartHandshake,
                title: "Local First",
                desc: "We prioritize Khasi-owned businesses, local guides, and sustainable tourism practices that respect the land.",
                color: "text-amber-600",
                bg: "bg-amber-50"
              },
              {
                icon: Map,
                title: "Personally Vetted",
                desc: "Every trail, scooter rental, and cafe has been personally tested by our team to ensure your safety and enjoyment.",
                color: "text-indigo-600",
                bg: "bg-indigo-50"
              }
            ].map((value, idx) => (
              <div key={idx} className={`bg-white rounded-[2rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                <div className={`${value.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6`}>
                  <value.icon className={`w-7 h-7 ${value.color}`} />
                </div>
                <h3 className="font-serif font-bold text-slate-900 text-2xl mb-3">{value.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Area */}
        <div className="relative bg-teal-900 rounded-[2.5rem] p-8 sm:p-12 overflow-hidden shadow-2xl">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8 text-center md:text-left">
            <div className="max-w-2xl">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white mb-4">Ready to start exploring?</h2>
              <p className="text-teal-100 text-lg">Dive into our curated destination guide and start planning your perfect Meghalaya itinerary.</p>
            </div>
            <Link href="/places" className="group flex items-center gap-2 bg-white text-teal-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-50 transition-all duration-300 hover:shadow-lg hover:shadow-black/20 hover:-translate-y-1 whitespace-nowrap">
              Explore Destinations 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}