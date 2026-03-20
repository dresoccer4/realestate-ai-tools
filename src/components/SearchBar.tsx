"use client";

import { Search } from "lucide-react";
import { categories } from "@/lib/categories";

export default function SearchBar() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <div className="relative flex-1">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--muted)]"
        />
        <input
          type="text"
          placeholder="Search AI tools..."
          className="w-full pl-10 pr-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-white placeholder:text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors"
        />
      </div>
      <select className="px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-sm text-[var(--muted)] focus:outline-none focus:border-[var(--accent)] transition-colors appearance-none cursor-pointer">
        <option value="">All Categories</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.slug}>
            {cat.name}
          </option>
        ))}
      </select>
    </div>
  );
}
