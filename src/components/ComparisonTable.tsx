"use client";

import { Tool } from "@/lib/types";
import StarRating from "./StarRating";
import { Check, X } from "lucide-react";

interface ComparisonTableProps {
  tools: Tool[];
}

export default function ComparisonTable({ tools }: ComparisonTableProps) {
  if (tools.length < 2) return null;

  const allFeatures = Array.from(
    new Set(tools.flatMap((t) => t.features))
  );

  return (
    <div className="overflow-x-auto rounded-xl border border-white/10">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-white/10">
            <th className="text-left p-4 text-[var(--muted)] font-medium bg-[var(--card)]">
              Feature
            </th>
            {tools.map((tool) => (
              <th
                key={tool.id}
                className="text-center p-4 bg-[var(--card)] min-w-[200px]"
              >
                <div className="flex flex-col items-center gap-1">
                  <span className="text-2xl">{tool.logo}</span>
                  <span className="text-white font-semibold">{tool.name}</span>
                  {tool.badge && (
                    <span className="text-xs text-[var(--accent-cyan)]">
                      {tool.badge}
                    </span>
                  )}
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {/* Rating row */}
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <td className="p-4 text-[var(--muted)] font-medium">Rating</td>
            {tools.map((tool) => (
              <td key={tool.id} className="p-4 text-center">
                <div className="flex justify-center">
                  <StarRating rating={tool.rating} reviewCount={tool.reviewCount} />
                </div>
              </td>
            ))}
          </tr>

          {/* Starting Price row */}
          <tr className="border-b border-white/5">
            <td className="p-4 text-[var(--muted)] font-medium">
              Starting Price
            </td>
            {tools.map((tool) => {
              const lowest = Math.min(...tools.map((t) => t.pricing[0].price));
              const isLowest = tool.pricing[0].price === lowest;
              return (
                <td key={tool.id} className="p-4 text-center">
                  <span
                    className={`text-lg font-bold ${
                      isLowest ? "text-[var(--success)]" : "text-white"
                    }`}
                  >
                    ${tool.pricing[0].price}/mo
                  </span>
                </td>
              );
            })}
          </tr>

          {/* Pricing tiers */}
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <td className="p-4 text-[var(--muted)] font-medium">
              Pricing Tiers
            </td>
            {tools.map((tool) => (
              <td key={tool.id} className="p-4 text-center text-xs text-[var(--muted)]">
                {tool.pricing.map((tier) => (
                  <div key={tier.name}>
                    {tier.name}: ${tier.price}/{tier.period}
                  </div>
                ))}
              </td>
            ))}
          </tr>

          {/* Features */}
          {allFeatures.map((feature, i) => (
            <tr
              key={feature}
              className={`border-b border-white/5 ${
                i % 2 === 0 ? "bg-white/[0.02]" : ""
              }`}
            >
              <td className="p-4 text-[var(--muted)] text-xs">{feature}</td>
              {tools.map((tool) => (
                <td key={tool.id} className="p-4 text-center">
                  {tool.features.includes(feature) ? (
                    <Check size={18} className="text-[var(--success)] mx-auto" />
                  ) : (
                    <X size={18} className="text-[var(--border)] mx-auto" />
                  )}
                </td>
              ))}
            </tr>
          ))}

          {/* Pros */}
          <tr className="border-b border-white/5 bg-white/[0.02]">
            <td className="p-4 text-[var(--muted)] font-medium">Pros</td>
            {tools.map((tool) => (
              <td key={tool.id} className="p-4 text-xs">
                <ul className="space-y-1">
                  {tool.pros.map((pro) => (
                    <li key={pro} className="text-[var(--success)] flex items-start gap-1">
                      <Check size={12} className="mt-0.5 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>

          {/* Cons */}
          <tr className="bg-white/[0.02]">
            <td className="p-4 text-[var(--muted)] font-medium">Cons</td>
            {tools.map((tool) => (
              <td key={tool.id} className="p-4 text-xs">
                <ul className="space-y-1">
                  {tool.cons.map((con) => (
                    <li key={con} className="text-[var(--danger)] flex items-start gap-1">
                      <X size={12} className="mt-0.5 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
