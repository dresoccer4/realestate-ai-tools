"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import { Tool } from "@/lib/types";
import StarRating from "./StarRating";

interface ToolCardProps {
  tool: Tool;
  index?: number;
}

const badgeColors: Record<string, string> = {
  "Editor's Choice": "bg-yellow-500/20 text-yellow-300 border-yellow-500/30",
  "Best Value": "bg-green-500/20 text-green-300 border-green-500/30",
  "Most Popular": "bg-purple-500/20 text-purple-300 border-purple-500/30",
};

export default function ToolCard({ tool, index = 0 }: ToolCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="relative group h-full rounded-xl bg-[var(--card)] border border-white/5 p-6 transition-all duration-300 hover:border-[var(--accent)]/30 glow-blue-hover">
        {/* Badge */}
        {tool.badge && (
          <span
            className={`absolute top-4 right-4 text-xs font-medium px-2.5 py-1 rounded-full border ${badgeColors[tool.badge]}`}
          >
            {tool.badge}
          </span>
        )}

        {/* Logo & Name */}
        <div className="flex items-start gap-3 mb-3">
          <span className="text-3xl">{tool.logo}</span>
          <div>
            <h3 className="text-lg font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
              {tool.name}
            </h3>
            <span className="text-xs text-[var(--accent-cyan)] uppercase tracking-wide">
              {tool.category.replace("-", " ")}
            </span>
          </div>
        </div>

        {/* Rating */}
        <div className="mb-3">
          <StarRating rating={tool.rating} reviewCount={tool.reviewCount} />
        </div>

        {/* Description */}
        <p className="text-sm text-[var(--muted)] mb-4 line-clamp-2">
          {tool.description}
        </p>

        {/* Features */}
        <ul className="space-y-1.5 mb-4">
          {tool.features.slice(0, 3).map((feature) => (
            <li
              key={feature}
              className="text-xs text-[var(--muted)] flex items-center gap-2"
            >
              <span className="w-1 h-1 rounded-full bg-[var(--accent)]" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Pricing */}
        <div className="mb-5">
          <span className="text-xs text-[var(--muted)]">Starting at</span>
          <div className="flex items-baseline gap-1">
            <span className="text-2xl font-bold text-white">
              ${tool.pricing[0].price}
            </span>
            <span className="text-xs text-[var(--muted)]">/month</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2">
          <Link
            href={`/reviews/${tool.slug}`}
            className="flex-1 flex items-center justify-center gap-1.5 text-sm font-medium px-4 py-2.5 rounded-lg bg-[var(--accent)] text-white hover:bg-blue-600 transition-colors"
          >
            View Review <ArrowRight size={14} />
          </Link>
          <a
            href={tool.affiliateUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center px-3 py-2.5 rounded-lg border border-white/10 text-[var(--muted)] hover:text-white hover:border-white/30 transition-colors"
            aria-label="Visit website"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </motion.div>
  );
}
