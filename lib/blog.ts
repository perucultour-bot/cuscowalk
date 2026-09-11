import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";

const BLOG_DIR = path.join(process.cwd(), "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  cover?: string;
  lang: "es" | "en";
  translationSlug?: string;
};

// Lee todos los archivos .md de /content/blog y devuelve sus metadatos,
// ordenados del más reciente al más antiguo. Si la carpeta no existe
// todavía (primer build antes de agregar posts) devuelve una lista vacía
// en vez de romper el build.
export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  const files = fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md"));

  const posts = files.map((filename) => {
    const slug = filename.replace(/\.md$/, "");
    const raw = fs.readFileSync(path.join(BLOG_DIR, filename), "utf-8");
    const { data } = matter(raw);
    return {
      slug,
      title: data.title ?? slug,
      date: data.date ?? "",
      excerpt: data.excerpt ?? "",
      cover: data.cover ?? undefined,
      lang: (data.lang === "en" ? "en" : "es") as "es" | "en",
      translationSlug: data.translationSlug ?? undefined,
    } as PostMeta;
  });

  return posts.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostSlugs(): string[] {
  if (!fs.existsSync(BLOG_DIR)) return [];
  return fs.readdirSync(BLOG_DIR).filter((f) => f.endsWith(".md")).map((f) => f.replace(/\.md$/, ""));
}

export function getPostBySlug(slug: string): (PostMeta & { html: string }) | null {
  const filePath = path.join(BLOG_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, "utf-8");
  const { data, content } = matter(raw);
  const html = marked.parse(content, { async: false }) as string;
  return {
    slug,
    title: data.title ?? slug,
    date: data.date ?? "",
    excerpt: data.excerpt ?? "",
    cover: data.cover ?? undefined,
    lang: (data.lang === "en" ? "en" : "es") as "es" | "en",
    translationSlug: data.translationSlug ?? undefined,
    html,
  };
}
