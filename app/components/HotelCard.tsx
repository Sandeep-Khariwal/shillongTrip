import { MapPin, Star, Wifi, Phone } from 'lucide-react';

interface Hotel {
  id: string; name: string; type: string; location: string;
  priceRange: string; rating: number; amenities: string[];
  description: string; contact: string; bookingUrl: string;
  image: string; highlight: string;
}

export default function HotelCard({ hotel }: { hotel: any }) {
    
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div className="relative h-52 overflow-hidden">
        <img src={hotel.image} alt={hotel.name} className="w-full h-full object-cover" />
        <span className="absolute top-3 left-3 bg-blue-900 text-white text-xs font-semibold px-3 py-1 rounded-full">{hotel.type}</span>
        <div className="absolute top-3 right-3 bg-white/90 rounded-full px-2 py-1 flex items-center gap-1 text-xs font-semibold">
          <Star className="w-3 h-3 text-amber-500 fill-amber-500" />{hotel.rating}
        </div>
        <div className="absolute bottom-3 left-3 bg-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full">{hotel.highlight}</div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-slate-900 text-lg mb-1">{hotel.name}</h3>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">{hotel.description}</p>
        <div className="flex items-center gap-1 text-slate-500 text-sm mb-3">
          <MapPin className="w-4 h-4 text-teal-700" />{hotel.location}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {hotel?.pecialty?.slice(0, 4).map((a:any) => (
            <span key={a} className="bg-teal-50 text-teal-700 text-xs px-2 py-1 rounded-full">{a}</span>
          ))}
        </div>
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div>
            <p className="text-xs text-slate-500">Price range</p>
            <p className="font-bold text-teal-700">{hotel.priceRange}</p>
          </div>
          <a href={`tel:${hotel.contact}`} className="flex items-center gap-2 bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal-800 transition-colors">
            <Phone className="w-4 h-4" />Call
          </a>
        </div>
      </div>
    </div>
  );
}