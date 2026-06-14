import Link from 'next/link';
import { Mountain } from 'lucide-react'; // Keep Mountain from Lucide
// Import social icons from react-icons
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa'; 

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-white mb-3">
              <Mountain className="w-6 h-6 text-amber-400" />
              Shillong<span className="text-amber-400">Wander</span>
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">Your honest, independent guide to Shillong and Meghalaya. No sponsored listings. No filler.</p>
            <div className="flex gap-4 mt-5">
              {/* Updated array to use the React Icons */}
              {[FaInstagram, FaFacebook, FaTwitter, FaYoutube].map((Icon, i) => (
                <a key={i} href="#" className="w-8 h-8 bg-slate-800 rounded-full flex items-center justify-center hover:bg-teal-700 transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              {[['Places to Visit', '/places'], ['Hotels & Stays', '/hotels'], ['Restaurants', '/restaurants'], ['Scooter Rentals', '/rentals']].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Blog</h4>
            <ul className="space-y-2 text-sm">
              {[['Destinations', '/blogs?category=Destinations'], ['Itineraries', '/blogs?category=Itineraries'], ['Travel Tips', '/blogs?category=Travel Tips'], ['Food & Culture', '/blogs?category=Food']].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Info</h4>
            <ul className="space-y-2 text-sm">
              {[['About Us', '/about'], ['Contact', '/contact'], ['Privacy Policy', '/privacy'], ['Sitemap', '/sitemap.xml']].map(([label, href]) => (
                <li key={href}><Link href={href} className="hover:text-teal-400 transition-colors">{label}</Link></li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-slate-800 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center text-sm text-slate-500">
          <p>© 2025 ShillongWander. Made with ♥ in Meghalaya.</p>
          <p className="mt-2 sm:mt-0">Independent travel guide · Not sponsored</p>
        </div>
      </div>
    </footer>
  );
}