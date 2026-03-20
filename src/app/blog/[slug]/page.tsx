"use client";

import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import { Clock, ArrowLeft, Tag } from "lucide-react";
import Link from "next/link";
import { getArticleBySlug } from "@/lib/blog-data";
import NewsletterSignup from "@/components/NewsletterSignup";
import AdBanner from "@/components/AdBanner";

export default function BlogArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = getArticleBySlug(slug);

  if (!article) {
    return (
      <div className="pt-28 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Article Not Found
          </h1>
          <p className="text-[var(--muted)] mb-8">
            The article you are looking for does not exist or has been moved.
          </p>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[var(--accent)] hover:underline"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--accent)] transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Blog
          </Link>
        </motion.div>

        {/* Article header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-10"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">
              {article.category}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-lg text-[var(--muted)] mb-5 leading-relaxed">
            {article.excerpt}
          </p>
          <div className="flex items-center gap-5 text-sm text-[var(--muted)] border-t border-white/5 pt-4">
            <span>{article.author}</span>
            <span>{article.date}</span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {article.readTime}
            </span>
          </div>
        </motion.header>

        {/* Ad Banner */}
        <AdBanner slot="in-article" className="mb-8" />

        {/* Article content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="prose prose-invert prose-lg max-w-none
            prose-headings:text-white prose-headings:font-bold
            prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
            prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
            prose-p:text-[var(--muted)] prose-p:leading-relaxed prose-p:mb-4
            prose-a:text-[var(--accent)] prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-li:text-[var(--muted)] prose-li:leading-relaxed
            prose-ul:my-4 prose-ol:my-4
            prose-table:border-collapse prose-table:w-full prose-table:my-6
            prose-th:text-left prose-th:text-white prose-th:font-semibold prose-th:px-4 prose-th:py-3 prose-th:bg-white/5 prose-th:border prose-th:border-white/10
            prose-td:text-[var(--muted)] prose-td:px-4 prose-td:py-3 prose-td:border prose-td:border-white/10
            prose-em:text-[var(--muted)] prose-em:italic"
          dangerouslySetInnerHTML={{ __html: article.content }}
        />

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 mb-12 p-6 rounded-xl bg-[var(--card)] border border-white/5"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            Find the Right AI Tool for Your Business
          </h3>
          <p className="text-sm text-[var(--muted)] mb-4">
            Browse our expert reviews and comparison guides to find the AI tools
            that match your needs and budget.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/reviews"
              className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-blue-600 transition-colors"
            >
              Browse Reviews
            </Link>
            <Link
              href="/compare"
              className="px-5 py-2.5 rounded-lg bg-white/5 text-white text-sm font-semibold hover:bg-white/10 transition-colors border border-white/10"
            >
              Compare Tools
            </Link>
          </div>
        </motion.div>

        {/* Ad Banner */}
        <AdBanner slot="leaderboard" className="mb-12" />

        {/* Newsletter */}
        <NewsletterSignup />
      </div>
    </div>
  );
}
