import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Rating } from "@/components/ui/Rating";
import type { Restaurant } from "@/types/restaurant";
import { formatCurrency } from "@/utils/constants";

type RestaurantInfoProps = {
  restaurant: Restaurant;
};

export function RestaurantInfo({ restaurant }: RestaurantInfoProps) {
  return (
    <section className="py-6">
      <div className="flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
        <div>
          <div className="flex flex-wrap gap-2">
            {restaurant.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
          <h1 className="mt-4 text-3xl font-black text-slate-950 sm:text-4xl">{restaurant.name}</h1>
          <p className="mt-2 text-sm font-semibold text-slate-600">{restaurant.cuisine.join(" / ")}</p>
          <p className="mt-1 text-sm text-slate-500">
            {restaurant.location} / {restaurant.distance}
          </p>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:w-72">
          <div className="flex items-center justify-between">
            <Rating value={restaurant.rating} />
            <span className="text-sm font-semibold text-slate-500">{restaurant.reviewCount}+ ratings</span>
          </div>
          <p className="mt-4 text-sm text-slate-500">{formatCurrency(restaurant.priceForTwo)} for two</p>
          <p className="mt-2 text-sm font-bold text-[#d9480f]">{restaurant.offer}</p>
          <Button className="mt-4 w-full">Reserve table</Button>
        </div>
      </div>
    </section>
  );
}
