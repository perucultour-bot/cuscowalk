import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getPostBySlug, getPostSlugs } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Cusco Walk`, description: post.excerpt };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) notFound();

  return (
    <>
      <Header />
      <main className="pt-36 pb-24">
        <div className="container-cw max-w-2xl">
          <Link href="/blog" className="text-sm text-piedra hover:text-inherit">← Volver al blog</Link>
          {post.date && <span className="font-mono text-xs text-piedra block mt-6">{post.date}</span>}
          <h1 className="text-3xl lg:text-4xl font-serif mt-2">{post.title}</h1>
          <article
            className="prose-cw mt-8 text-[15.5px] leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
