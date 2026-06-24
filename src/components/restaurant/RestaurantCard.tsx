import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { Rating } from "@/components/ui/Rating";
import type { Restaurant } from "@/types/restaurant";
import { formatCurrency } from "@/utils/constants";

type RestaurantCardProps = {
  restaurant: Restaurant;
};

export function RestaurantCard({ restaurant }: RestaurantCardProps) {
  return (
    <Link
      className="group block overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-lg"
      href={`/restaurant/${restaurant.id}`}
    >
      <div className="relative h-52 overflow-hidden">
        <Image
          src={restaurant.image}
          alt={restaurant.name}
          fill
          className="object-cover transition duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-3 text-white">
          <div>
            <h3 className="text-xl font-black">{restaurant.name}</h3>
            <p className="mt-1 text-xs font-semibold text-white/85">{restaurant.distance}</p>
          </div>
          <Rating value={restaurant.rating} />
        </div>
      </div>

      <div className="space-y-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="line-clamp-1 text-sm font-semibold text-slate-600">{restaurant.cuisine.join(" / ")}</p>
            <p className="mt-1 line-clamp-1 text-sm text-slate-500">{restaurant.location}</p>
          </div>
          <p className="shrink-0 text-sm font-bold text-slate-900">{formatCurrency(restaurant.priceForTwo)}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          <Badge tone="slate">{restaurant.bookingLabel}</Badge>
          <Badge tone="green">{restaurant.offer}</Badge>
        </div>
      </div>
    </Link>
  );
}
