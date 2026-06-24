import { getRatingColor } from "@/utils/constants";
import { StarIcon } from "lucide-react";

type RatingProps = {
  value: number;
};

export function Rating({ value }: RatingProps) {
  return (
    <div className="flex items-center gap-1">
  <span
    className={`inline-flex items-center justify-center rounded-2xl px-1 py-1 text-xs font-bold ${getRatingColor(
      value
    )}`}
  >
    <StarIcon size={10} />
  </span>

  <span className="font-bold">{value.toFixed(1)}</span>
</div>
  );
}
