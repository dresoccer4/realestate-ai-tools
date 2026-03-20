"use client";

import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";
import Link from "next/link";
import { BlogPost } from "@/lib/types";
import NewsletterSignup from "@/components/NewsletterSignup";
import AdBanner from "@/components/AdBanner";

const blogPosts: BlogPost[] = [
  {
    slug: "best-ai-tools-for-real-estate-agents-2026",
    title: "Best AI Tools for Real Estate Agents in 2026: Complete Guide",
    excerpt:
      "A comprehensive breakdown of the top AI tools real estate agents are using in 2026 — from CRMs and virtual staging to lead generation, chatbots, and marketing automation. Includes pricing, features, and our recommendations.",
    date: "2026-03-18",
    category: "Guides",
    readTime: "12 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "ai-virtual-staging-vs-traditional-staging",
    title:
      "AI Virtual Staging vs Traditional Staging: Cost, Quality & ROI Compared",
    excerpt:
      "We compared AI virtual staging tools against traditional home staging across cost, quality, turnaround time, and buyer perception. AI staging costs 95% less — but is the quality good enough?",
    date: "2026-03-15",
    category: "Comparisons",
    readTime: "10 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "top-5-ai-crm-tools-real-estate-teams",
    title: "Top 5 AI CRM Tools for Real Estate Teams (Tested & Reviewed)",
    excerpt:
      "We tested the top AI-powered CRMs built for real estate teams. Here is how Follow Up Boss, Lofty, kvCORE, CINC, and Wise Agent compare on features, pricing, and AI capabilities.",
    date: "2026-03-12",
    category: "CRM",
    readTime: "11 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "ai-lead-generation-changing-real-estate",
    title: "How AI Lead Generation is Changing Real Estate Prospecting",
    excerpt:
      "Predictive analytics, AI voice agents, and automated nurturing are transforming how agents find and convert leads. SmartZip predicts sellers with 72% accuracy — and that is just the beginning.",
    date: "2026-03-08",
    category: "Lead Generation",
    readTime: "10 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "best-free-affordable-ai-tools-new-agents",
    title: "Best Free & Affordable AI Tools for New Real Estate Agents",
    excerpt:
      "Starting your real estate career on a budget? These free and low-cost AI tools — including a complete tech stack for under $100/month — give new agents a competitive edge.",
    date: "2026-03-05",
    category: "Getting Started",
    readTime: "9 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "ai-powered-listing-descriptions-best-tools",
    title:
      "AI-Powered Listing Descriptions: Which Tools Write the Best Copy?",
    excerpt:
      "We compared the top AI listing description generators — from free options like Epique AI to premium tools like ListingAI with Fair Housing compliance scanning. Here is which ones produce the best MLS-ready copy.",
    date: "2026-03-01",
    category: "Marketing",
    readTime: "8 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "complete-guide-ai-chatbots-real-estate-websites",
    title: "The Complete Guide to AI Chatbots for Real Estate Websites",
    excerpt:
      "AI chatbots capture and qualify leads 24/7 so you never miss an inquiry. Learn how they work, which platforms lead the market, and how to choose the right one for your website.",
    date: "2026-02-25",
    category: "Lead Generation",
    readTime: "9 min read",
    author: "RealEstateAI Team",
  },
  {
    slug: "how-to-use-ai-virtual-staging-sell-homes-faster",
    title: "How to Use AI Virtual Staging to Sell Homes Faster",
    excerpt:
      "A step-by-step guide to AI virtual staging: choosing the right tool, preparing photos, selecting design styles, ensuring MLS compliance, and presenting staged images to buyers.",
    date: "2026-02-20",
    category: "Guides",
    readTime: "8 min read",
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
        <Link href={`/blog/${blogPosts[0].slug}`}>
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
        </Link>

        {/* Ad Banner */}
        <AdBanner slot="in-article" className="mb-10" />

        {/* Post grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {blogPosts.slice(1).map((post, i) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="rounded-xl bg-[var(--card)] border border-white/5 p-6 group cursor-pointer hover:border-[var(--accent)]/30 transition-all glow-blue-hover h-full"
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
            </Link>
          ))}
        </div>

        <NewsletterSignup />
      </div>
    </div>
  );
}
