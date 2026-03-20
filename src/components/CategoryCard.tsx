"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Users,
  Home,
  Target,
  Megaphone,
  BarChart3,
  MessageSquare,
  FileCheck,
  Camera,
} from "lucide-react";
import { Category } from "@/lib/types";

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Users,
  Home,
  Target,
  Megaphone,
  BarChart3,
  MessageSquare,
  FileCheck,
  Camera,
};

interface CategoryCardProps {
  category: Category;
  index?: number;
}

export default function CategoryCard({ category, index = 0 }: CategoryCardProps) {
  const Icon = iconMap[category.icon] || Home;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
    >
      <Link href={`/categories/${category.slug}`}>
        <div className="group relative rounded-xl bg-[var(--card)] border border-white/5 p-6 transition-all duration-300 hover:border-[var(--accent)]/30 glow-blue-hover cursor-pointer">
          <div className="flex items-center gap-4 mb-3">
            <div className="w-12 h-12 rounded-lg bg-[var(--accent)]/10 flex items-center justify-center group-hover:bg-[var(--accent)]/20 transition-colors">
              <Icon size={24} className="text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="text-base font-semibold text-white group-hover:text-[var(--accent)] transition-colors">
                {category.name}
              </h3>
              <span className="text-xs text-[var(--muted)]">
                {category.toolCount} tools
              </span>
            </div>
          </div>
          <p className="text-sm text-[var(--muted)] line-clamp-2">
            {category.description}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
