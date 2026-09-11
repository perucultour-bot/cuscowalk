"use client";

import Link from "next/link";
import { useApp } from "@/components/Providers";
import type { PostMeta } from "@/lib/blog";

const COPY = {
  es: { empty: "Todavía no hay artículos en este idioma. Prueba cambiando a EN.", read: "Leer más →" },
  en: { empty: "No articles in this language yet. Try switching to ES.", read: "Read more →" },
};

export default function BlogList({ posts }: { posts: PostMeta[] }) {
  const { lang } = useApp();
  const filtered = posts.filter((p) => p.lang === lang);
  const copy = COPY[lang];

  if (filtered.length === 0) {
    return <p className="text-piedra mt-8">{copy.empty}</p>;
  }

  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
      {filtered.map((post) => (
        <Link
          key={post.slug}
          href={`/blog/${post.slug}`}
          className="block border border-piedra-200 dark:border-negro-800 rounded p-6 bg-white dark:bg-negro-800 hover:-translate-y-1 transition-transform"
        >
          {post.date && <span className="font-mono text-xs text-piedra">{post.date}</span>}
          <h2 className="font-serif text-xl mt-2">{post.title}</h2>
          <p className="text-piedra text-sm mt-2">{post.excerpt}</p>
          <span className="inline-block mt-4 text-sm font-semibold text-amarillo-600 dark:text-amarillo">
            {copy.read}
          </span>
        </Link>
      ))}
    </div>
  );
}
