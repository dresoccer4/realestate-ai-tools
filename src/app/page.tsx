"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Users } from "lucide-react";
import Hero from "@/components/Hero";
import ToolCard from "@/components/ToolCard";
import CategoryCard from "@/components/CategoryCard";
import NewsletterSignup from "@/components/NewsletterSignup";
import { tools } from "@/lib/tools-data";
import { categories } from "@/lib/categories";

const featuredTools = tools.filter((t) => t.badge).slice(0, 3);

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Featured Tools */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              Featured AI Tools
            </h2>
            <p className="text-[var(--muted)] max-w-lg mx-auto">
              Hand-picked tools that stand out for quality, value, and
              innovation in the real estate AI space.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Browse by Category */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              Browse by Category
            </h2>
            <p className="text-[var(--muted)] max-w-lg mx-auto">
              Find the right AI tool for every aspect of your real estate
              business.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((cat, i) => (
              <CategoryCard key={cat.id} category={cat} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              Latest Reviews
            </h2>
            <p className="text-[var(--muted)] max-w-lg mx-auto">
              Our most recent in-depth reviews of AI tools for real estate
              professionals.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tools.slice(0, 4).map((tool, i) => (
              <ToolCard key={tool.id} tool={tool} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Trust Us */}
      <section className="py-20 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-3">
              Why Trust RealEstateAI?
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Expert Reviews",
                description:
                  "Every tool is tested hands-on by real estate technology specialists who understand agent workflows.",
              },
              {
                icon: Shield,
                title: "Unbiased Ratings",
                description:
                  "Our ratings are based on real performance data, not advertising dollars. We never accept pay-for-placement.",
              },
              {
                icon: Users,
                title: "Real Agent Feedback",
                description:
                  "We incorporate feedback from thousands of agents who use these tools daily in their business.",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-6 rounded-xl bg-[var(--card)] border border-white/5"
              >
                <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon size={24} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)]">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterSignup />
        </div>
      </section>
    </>
  );
}
