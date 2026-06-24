import type { Category } from "@/types/category";

export const categories: Category[] = [
  {
    id: "table-booking",
    name: "Table Booking",
    description: "Reserve instantly at top-rated places.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/highlights/book.png",
    gradient: "from-orange-500 to-rose-500",
  },
  {
    id: "deals",
    name: "Best Offers",
    description: "Dineout deals and bank savings.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/dineout/rx-card/OFFER.png",
    gradient: "from-sky-500 to-indigo-500",
  },
  {
    id: "collections",
    name: "Collections",
    description: "Curated places for every plan.",
    image: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/m/seo/DO_collectionBanner.png",
    gradient: "from-emerald-500 to-teal-500",
  },
];
