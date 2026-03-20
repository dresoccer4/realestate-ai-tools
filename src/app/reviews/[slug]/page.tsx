import { notFound } from "next/navigation";
import Link from "next/link";
import { Check, X, ExternalLink, ChevronRight } from "lucide-react";
import { tools } from "@/lib/tools-data";
import StarRating from "@/components/StarRating";
import ToolCard from "@/components/ToolCard";

export function generateStaticParams() {
  return tools.map((tool) => ({ slug: tool.slug }));
}

export default async function ToolReviewPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const tool = tools.find((t) => t.slug === slug);
  if (!tool) notFound();

  const similarTools = tools
    .filter((t) => t.category === tool.category && t.id !== tool.id)
    .slice(0, 3);

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-[var(--muted)] mb-8">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <ChevronRight size={14} />
          <Link
            href="/reviews"
            className="hover:text-white transition-colors"
          >
            Reviews
          </Link>
          <ChevronRight size={14} />
          <span className="text-white">{tool.name}</span>
        </nav>

        {/* Hero */}
        <div className="glass rounded-2xl p-8 md:p-10 mb-10">
          <div className="flex flex-col md:flex-row md:items-start gap-6">
            <span className="text-5xl">{tool.logo}</span>
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h1 className="text-3xl font-bold text-white">{tool.name}</h1>
                {tool.badge && (
                  <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)] border border-[var(--accent)]/30">
                    {tool.badge}
                  </span>
                )}
              </div>
              <span className="text-sm text-[var(--accent-cyan)] uppercase tracking-wide">
                {tool.category.replace("-", " ")}
              </span>
              <div className="mt-3">
                <StarRating
                  rating={tool.rating}
                  reviewCount={tool.reviewCount}
                  size={20}
                />
              </div>
              <p className="text-[var(--muted)] mt-4 leading-relaxed">
                {tool.longDescription}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href={tool.affiliateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-blue-600 transition-colors"
                >
                  Visit {tool.name} <ExternalLink size={16} />
                </a>
                <Link
                  href="/compare"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
                >
                  Compare with Others
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Features */}
            <div className="rounded-xl bg-[var(--card)] border border-white/5 p-6">
              <h2 className="text-xl font-bold text-white mb-4">
                Key Features
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tool.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-[var(--muted)]"
                  >
                    <Check
                      size={16}
                      className="text-[var(--success)] mt-0.5 shrink-0"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Pros & Cons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-xl bg-[var(--card)] border border-white/5 p-6">
                <h2 className="text-lg font-bold text-[var(--success)] mb-4">
                  Pros
                </h2>
                <ul className="space-y-2">
                  {tool.pros.map((pro) => (
                    <li
                      key={pro}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <Check
                        size={14}
                        className="text-[var(--success)] mt-0.5 shrink-0"
                      />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl bg-[var(--card)] border border-white/5 p-6">
                <h2 className="text-lg font-bold text-[var(--danger)] mb-4">
                  Cons
                </h2>
                <ul className="space-y-2">
                  {tool.cons.map((con) => (
                    <li
                      key={con}
                      className="flex items-start gap-2 text-sm text-[var(--muted)]"
                    >
                      <X
                        size={14}
                        className="text-[var(--danger)] mt-0.5 shrink-0"
                      />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar — Pricing */}
          <div className="space-y-6">
            <div className="rounded-xl bg-[var(--card)] border border-white/5 p-6 sticky top-28">
              <h2 className="text-xl font-bold text-white mb-4">Pricing</h2>
              <div className="space-y-4">
                {tool.pricing.map((tier, i) => (
                  <div
                    key={tier.name}
                    className={`rounded-lg p-4 border ${
                      i === 1
                        ? "border-[var(--accent)]/30 bg-[var(--accent)]/5"
                        : "border-white/5 bg-white/[0.02]"
                    }`}
                  >
                    <div className="flex items-baseline justify-between mb-2">
                      <span className="text-sm font-semibold text-white">
                        {tier.name}
                      </span>
                      <div>
                        <span className="text-xl font-bold text-white">
                          ${tier.price}
                        </span>
                        <span className="text-xs text-[var(--muted)]">
                          /{tier.period}
                        </span>
                      </div>
                    </div>
                    <ul className="space-y-1">
                      {tier.features.map((f) => (
                        <li
                          key={f}
                          className="text-xs text-[var(--muted)] flex items-center gap-1.5"
                        >
                          <Check size={10} className="text-[var(--accent)]" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
              <a
                href={tool.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                Get Started with {tool.name}
              </a>
              <p className="text-xs text-[var(--muted)] mt-2 text-center">
                Last updated: {tool.lastUpdated}
              </p>
            </div>
          </div>
        </div>

        {/* Similar Tools */}
        {similarTools.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-white mb-6">
              Similar Tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {similarTools.map((t, i) => (
                <ToolCard key={t.id} tool={t} index={i} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
