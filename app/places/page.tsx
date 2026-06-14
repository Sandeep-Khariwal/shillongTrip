import type { Metadata } from 'next';
import { Compass, Map, SlidersHorizontal } from 'lucide-react';
import PlaceCard from '../components/PlaceCard';
import places from '../content/places.json';

export const metadata: Metadata = {
  title: 'Places to Visit in Shillong & Meghalaya | Premium Guide',
  description: 'Explore the top tourist destinations in Shillong and Meghalaya — from Umiam Lake to the Double Decker Living Root Bridge, with insider tips for every place.',
};

export default function PlacesPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 selection:bg-teal-500/30">
      
      {/* Editorial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Abstract Ambient Glows */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-amber-500 rounded-full" />
              <p className="text-amber-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-4 h-4" /> Destination Guide
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Places to <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-teal-400 to-teal-500">
                Explore
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
              From crystalline rivers to ancient living bridges, sacred forests to canyon viewpoints — Meghalaya rewards explorers. Here is every place worth your time.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-serif font-bold text-slate-900">All Destinations</h2>
            <span className="text-slate-500 font-medium bg-slate-200/50 px-3 py-1 rounded-full text-sm">
              {places.length} places
            </span>
          </div>
          
          {/* Mocked UI: Premium Filter Buttons */}
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-all">
              <Map className="w-4 h-4" />
              Map View
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:border-teal-300 hover:text-teal-700 transition-all">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {places.map((place: any) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>

      </div>
    </div>
  );
}