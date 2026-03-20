"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import ComparisonTable from "@/components/ComparisonTable";
import { tools } from "@/lib/tools-data";

export default function ComparePage() {
  const [tool1, setTool1] = useState(tools[0].id);
  const [tool2, setTool2] = useState(tools[1].id);

  const selectedTools = [
    tools.find((t) => t.id === tool1)!,
    tools.find((t) => t.id === tool2)!,
  ];

  return (
    <div className="pt-28 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl font-bold text-white mb-3">
            Compare AI Tools
          </h1>
          <p className="text-[var(--muted)] max-w-xl mx-auto">
            Side-by-side comparison of features, pricing, and ratings to find
            the perfect tool for your needs.
          </p>
        </motion.div>

        {/* Tool selectors */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
        >
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[var(--muted)]">Tool 1</label>
            <select
              value={tool1}
              onChange={(e) => setTool1(e.target.value)}
              className="px-4 py-3 rounded-lg bg-[var(--card)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--accent)] min-w-[240px]"
            >
              {tools.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
          <div className="flex items-end justify-center pb-2">
            <span className="text-[var(--muted)] font-bold text-lg">VS</span>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-xs text-[var(--muted)]">Tool 2</label>
            <select
              value={tool2}
              onChange={(e) => setTool2(e.target.value)}
              className="px-4 py-3 rounded-lg bg-[var(--card)] border border-white/10 text-white text-sm focus:outline-none focus:border-[var(--accent)] min-w-[240px]"
            >
              {tools.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
          </div>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <ComparisonTable tools={selectedTools} />
        </motion.div>

        {/* Popular comparisons */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Popular Comparisons
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { a: tools[0], b: tools[3] },
              { a: tools[1], b: tools[7] },
              { a: tools[2], b: tools[5] },
            ].map(({ a, b }) => (
              <button
                key={`${a.id}-${b.id}`}
                onClick={() => {
                  setTool1(a.id);
                  setTool2(b.id);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-4 rounded-xl bg-[var(--card)] border border-white/5 hover:border-[var(--accent)]/30 transition-all text-left group"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{a.logo}</span>
                  <span className="text-[var(--muted)] font-bold">vs</span>
                  <span className="text-2xl">{b.logo}</span>
                </div>
                <p className="text-sm text-white mt-2 group-hover:text-[var(--accent)] transition-colors">
                  {a.name} vs {b.name}
                </p>
                <p className="text-xs text-[var(--muted)] mt-1">
                  Compare features, pricing & ratings
                </p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
