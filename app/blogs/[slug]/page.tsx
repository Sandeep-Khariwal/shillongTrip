import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight } from 'lucide-react';
import { getAllBlogs, getBlogBySlug } from '@/app/lib/blog';
import BlogCard from '@/app/components/BlogCard';
// import { getBlogBySlug, getAllBlogs } from '@/lib/blogs';
// import BlogCard from '../components/BlogCard';

interface Props { params: { slug: string } }

// export async function generateStaticParams() {
//   const blogs = getAllBlogs();
//   return blogs.map(b => ({ slug: b?.slug })) || [];
// }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const blog = getBlogBySlug(params?.slug??"myblog");
  if (!blog) return {};
  return {
    title: blog.title,
    description: blog.excerpt,
    openGraph: {
      title: blog.title,
      description: blog.excerpt,
      images: [blog.coverImage],
      type: 'article',
      publishedTime: blog.date,
      authors: [blog.author],
    },
    twitter: { card: 'summary_large_image', title: blog.title, description: blog.excerpt, images: [blog.coverImage] },
  };
}

function renderMarkdown(content: string): string {
  return content
    .replace(/^### (.+)$/gm, '<h3 class="font-serif text-2xl font-bold text-slate-900 mt-8 mb-3">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 class="font-serif text-3xl font-bold text-slate-900 mt-10 mb-4">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 class="font-serif text-4xl font-bold text-slate-900 mt-10 mb-4">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, '<strong class="font-semibold text-slate-900">$1</strong>')
    .replace(/\*(.+?)\*/g, '<em class="italic">$1</em>')
    .replace(/^> (.+)$/gm, '<blockquote class="border-l-4 border-teal-600 pl-5 py-1 my-5 text-slate-600 italic bg-teal-50 rounded-r-xl">$1</blockquote>')
    .replace(/^---$/gm, '<hr class="my-10 border-slate-200" />')
    .replace(/^\| (.+) \|$/gm, (match, cells) => {
      const cols = cells.split(' | ');
      return `<tr>${cols.map((c: string) => `<td class="px-4 py-2 border border-slate-200 text-sm">${c}</td>`).join('')}</tr>`;
    })
    .replace(/(<tr>[\s\S]+?<\/tr>\n?)+/g, (t) => `<div class="overflow-x-auto my-6"><table class="w-full border-collapse border border-slate-200 rounded-xl overflow-hidden">${t}</table></div>`)
    .replace(/^- (.+)$/gm, '<li class="ml-5 list-disc text-slate-700 mb-1">$1</li>')
    .replace(/(<li.+<\/li>\n?)+/g, (m) => `<ul class="my-4 space-y-1">${m}</ul>`)
    .replace(/\n\n([^<\n].+)/g, '\n\n<p class="text-slate-700 leading-relaxed mb-4">$1</p>');
}

export default function BlogDetailPage({ params }: Props) {
  const blog = getBlogBySlug(params.slug);
  if (!blog) notFound();

  const allBlogs = getAllBlogs();
  const related = allBlogs.filter(b => b.slug !== blog.slug && (b.category === blog.category || b.tags.some(t => blog.tags.includes(t)))).slice(0, 2);

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 mb-8">
        <Link href="/" className="hover:text-teal-700">Home</Link>
        <ArrowRight className="w-3 h-3" />
        <Link href="/blogs" className="hover:text-teal-700">Blog</Link>
        <ArrowRight className="w-3 h-3" />
        <span className="text-slate-900 font-medium truncate max-w-[200px]">{blog.title}</span>
      </nav>

      {/* Category & Meta */}
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">{blog.category}</span>
        <span className="flex items-center gap-1 text-slate-500 text-sm"><Calendar className="w-4 h-4" />{new Date(blog.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
        <span className="flex items-center gap-1 text-slate-500 text-sm"><Clock className="w-4 h-4" />{blog.readTime}</span>
      </div>

      <h1 className="font-serif text-4xl sm:text-5xl font-bold text-slate-900 leading-tight mb-6">{blog.title}</h1>
      <p className="text-slate-600 text-xl leading-relaxed mb-8">{blog.excerpt}</p>

      <div className="flex items-center gap-3 mb-10 pb-8 border-b border-slate-200">
        <div className="w-10 h-10 rounded-full bg-teal-700 flex items-center justify-center text-white font-bold text-sm">{blog.author[0]}</div>
        <div>
          <p className="font-semibold text-slate-900 text-sm">{blog.author}</p>
          <p className="text-slate-500 text-xs">ShillongWander Contributor</p>
        </div>
      </div>

      {/* Cover Image */}
      <div className="rounded-2xl overflow-hidden mb-10 aspect-[16/7]">
        <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="prose-content" dangerouslySetInnerHTML={{ __html: renderMarkdown(blog.content) }} />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-slate-200">
        <Tag className="w-4 h-4 text-slate-400" />
        {blog.tags.map((tag:any) => (
          <span key={tag} className="bg-slate-100 text-slate-700 text-xs px-3 py-1 rounded-full">{tag}</span>
        ))}
      </div>

      {/* Related */}
      {related.length > 0 && (
        <div className="mt-14">
          <h2 className="font-serif text-2xl font-bold text-slate-900 mb-6">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {related.map((b:any) => <BlogCard key={b.slug} blog={b} />)}
          </div>
        </div>
      )}

      <div className="mt-10">
        <Link href="/blogs" className="inline-flex items-center gap-2 text-teal-700 font-semibold hover:gap-3 transition-all">
          <ArrowLeft className="w-4 h-4" />Back to Blog
        </Link>
      </div>
    </article>
  );
}