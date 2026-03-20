"use client";

type AdSlotSize = "leaderboard" | "sidebar" | "in-article";

interface AdBannerProps {
  slot: AdSlotSize;
  className?: string;
}

const slotConfig: Record<
  AdSlotSize,
  { label: string; height: string; maxWidth: string }
> = {
  leaderboard: {
    label: "728x90 Leaderboard",
    height: "h-[90px]",
    maxWidth: "max-w-[728px]",
  },
  sidebar: {
    label: "300x250 Sidebar",
    height: "h-[250px]",
    maxWidth: "max-w-[300px]",
  },
  "in-article": {
    label: "468x60 In-Article",
    height: "h-[60px]",
    maxWidth: "max-w-[468px]",
  },
};

export default function AdBanner({ slot, className = "" }: AdBannerProps) {
  const config = slotConfig[slot];

  return (
    <div className={`w-full flex justify-center ${className}`}>
      {/*
        TODO: Replace this placeholder with real Google AdSense code once approved.
        Example:
        <ins className="adsbygoogle"
          style={{ display: "block" }}
          data-ad-client="ca-pub-AD_CLIENT_ID"
          data-ad-slot="YOUR_AD_SLOT_ID"
          data-ad-format="auto"
          data-full-width-responsive="true" />
      */}
      <div
        className={`${config.maxWidth} w-full ${config.height} rounded-lg border border-white/5 bg-white/[0.02] flex flex-col items-center justify-center gap-1`}
      >
        <span className="text-[10px] uppercase tracking-widest text-[var(--muted)]/50">
          Advertisement
        </span>
        <span className="text-[9px] text-[var(--muted)]/30">
          {config.label} — Ad space reserved
        </span>
      </div>
    </div>
  );
}
