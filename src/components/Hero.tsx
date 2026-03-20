"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Search, BarChart3, Shield, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--accent)]/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--accent-purple)]/10 rounded-full blur-[120px]" />
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--accent)]/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--accent)]/10 border border-[var(--accent)]/20 text-sm text-[var(--accent)] mb-6">
            <Star size={14} className="fill-[var(--accent)]" />
            <span>Trusted by 10,000+ Real Estate Professionals</span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            <span className="text-white">Find the Best</span>
            <br />
            <span className="gradient-text">AI Tools for Real Estate</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-[var(--muted)] max-w-2xl mx-auto mb-10 leading-relaxed">
            Compare, review, and discover AI-powered tools that help real estate
            professionals close more deals, save time, and grow their business.
          </p>
        </motion.div>

        {/* Search bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto mb-10"
        >
          <div className="relative">
            <Search
              size={20}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--muted)]"
            />
            <input
              type="text"
              placeholder="Search AI tools (e.g., virtual staging, CRM, lead gen...)"
              className="w-full pl-12 pr-32 py-4 rounded-xl glass text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-all text-sm"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2 rounded-lg bg-[var(--accent)] text-white text-sm font-medium hover:bg-blue-600 transition-colors">
              Search
            </button>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Link
            href="/reviews"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Browse All Tools <ArrowRight size={16} />
          </Link>
          <Link
            href="/compare"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/10 text-white font-medium hover:bg-white/5 transition-colors"
          >
            Compare Tools
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl mx-auto"
        >
          {[
            { icon: Search, label: "200+ Tools Reviewed", sub: "Across 8 categories" },
            { icon: BarChart3, label: "In-Depth Comparisons", sub: "Side-by-side analysis" },
            { icon: Shield, label: "Unbiased Reviews", sub: "No pay-to-play rankings" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/[0.03] border border-white/5"
            >
              <stat.icon size={22} className="text-[var(--accent)]" />
              <span className="text-sm font-semibold text-white">
                {stat.label}
              </span>
              <span className="text-xs text-[var(--muted)]">{stat.sub}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
