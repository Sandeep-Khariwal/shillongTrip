import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDir = path.join(process.cwd(), 'app/content/blogs');

export interface BlogMeta {
  title: string;
  slug: string;
  excerpt: string;
  coverImage: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface Blog extends BlogMeta {
  content: string;
}

export function getAllBlogs(): BlogMeta[] {
  const files = fs.readdirSync(blogsDir);
  return files
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const raw = fs.readFileSync(path.join(blogsDir, file), 'utf8');
      const { data } = matter(raw);
      return data as BlogMeta;
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogBySlug(slug: string): Blog | null {
  const files = fs.readdirSync(blogsDir);
  for (const file of files) {
    const raw = fs.readFileSync(path.join(blogsDir, file), 'utf8');
    const { data, content } = matter(raw);
    if (data.slug === slug) {
      return { ...(data as BlogMeta), content };
    }
  }
  return null;
}

export function getFeaturedBlogs(): BlogMeta[] {
  return getAllBlogs().filter(b => b.featured);
}