"use client";

import { useMemo, useState } from "react";
import type { Restaurant } from "@/types/restaurant";

export function useFilters(restaurants: Restaurant[]) {
  const [activeFilter, setActiveFilter] = useState("Book a table");

  const filteredRestaurants = useMemo(() => {
    if (activeFilter === "Book a table") {
      return restaurants;
    }

    if (activeFilter === "Rating 4.0+") {
      return restaurants.filter((restaurant) => restaurant.rating >= 4);
    }

    if (activeFilter === "Within 5 km") {
      return restaurants.filter((restaurant) => Number.parseFloat(restaurant.distance) <= 5);
    }

    if (activeFilter === "Offers") {
      return restaurants.filter((restaurant) => restaurant.offers.length > 0);
    }

    return restaurants.filter((restaurant) => restaurant.tags.includes(activeFilter));
  }, [activeFilter, restaurants]);

  return {
    activeFilter,
    filteredRestaurants,
    setActiveFilter,
  };
}
