import { MapPin, Star, Clock } from 'lucide-react';

interface Restaurant {
  id: string; name: string; cuisine: string; priceRange: string;
  location: string; rating: number; specialty: string[];
  vibe: string; timings: string; image: string;
}

export default function RestaurantCard({ restaurant }: { restaurant: any }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-48 overflow-hidden">
        <img src={restaurant.image} alt={restaurant.name} className="w-full h-full object-cover" />
        <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-semibold">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />{restaurant.rating}
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-slate-900 text-lg leading-tight">{restaurant.name}</h3>
          <span className="text-teal-700 font-bold text-sm whitespace-nowrap ml-2">{restaurant.priceRange}</span>
        </div>
        <p className="text-amber-600 text-sm font-medium mb-2">{restaurant.cuisine}</p>
        <p className="text-slate-600 text-sm leading-relaxed mb-3 italic">{restaurant.vibe}</p>
        <div className="mb-3">
          <p className="text-xs font-semibold text-slate-700 mb-1">Must try:</p>
          <div className="flex flex-wrap gap-1">
            {restaurant?.specialty?.slice(0, 3).map((s:any) => (
              <span key={s} className="bg-amber-50 text-amber-700 text-xs px-2 py-1 rounded-full">{s}</span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-4 text-xs text-slate-500 pt-3 border-t border-slate-100">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{restaurant.location}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{restaurant.timings}</span>
        </div>
      </div>
    </div>
  );
}