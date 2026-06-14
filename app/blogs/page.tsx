import type { Metadata } from 'next';
import { BookOpen, Search, SlidersHorizontal } from 'lucide-react';
import BlogCard from '../components/BlogCard';
import { getAllBlogs } from '../lib/blog';

export const metadata: Metadata = {
  title: 'Travel Blog — Shillong & Meghalaya | Premium Guide',
  description: 'In-depth travel guides, itineraries, and local knowledge about Shillong and Meghalaya. Written by people who live here.',
};

export default function BlogsPage() {
  const blogs = getAllBlogs();
  const categories = ['All', ...Array.from(new Set(blogs.map(b => b.category)))];

  return (
    <div className="min-h-screen bg-slate-50 pt-28 pb-24 selection:bg-indigo-500/30">
      
      {/* Editorial Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="relative bg-slate-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-16 overflow-hidden shadow-2xl shadow-slate-900/20 border border-slate-800">
          
          {/* Abstract Ambient Glows - Deep storytelling tones */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -translate-y-1/3 translate-x-1/4 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

          <div className="relative z-10 max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-[2px] w-8 bg-indigo-400 rounded-full" />
              <p className="text-indigo-400 font-bold text-sm uppercase tracking-widest flex items-center gap-2">
                <BookOpen className="w-4 h-4" /> Travel Stories
              </p>
            </div>

            <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight leading-tight">
              The Travel <br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-purple-400 to-fuchsia-500">
                Journal
              </span>
            </h1>

            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl font-light">
              Detailed guides, honest itineraries, and local knowledge. Everything you need to plan a trip to Meghalaya that goes beyond the usual tourist checklist.
            </p>
          </div>
        </div>
      </div>

      {/* Directory Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Controls & Categories */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6">
          
          {/* Refined Category Pills */}
          <div className="flex flex-wrap items-center gap-3">
            {categories.map((c: any) => (
              <button 
                key={c} 
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 shadow-sm border ${
                  c === 'All' 
                    ? 'bg-slate-900 text-white border-slate-900 shadow-slate-900/10' 
                    : 'bg-white text-slate-600 border-slate-200 hover:border-indigo-300 hover:text-indigo-700'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          
          {/* Mocked UI: Premium Search/Filter */}
          <div className="flex items-center gap-3">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-hover:text-indigo-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Search articles..." 
                className="pl-10 pr-4 py-2.5 bg-white border border-slate-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all shadow-sm w-full sm:w-64"
              />
            </div>
            <button className="flex items-center justify-center p-2.5 bg-white rounded-full shadow-sm border border-slate-200 text-slate-600 hover:border-indigo-300 hover:text-indigo-700 transition-all">
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogs.map((blog: any) => (
            <BlogCard key={blog.slug} blog={blog} />
          ))}
        </div>

      </div>
    </div>
  );
}