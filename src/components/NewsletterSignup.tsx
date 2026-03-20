"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";

export default function NewsletterSignup() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass rounded-2xl p-8 md:p-12 text-center"
    >
      <div className="w-14 h-14 rounded-full bg-[var(--accent)]/10 flex items-center justify-center mx-auto mb-5">
        <Mail size={28} className="text-[var(--accent)]" />
      </div>
      <h3 className="text-2xl font-bold text-white mb-2">
        Stay Updated on the Latest AI Tools
      </h3>
      <p className="text-[var(--muted)] text-sm max-w-md mx-auto mb-6">
        Get weekly reviews, comparisons, and exclusive deals on AI tools for
        real estate professionals. Join 5,000+ agents.
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="flex-1 px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-lg bg-[var(--accent)] text-white text-sm font-semibold hover:bg-blue-600 transition-colors whitespace-nowrap"
        >
          Subscribe Free
        </button>
      </form>
      <p className="text-xs text-[var(--muted)] mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </motion.div>
  );
}
