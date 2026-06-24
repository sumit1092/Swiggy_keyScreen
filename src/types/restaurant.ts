import type { Offer } from "./offer";

export type Dish = {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  prepTimeMinutes: number;
  caloriesPerServing: number;
};

export type Restaurant = {
  id: string;
  name: string;
  cuisine: string[];
  location: string;
  area: string;
  distance: string;
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  priceForTwo: number;
  offer: string;
  tags: string[];
  bookingLabel: string;
  offers: Offer[];
  reviews: RestaurantReview[];
};

export type RestaurantReview = {
  id: string;
  author: string;
  rating: number;
  comment: string;
};

export type RecipeApiResponse = {
  recipes: RecipeApiItem[];
  total: number;
  skip: number;
  limit: number;
};

export type RecipeApiItem = {
  id: number;
  name: string;
  cuisine: string;
  image: string;
  rating: number;
  reviewCount: number;
  tags: string[];
  prepTimeMinutes: number;
  caloriesPerServing: number;
};
