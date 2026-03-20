"use client";

import { motion } from "framer-motion";
import CategoryCard from "@/components/CategoryCard";
import { categories } from "@/lib/categories";

export default function CategoriesPage() {
  return (
    <div className="pt-28 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-white mb-3">
            Browse by Category
          </h1>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Explore AI tools organized by function. Find exactly what you need
            for your real estate business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.id} category={cat} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
