import Link from 'next/link';
import { MapPin, Clock, Star, ArrowRight } from 'lucide-react';

interface Place {
  id: string; slug: string; name: string; tagline: string;
  description: string; location: string; bestTime: string;
  category: string; rating: number; tip: string; image: string;
}

export default function PlaceCard({ place }: { place: Place }) {
  return (
    <Link href={`/places/${place.slug}`} className="group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 bg-teal-700 text-white text-xs font-semibold px-3 py-1 rounded-full">{place.category}</span>
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1 text-xs font-semibold">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />{place.rating}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-1 group-hover:text-teal-700 transition-colors">{place.name}</h3>
        <p className="text-teal-700 text-sm font-medium mb-3">{place.tagline}</p>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">{place.description}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{place.location}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{place.bestTime}</span>
        </div>
        <div className="mt-4 flex items-center gap-1 text-teal-700 text-sm font-semibold">
          Explore <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}