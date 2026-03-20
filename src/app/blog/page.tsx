"use client";

import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import { BlogPost } from "@/lib/types";
import NewsletterSignup from "@/components/NewsletterSignup";

const blogPosts: BlogPost[] = [
  {
    slug: "ai-transforming-real-estate-2026",
    title: "How AI is Transforming Real Estate in 2026",
    excerpt:
      "From virtual staging to predictive analytics, artificial intelligence is reshaping how agents find, market, and close deals. Here's what you need to know.",
    date: "2026-03-15",
    category: "Industry Trends",
    readTime: "8 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "5-ai-tools-every-new-agent-needs",
    title: "5 AI Tools Every New Real Estate Agent Needs",
    excerpt:
      "Starting your real estate career? These five AI tools will give you a competitive edge from day one without breaking the bank.",
    date: "2026-03-10",
    category: "Getting Started",
    readTime: "6 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "ai-virtual-staging-vs-traditional",
    title: "AI Virtual Staging vs Traditional Staging: The Complete Comparison",
    excerpt:
      "We compared AI virtual staging tools against traditional home staging across cost, quality, turnaround time, and buyer perception. The results may surprise you.",
    date: "2026-03-05",
    category: "Comparisons",
    readTime: "10 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "complete-guide-ai-lead-generation",
    title: "The Complete Guide to AI-Powered Lead Generation for Real Estate",
    excerpt:
      "How AI lead generation tools work, which ones deliver the best ROI, and how to set up an automated pipeline that fills your calendar with qualified appointments.",
    date: "2026-02-28",
    category: "Lead Generation",
    readTime: "12 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "ai-crm-vs-traditional-crm",
    title: "AI-Powered CRM vs Traditional CRM: Which is Right for You?",
    excerpt:
      "AI CRMs promise smarter lead scoring and automated follow-ups, but are they worth the premium? We break down the real-world differences.",
    date: "2026-02-20",
    category: "CRM",
    readTime: "7 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "roi-of-ai-tools-real-estate",
    title: "Calculating the ROI of AI Tools in Your Real Estate Business",
    excerpt:
      "A practical framework for measuring whether your AI tool investments are actually paying off, with real numbers from agents who've tracked their results.",
    date: "2026-02-15",
    category: "Business",
    readTime: "9 min read",
    author: "RealEstateAI Team",
  },
];

export default function BlogPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-3">
            Real Estate AI Insights
          </h1>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Expert articles, guides, and analysis on AI tools and technology for
            real estate professionals.
          </p>
        </motion.div>

        {/* Featured post */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glass rounded-2xl p-8 mb-10 group cursor-pointer hover:border-[var(--accent)]/30 transition-all"
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-medium px-3 py-1 rounded-full bg-[var(--accent)]/20 text-[var(--accent)]">
              Featured
            </span>
            <span className="text-xs text-[var(--muted)] flex items-center gap-1">
              <Tag size={12} />
              {blogPosts[0].category}
            </span>
          </div>
          <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-[var(--accent)] transition-colors">
            {blogPosts[0].title}
          </h2>
          <p className="text-[var(--muted)] mb-4 leading-relaxed">
            {blogPosts[0].excerpt}
          </p>
          <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
            <span>{blogPosts[0].date}</span>
            <span className="flex items-center gap-1">
              <Clock size={12} />
              {blogPosts[0].readTime}
            </span>
          </div>
        </motion.article>

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {blogPosts.slice(1).map((post, i) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl bg-[var(--card)] border border-white/5 p-6 group cursor-pointer hover:border-[var(--accent)]/30 transition-all glow-blue-hover"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-white/5 text-[var(--muted)]">
                  {post.category}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[var(--accent)] transition-colors">
                {post.title}
              </h3>
              <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-4 text-xs text-[var(--muted)]">
                <span>{post.date}</span>
                <span className="flex items-center gap-1">
                  <Clock size={12} />
                  {post.readTime}
                </span>
              </div>
            </motion.article>
          ))}
        </div>

        <NewsletterSignup />
      </div>
    </div>
  );
}
