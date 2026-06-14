import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

interface BlogMeta {
  title: string; slug: string; excerpt: string; coverImage: string;
  author: string; date: string; readTime: string; category: string; tags: string[];
}

export default function BlogCard({ blog, featured }: { blog: any; featured?: boolean }) {
    
  return (
    <Link href={`/blogs`} className={`group block bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${featured ? 'md:flex' : ''}`}>
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/5 h-56 md:h-auto' : 'h-48'}`}>
        <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
        <span className="absolute top-3 left-3 bg-amber-500 text-white text-xs font-semibold px-3 py-1 rounded-full">{blog.category}</span>
      </div>
      <div className={`p-5 ${featured ? 'md:flex-1 md:p-7' : ''}`}>
        <h3 className={`font-bold text-slate-900 leading-tight mb-3 group-hover:text-teal-700 transition-colors ${featured ? 'text-xl' : 'text-base'}`}>{blog.title}</h3>
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 mb-4">{blog.excerpt}</p>
        <div className="flex items-center gap-4 text-xs text-slate-500">
          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
          <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{blog.readTime}</span>
        </div>
        <div className="mt-4 flex items-center gap-1 text-teal-700 text-sm font-semibold">
          Read article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
}