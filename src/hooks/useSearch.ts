"use client";

import { useMemo, useState } from "react";
import type { Restaurant } from "@/types/restaurant";

export function useSearch(restaurants: Restaurant[]) {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    const searchTerm = query.trim().toLowerCase();

    if (!searchTerm) {
      return restaurants;
    }

    return restaurants.filter((restaurant) => {
      const searchableText = [
        restaurant.name,
        restaurant.location,
        restaurant.area,
        ...restaurant.cuisine,
        ...restaurant.tags,
      ]
        .join(" ")
        .toLowerCase();

      return searchableText.includes(searchTerm);
    });
  }, [query, restaurants]);

  return {
    query,
    results,
    setQuery,
  };
}
