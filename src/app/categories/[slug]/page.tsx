import { notFound } from "next/navigation";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { categories } from "@/lib/categories";
import { tools } from "@/lib/tools-data";
import ToolCard from "@/components/ToolCard";

export function generateStaticParams() {
  return categories.map((cat) => ({ slug: cat.slug }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  if (!category) notFound();

  const categoryTools = tools.filter((t) => t.category === category.slug);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--muted)] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/categories"
            className="hover:text-white transition-colors"
          >
            Categories
          </Link>
          <ChevronRight size={14} />
          <span className="text-white">{category.name}</span>
        </nav>

        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">
            {category.name}
          </h1>
          <p className="text-[var(--muted)] max-w-2xl">
            {category.description}
          </p>
        </div>

        {categoryTools.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoryTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-[var(--muted)] text-lg">
              We&apos;re currently reviewing tools in this category. Check back
              soon!
            </p>
            <Link
              href="/reviews"
              className="inline-flex items-center gap-2 mt-4 text-[var(--accent)] hover:underline"
            >
              Browse all tools <ChevronRight size={14} />
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}
