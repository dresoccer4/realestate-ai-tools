import { Star, StarHalf } from "lucide-react";

interface StarRatingProps {
  rating: number;
  reviewCount?: number;
  size?: number;
}

export default function StarRating({
  rating,
  reviewCount,
  size = 16,
}: StarRatingProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.3 && rating - fullStars < 0.8;
  const emptyStars = 5 - fullStars - (hasHalf ? 1 : 0);

  return (
    <div className="flex items-center gap-1.5">
      <div className="flex items-center">
        {Array.from({ length: fullStars }).map((_, i) => (
          <Star
            key={`full-${i}`}
            size={size}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
        {hasHalf && (
          <StarHalf
            size={size}
            className="fill-yellow-400 text-yellow-400"
          />
        )}
        {Array.from({ length: emptyStars }).map((_, i) => (
          <Star
            key={`empty-${i}`}
            size={size}
            className="text-[var(--border)]"
          />
        ))}
      </div>
      <span className="text-sm font-semibold text-white">{rating}</span>
      {reviewCount !== undefined && (
        <span className="text-xs text-[var(--muted)]">
          ({reviewCount} reviews)
        </span>
      )}
    </div>
  );
}
