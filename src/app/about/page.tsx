"use client";

import { motion } from "framer-motion";
import { Search, Shield, BarChart3, Users, CheckCircle } from "lucide-react";
import NewsletterSignup from "@/components/NewsletterSignup";

export default function AboutPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">
            About <span className="gradient-text">RealEstateAI</span>
          </h1>
          <p className="text-lg text-[var(--muted)] max-w-2xl mx-auto leading-relaxed">
            We help real estate professionals navigate the rapidly evolving
            world of AI technology. Our mission is to provide honest, in-depth
            reviews so you can make confident software decisions.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-10 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-[var(--muted)] leading-relaxed mb-4">
            The real estate industry is being transformed by artificial
            intelligence. New tools launch every week promising to automate
            lead generation, create stunning virtual staging, write compelling
            listings, and predict market trends. But which ones actually
            deliver?
          </p>
          <p className="text-[var(--muted)] leading-relaxed">
            That&apos;s where we come in. RealEstateAI is the definitive
            resource for real estate professionals evaluating AI tools. We test
            every tool hands-on, compare them side-by-side, and give you the
            unvarnished truth about what works, what doesn&apos;t, and what&apos;s worth
            your money.
          </p>
        </motion.div>

        {/* How We Review */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-8 text-center">
            How We Review
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                icon: Search,
                title: "Hands-On Testing",
                description:
                  "We sign up for every tool and test it with real real estate workflows. No armchair reviews — we use each tool as an agent would.",
              },
              {
                icon: BarChart3,
                title: "Data-Driven Ratings",
                description:
                  "Our ratings are based on measurable criteria: ease of use, feature depth, value for money, support quality, and integration ecosystem.",
              },
              {
                icon: Shield,
                title: "No Pay-for-Placement",
                description:
                  "Tool vendors cannot pay for higher ratings or better placement. Our editorial integrity is non-negotiable.",
              },
              {
                icon: Users,
                title: "Agent Feedback",
                description:
                  "We survey and interview real estate professionals who use these tools daily to incorporate real-world experience into every review.",
              },
            ].map((item, i) => (
              <div
                key={item.title}
                className="rounded-xl bg-[var(--card)] border border-white/5 p-6"
              >
                <div className="w-10 h-10 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center mb-4">
                  <item.icon size={20} className="text-[var(--accent)]" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--muted)] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Rating criteria */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 md:p-10 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">
            Our Rating Criteria
          </h2>
          <div className="space-y-4">
            {[
              {
                label: "Ease of Use",
                description: "How intuitive is the interface for a busy agent?",
              },
              {
                label: "AI Quality",
                description:
                  "How accurate, reliable, and useful are the AI features?",
              },
              {
                label: "Value for Money",
                description:
                  "Does the pricing make sense for the features delivered?",
              },
              {
                label: "Integration",
                description:
                  "How well does it connect with other real estate tools and workflows?",
              },
              {
                label: "Support & Documentation",
                description:
                  "Is help available when you need it? Are resources comprehensive?",
              },
            ].map((criteria) => (
              <div
                key={criteria.label}
                className="flex items-start gap-3"
              >
                <CheckCircle
                  size={18}
                  className="text-[var(--accent)] mt-0.5 shrink-0"
                />
                <div>
                  <span className="text-sm font-semibold text-white">
                    {criteria.label}
                  </span>
                  <span className="text-sm text-[var(--muted)]">
                    {" "}
                    — {criteria.description}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Affiliate disclosure */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-xl bg-[var(--card)] border border-white/5 p-6 mb-12"
        >
          <h3 className="text-lg font-semibold text-white mb-2">
            Affiliate Disclosure
          </h3>
          <p className="text-sm text-[var(--muted)] leading-relaxed">
            RealEstateAI may earn a commission when you sign up for a tool
            through our links. This never affects our ratings or
            recommendations. We recommend tools we genuinely believe will help
            your business, regardless of whether they offer an affiliate
            program. Our editorial and rating processes are completely
            independent of our business relationships.
          </p>
        </motion.div>

        <NewsletterSignup />
      </div>
    </div>
  );
}
