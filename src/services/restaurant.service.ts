import { restaurants } from "@/data/restaurants";
import type { Dish, Restaurant } from "@/types/restaurant";

const fallbackDishes: Dish[] = [
  {
    caloriesPerServing: 300,
    cuisine: "Italian",
    id: 1,
    image: "https://cdn.dummyjson.com/recipe-images/1.webp",
    name: "Classic Margherita Pizza",
    prepTimeMinutes: 20,
    rating: 4.6,
    reviewCount: 98,
    tags: ["Pizza", "Dinner"],
  },
  {
    caloriesPerServing: 250,
    cuisine: "Asian",
    id: 2,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    name: "Vegetarian Stir-Fry",
    prepTimeMinutes: 15,
    rating: 4.4,
    reviewCount: 74,
    tags: ["Vegetarian", "Quick"],
  },
  {
    caloriesPerServing: 180,
    cuisine: "American",
    id: 3,
    image: "https://cdn.dummyjson.com/recipe-images/3.webp",
    name: "Chocolate Chip Cookies",
    prepTimeMinutes: 10,
    rating: 4.8,
    reviewCount: 128,
    tags: ["Dessert", "Snack"],
  },
  {
    caloriesPerServing: 250,
    cuisine: "Asian",
    id: 2,
    image: "https://cdn.dummyjson.com/recipe-images/2.webp",
    name: "Vegetarian Stir-Fry",
    prepTimeMinutes: 15,
    rating: 4.4,
    reviewCount: 74,
    tags: ["Vegetarian", "Quick"],
  }
];

export async function getRestaurants(): Promise<Restaurant[]> {
  return restaurants;
}

export async function getDishes(): Promise<Dish[]> {
  return fallbackDishes;
}

export async function getRestaurantDetails(id: string) {
  const restaurant = restaurants.find((item) => item.id === id);
  const dishes = await getDishes();

  return {
    dishes: dishes.slice(0, 4),
    restaurant,
  };
}
