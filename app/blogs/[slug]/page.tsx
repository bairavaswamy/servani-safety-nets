import { notFound } from "next/navigation";
import BlogDetailsClient from "./BlogDetailsClient";

const blogPosts: Record<
  string,
  { title: string; date: string; image: string; content: string }
> = {
  "importance-of-balcony-safety-nets": {
    title: "Why Balcony Safety Nets Are Essential for Every Home",
    date: "October 25, 2025",
    image: "/images/balcony-safety-net.webp",
    content: `
Balcony safety nets are not just an accessory — they’re a necessity for families, especially in high-rise apartments. These nets prevent accidental falls while keeping your open view intact.

At Servani Safety Nets, we use durable, UV-resistant materials that last for years without losing strength. Our professional team ensures a neat installation with aesthetic appeal.

Whether you have kids, pets, or just want peace of mind — balcony safety nets are your best investment for home safety.
    `,
  },
  "invisible-grills-modern-home-trend": {
    title: "Invisible Grills — The Modern Home Safety Trend",
    date: "September 12, 2025",
    image: "/images/invisible-grill.webp",
    content: `
Invisible grills are the perfect blend of beauty and safety. Made from 316 marine-grade stainless steel, they provide superior protection without blocking your view.

They are rust-proof, durable, and can handle heavy impact — making them ideal for balconies, windows, and facades.

Modern homeowners are choosing invisible grills for their sleek design and minimal maintenance needs.
    `,
  },
  "pigeon-nets-for-clean-balconies": {
    title: "Keep Your Balcony Clean with Pigeon Nets",
    date: "August 30, 2025",
    image: "/images/pigeon-installation.webp",
    content: `
Pigeons can create a mess on balconies and open spaces. Pigeon safety nets offer a safe, hygienic solution without harming birds, keeping your home clean and peaceful.
    `,
  },
};

// ✅ Required for static export
export async function generateStaticParams() {
  return Object.keys(blogPosts).map((slug) => ({ slug }));
}

export default function Page({ params }: { params: { slug: string } }) {
  const blog = blogPosts[params.slug];
  if (!blog) return notFound();

  return <BlogDetailsClient blog={blog} />;
}
