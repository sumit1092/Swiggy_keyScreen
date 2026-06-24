"use client";

import Image from "next/image";
import { FilterBar } from "@/components/filters/FilterBar";
import { Container } from "@/components/layout/Container";
import { RestaurantCard } from "@/components/restaurant/RestaurantCard";
import { SearchBar } from "@/components/search/SearchBar";
import { Rating } from "@/components/ui/Rating";
import { useFilters } from "@/hooks/useFilters";
import { useSearch } from "@/hooks/useSearch";
import type { Dish, Restaurant } from "@/types/restaurant";

type RestaurantGridProps = {
  dishes: Dish[];
  restaurants: Restaurant[];
};

export function RestaurantGrid({ dishes, restaurants }: RestaurantGridProps) {
  const { query, results, setQuery } = useSearch(restaurants);
  const { activeFilter, filteredRestaurants, setActiveFilter } = useFilters(results);

  return (
    <section id="restaurants" className="bg-white py-8">
      <Container>
        <div className="mt-7">
          <FilterBar activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </div>

        <div className="mt-8 flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black text-slate-900">Top dining out restaurants near you</h2>
            <p className="mt-1 text-sm text-slate-500">{filteredRestaurants.length} restaurants available in Mumbai</p>
          </div>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} restaurant={restaurant} />
          ))}
        </div>

        <div className="mt-10">
          <h2 className="text-2xl font-black text-slate-900">Popular dishes to start with</h2>
          <p className="mt-1 text-sm text-slate-500">Fresh picks people are pairing with their table bookings.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {dishes.slice(0, 4).map((dish, index) => (
              <article key={`${dish.id}-${index}`} className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
                <div className="relative h-36">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div className="space-y-2 p-4">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-sm font-black text-slate-900">{dish.name}</h3>
                    <Rating value={dish.rating} />
                  </div>
                  <p className="text-xs font-semibold text-slate-500">
                    {dish.cuisine} / {dish.prepTimeMinutes} min
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
