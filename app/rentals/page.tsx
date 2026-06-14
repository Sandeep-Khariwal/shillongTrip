import type { Metadata } from 'next';
import { Phone, MapPin, FileText, Bike, Users, ShieldCheck, ChevronDown, SlidersHorizontal, Map } from 'lucide-react';
import rentals from '../content/rental.json';

export const metadata: Metadata = {
  title: 'Scooter Rentals & Local Guides in Shillong | Premium Guide',
  description: 'Trusted scooter and bike rental providers in Shillong. Compare prices, required documents, and contact details. Also find vetted local travel guides.',
};

export default function RentalsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 selection:bg-emerald-500/30">
      
      {/* Editorial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Abstract Ambient Glows - Energetic travel tones */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-violet-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-emerald-400 rounded-full" />
              <p className="text-emerald-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Bike className="w-4 h-4" /> Getting Around
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Scooter <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500">
                Rentals
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
              A scooter is the absolute best way to explore Meghalaya's winding roads on your own schedule. These are the only rental shops we personally trust and recommend.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-serif font-bold text-slate-900">Verified Providers</h2>
            <span className="text-slate-500 font-medium bg-slate-200/50 px-3 py-1 rounded-full text-sm">
              {rentals.length} options
            </span>
          </div>
          
          {/* Mocked UI: Premium Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-all">
              Vehicle Type <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:border-emerald-400 hover:text-emerald-700 transition-all">
              <Map className="w-4 h-4" />
              Map View
            </button>
            <button className="flex items-center gap-2 bg-slate-900 px-5 py-2.5 rounded-full shadow-sm border border-slate-900 text-sm font-semibold text-white hover:bg-slate-800 transition-all">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Dynamic Grid - Premium Data Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          {rentals.map((r: any) => (
            <div key={r.id} className="bg-white rounded-[2rem] border border-slate-100 p-8 shadow-xl shadow-slate-200/20 hover:shadow-2xl hover:shadow-slate-200/40 transition-all duration-300 hover:-translate-y-1 flex flex-col">
              
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="font-bold text-slate-900 text-2xl mb-1">{r.name}</h2>
                  <p className="text-emerald-600 font-medium text-sm flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" /> {r.type}
                  </p>
                </div>
                <span className="bg-slate-900 text-white text-sm font-bold px-4 py-2 rounded-full shadow-md">
                  ★ {r.rating}
                </span>
              </div>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3 text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span className="text-sm leading-relaxed">{r.location}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 bg-slate-50 p-4 rounded-2xl border border-slate-100">
                  <Bike className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-sm font-medium">{r.priceRange}</span>
                </div>
              </div>
              
              <div className="mb-6">
                <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest">Fleet Includes</p>
                <div className="flex flex-wrap gap-2">
                  {r.vehicles.map((v: string) => (
                    <span key={v} className="bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-semibold px-4 py-1.5 rounded-full">
                      {v}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="mb-8 flex-grow">
                <p className="text-xs font-bold text-slate-400 mb-3 uppercase tracking-widest flex items-center gap-1">
                  <FileText className="w-3.5 h-3.5" /> Required Docs
                </p>
                <ul className="space-y-2">
                  {r.documents.map((d: string) => (
                    <li key={d} className="text-sm text-slate-600 flex items-center gap-3 font-medium">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full flex-shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
              
              {r.note && (
                <div className="mb-6 bg-amber-50/80 border border-amber-200/50 rounded-2xl p-4">
                  <p className="text-sm text-amber-800 leading-relaxed font-medium">
                    <span className="font-bold">Note:</span> {r.note}
                  </p>
                </div>
              )}
              
              <a href={`tel:${r.contact}`} className="group flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-emerald-600 transition-colors shadow-lg shadow-slate-900/10">
                <Phone className="w-5 h-5 group-hover:scale-110 transition-transform" /> 
                Call {r.name}
              </a>
            </div>
          ))}
        </div>

        {/* Local Guides Section - Premium Bento Box */}
        <div id="guides" className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Subtle background glow for Guides section */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/10 blur-[120px] pointer-events-none rounded-full" />

          <div className="relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
              <div className="max-w-2xl">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-teal-500/10 ring-1 ring-teal-500/20 mb-6 backdrop-blur-sm">
                  <Users className="w-8 h-8 text-teal-300" />
                </div>
                <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6">Expert Local Guides</h2>
                <p className="text-slate-300 text-lg leading-relaxed font-light">
                  A good Khasi guide changes the trip entirely. They know the unmarked trail to the quiet viewpoint, the family running the best local kitchen, and why that particular tree in the sacred grove is over 400 years old.
                </p>
              </div>
              <a href="/contact" className="hidden md:inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-teal-50 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-white/10 hover:-translate-y-1 whitespace-nowrap">
                Request a Guide
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { type: 'Day Trips', price: '₹1,200 – ₹2,000', desc: 'Guided day excursions to specific sites. Ideal for groups up to 8 people.' },
                { type: 'Multi-Day Tours', price: '₹2,500 – ₹4,500/day', desc: 'Comprehensive 3–7 day custom itineraries with accommodation coordination.' },
                { type: 'Tribal Experiences', price: '₹1,500 – ₹2,500', desc: 'Immersive village visits, sacred grove walks, and authentic local cooking sessions.' }
              ].map((item) => (
                <div key={item.type} className="bg-slate-900/50 backdrop-blur-md border border-slate-800 rounded-3xl p-8 hover:bg-slate-800/50 transition-colors">
                  <h3 className="font-serif font-bold text-2xl text-white mb-2">{item.type}</h3>
                  <p className="text-teal-400 font-semibold text-base mb-4 bg-teal-500/10 inline-block px-3 py-1 rounded-lg">{item.price}</p>
                  <p className="text-slate-400 text-base leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            {/* Mobile CTA */}
            <div className="mt-10 text-center md:hidden">
              <a href="/contact" className="inline-flex w-full items-center justify-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-full transition-colors">
                Request a Guide
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}