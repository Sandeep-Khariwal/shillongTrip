import type { Metadata } from 'next';
import { UtensilsCrossed, Map, SlidersHorizontal, ChevronDown } from 'lucide-react';
import RestaurantCard from '../components/RestaurantCard';
import restaurants from '../content/restaurants.json';

export const metadata: Metadata = {
  title: 'Best Restaurants & Cafés in Shillong | Premium Guide',
  description: 'Discover the best restaurants, cafés, and local eateries in Shillong — from authentic Khasi cuisine to Italian and pan-Asian. Honest recommendations only.',
};

export default function RestaurantsPage() {
  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 selection:bg-amber-500/30">
      
      {/* Editorial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Abstract Ambient Glows - Warm culinary tones */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-rose-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-amber-500 rounded-full" />
              <p className="text-amber-500 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <UtensilsCrossed className="w-4 h-4" /> Food & Culture
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              Restaurants & <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-orange-400 to-rose-500">
                Cafés
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
              Shillong punches above its weight for food. Jadoh, Dohkhlieh, pine-cone coffee, and surprisingly good Italian. Here's where to eat.
            </p>
          </div>
        </div>
      </div>

      {/* Grid Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls Toolbar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-10 gap-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-2xl font-serif font-bold text-slate-900">Local Eateries</h2>
            <span className="text-slate-500 font-medium bg-slate-200/50 px-3 py-1 rounded-full text-sm">
              {restaurants.length} places
            </span>
          </div>
          
          {/* Mocked UI: Premium Filter Buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:border-amber-400 hover:text-amber-700 transition-all">
              Cuisine <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            <button className="flex items-center gap-2 bg-white px-5 py-2.5 rounded-full shadow-sm border border-slate-200 text-sm font-semibold text-slate-700 hover:border-amber-400 hover:text-amber-700 transition-all">
              <Map className="w-4 h-4" />
              Map
            </button>
            <button className="flex items-center gap-2 bg-slate-900 px-5 py-2.5 rounded-full shadow-sm border border-slate-900 text-sm font-semibold text-white hover:bg-slate-800 transition-all">
              <SlidersHorizontal className="w-4 h-4" />
              Filters
            </button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {restaurants.map((r: any) => (
            <RestaurantCard key={r.id} restaurant={r} />
          ))}
        </div>

      </div>
    </div>
  );
}