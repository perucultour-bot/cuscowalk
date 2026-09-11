import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Blog — Cusco Walk",
  description: "Consejos y recomendaciones para tu viaje a Cusco: primeros días, altura, qué llevar y más.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-36 pb-24">
        <div className="container-cw">
          <Link href="/" className="text-sm text-piedra hover:text-inherit">← Volver al inicio</Link>
          <span className="eyebrow block mt-6">Blog</span>
          <h1 className="mt-3 text-4xl lg:text-5xl font-serif">Consejos para tu viaje a Cusco</h1>

          {posts.length === 0 ? (
            <p className="text-piedra mt-8">Todavía no hay artículos publicados. Vuelve pronto.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block border border-piedra-200 dark:border-negro-800 rounded p-6 bg-white dark:bg-negro-800 hover:-translate-y-1 transition-transform"
                >
                  {post.date && <span className="font-mono text-xs text-piedra">{post.date}</span>}
                  <h2 className="font-serif text-xl mt-2">{post.title}</h2>
                  <p className="text-piedra text-sm mt-2">{post.excerpt}</p>
                  <span className="inline-block mt-4 text-sm font-semibold text-amarillo-600 dark:text-amarillo">
                    Leer más →
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
