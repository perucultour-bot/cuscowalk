import Link from "next/link";
import type { Metadata } from "next";
import { getAllPosts } from "@/lib/blog";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import BlogList from "@/components/BlogList";

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
          <BlogList posts={posts} />
        </div>
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
