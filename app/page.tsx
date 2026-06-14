import Link from 'next/link';
import { Search, ArrowRight, MapPin, Star, ChevronRight, Bike, Users, Compass } from 'lucide-react';
import { getFeaturedBlogs } from './lib/blog';
import places from './content/places.json';
import PlaceCard from './components/PlaceCard';
import BlogCard from './components/BlogCard';

export default function HomePage() {
  const featuredPlaces = places.slice(0, 3);
  const featuredBlogs = getFeaturedBlogs().slice(0, 2);

  return (
    <div className="bg-slate-50 min-h-screen selection:bg-teal-500/30">
      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=2400&q=80"
            alt="Meghalaya landscape"
            className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          />
          {/* Refined gradient for better text legibility and mood */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-900/60 to-slate-950/90" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-amber-300 text-sm font-semibold px-5 py-2 rounded-full mb-8 shadow-xl">
            <Compass className="w-4 h-4" />
            Scotland of the East
          </span>
          
          <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-6 tracking-tight">
            Discover <br className="sm:hidden" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-500 drop-shadow-sm">
              Meghalaya
            </span>
          </h1>
          
          <p className="text-slate-300 text-lg sm:text-xl md:text-2xl leading-relaxed mb-12 max-w-2xl font-light">
            Living root bridges. Crystal rivers. Waterfalls beyond counting. Your complete, independent guide to the abode of clouds.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
            <Link href="/places" className="group inline-flex items-center justify-center gap-2 bg-teal-600 hover:bg-teal-500 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 shadow-lg shadow-teal-900/50 hover:shadow-teal-500/30 hover:-translate-y-1">
              Explore Places 
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link href="/blogs" className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/15 text-white border border-white/20 px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 backdrop-blur-md hover:-translate-y-1">
              Read the Blog
            </Link>
          </div>
        </div>

        {/* Stats bar - Integrated seamlessly into the bottom */}
        <div className="absolute bottom-10 left-0 right-0 hidden md:block">
          <div className="max-w-4xl mx-auto px-6">
            <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl p-6 grid grid-cols-3 divide-x divide-white/10 shadow-2xl">
              {[['7+', 'Must-Visit Places'], ['50+', 'Blog Articles'], ['100%', 'Independent Reviews']].map(([n, l]) => (
                <div key={l} className="text-center px-4 transform transition-transform hover:scale-105">
                  <p className="text-3xl font-bold text-amber-400 mb-1 drop-shadow-md">{n}</p>
                  <p className="text-slate-300 text-sm font-medium tracking-wide uppercase">{l}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Overlapping Floating Search Bar */}
      <section className="relative z-20 -mt-8 sm:-mt-12 max-w-3xl mx-auto px-4">
        <div className="bg-white/95 backdrop-blur-xl p-2 sm:p-3 rounded-full shadow-2xl shadow-slate-200/50 border border-slate-100 flex items-center transition-shadow focus-within:shadow-teal-500/20">
          <div className="flex-1 relative flex items-center">
            <Search className="absolute left-4 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search places, hotels, travel tips..."
              className="w-full pl-12 pr-4 py-3 bg-transparent border-none focus:ring-0 text-slate-800 text-base placeholder-slate-400 outline-none"
            />
          </div>
          <button className="bg-slate-900 text-white px-6 sm:px-8 py-3 rounded-full text-sm font-semibold hover:bg-teal-700 transition-colors duration-300 whitespace-nowrap">
            Search
          </button>
        </div>
      </section>

      {/* Featured Places */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[2px] w-8 bg-teal-600 rounded-full" />
              <p className="text-teal-700 font-bold text-sm uppercase tracking-widest">Top Destinations</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">Places to Explore</h2>
          </div>
          <Link href="/places" className="group hidden sm:flex items-center gap-2 text-slate-600 font-semibold hover:text-teal-700 transition-colors">
            View all destinations 
            <span className="bg-slate-100 group-hover:bg-teal-50 p-2 rounded-full transition-colors">
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredPlaces.map((place: any) => (
            <PlaceCard key={place.id} place={place} />
          ))}
        </div>
        
        <div className="text-center mt-10 sm:hidden">
          <Link href="/places" className="inline-flex items-center justify-center w-full gap-2 text-teal-700 font-semibold border border-teal-200 bg-teal-50/50 px-6 py-4 rounded-xl hover:bg-teal-100 transition-colors">
            View all destinations <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick Links — Premium Bento Style */}
      <section className="relative bg-slate-950 py-24 overflow-hidden">
        {/* Subtle background glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-md h-full bg-teal-900/20 blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="text-teal-400 font-bold text-sm uppercase tracking-widest mb-3">Plan Your Stay</p>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white tracking-tight">Everything You Need</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { href: '/hotels', icon: Star, title: 'Hotels & Stays', desc: 'Curated picks from luxury hotels to authentic Khasi homestays — every budget, every style.', label: 'Browse Hotels', bg: 'bg-emerald-500/10', color: 'text-emerald-400', border: 'group-hover:border-emerald-500/50' },
              { href: '/restaurants', icon: MapPin, title: 'Local Cuisine', desc: 'The best jadoh, wood-fired pizza, and mountain coffee in Shillong — strictly no tourist traps.', label: 'Find Food', bg: 'bg-amber-500/10', color: 'text-amber-400', border: 'group-hover:border-amber-500/50' },
              { href: '/rentals', icon: Bike, title: 'Transport', desc: 'Trusted rental providers with fair prices. Explore Meghalaya\'s winding roads on your own schedule.', label: 'Rent a Ride', bg: 'bg-blue-500/10', color: 'text-blue-400', border: 'group-hover:border-blue-500/50' },
            ].map(item => (
              <Link key={item.href} href={item.href} className={`group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-3xl p-8 hover:-translate-y-2 transition-all duration-300 ${item.border}`}>
                <div className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ring-1 ring-white/10 group-hover:ring-white/20 transition-all`}>
                  <item.icon className={`w-7 h-7 ${item.color}`} />
                </div>
                <h3 className="font-serif font-bold text-white text-2xl mb-4">{item.title}</h3>
                <p className="text-slate-400 text-base leading-relaxed mb-8">{item.desc}</p>
                <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                  <span className={`font-semibold text-sm ${item.color}`}>
                    {item.label}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${item.bg} opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-300`}>
                    <ArrowRight className={`w-4 h-4 ${item.color}`} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="h-[2px] w-8 bg-amber-500 rounded-full" />
              <p className="text-amber-600 font-bold text-sm uppercase tracking-widest">Travel Stories</p>
            </div>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight">From the Blog</h2>
          </div>
          <Link href="/blogs" className="group hidden sm:flex items-center gap-2 text-slate-600 font-semibold hover:text-amber-600 transition-colors">
            Read all articles
            <span className="bg-slate-100 group-hover:bg-amber-50 p-2 rounded-full transition-colors">
              <ChevronRight className="w-4 h-4" />
            </span>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredBlogs.map((blog: any) => (
            <BlogCard key={blog.slug} blog={blog} featured />
          ))}
        </div>
      </section>

      {/* Local Guide Premium CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900 via-teal-800 to-slate-900" />
        {/* Abstract pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-teal-500/20 ring-4 ring-teal-500/10 mb-8 backdrop-blur-sm">
            <Users className="w-10 h-10 text-teal-200" />
          </div>
          <h2 className="font-serif text-4xl sm:text-5xl font-bold text-white mb-6 tracking-tight">
            Need a Local Expert?
          </h2>
          <p className="text-teal-100/80 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto font-light">
            Our network of vetted Khasi guides know the hidden trails, tribal villages, and off-map viewpoints that you simply won't find in any guidebook.
          </p>
          <Link href="/rentals#guides" className="group inline-flex items-center gap-3 bg-white text-teal-900 font-bold px-8 py-4 rounded-full text-lg hover:bg-teal-50 hover:shadow-xl hover:shadow-teal-900/20 transition-all duration-300 hover:-translate-y-1">
            Find Local Guides 
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}