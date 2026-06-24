import { DiscoverSectionData } from "@/types/discover";

export const filterOptions = [
  "Book a table",
  "Pure Veg",
  "Within 5 km",
  "Rating 4.0+",
  "Buffet",
  "Outdoor seating",
  "Offers",
  "Family dining",
];

export function formatCurrency(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    currency: "INR",
    maximumFractionDigits: 0,
    style: "currency",
  }).format(amount);
}

export function getRatingColor(rating: number) {
  if (rating >= 4.5) {
    return "bg-emerald-600 text-white";
  }

  if (rating >= 4) {
    return "bg-green-600 text-white";
  }

  return "bg-amber-500 text-white";
}

export const PLAY_STORE_URL = "https://play.google.com/store/apps/details?id=in.swiggy.android&hl=en_IN"
export const APP_STORE_URL = "https://apps.apple.com/in/app/swiggy-food-instamart-dineout/id989540920"

export const swiggyImages = {
  pancakes: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1700640440/2d885496b906c0f412df9fe60697f8e1.jpg",
  crayCraft: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1667558840/adhjskkxymqcpw1jbluy.jpg",
  era: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/1/19/334fca90-e84c-48a8-b0bf-2b2708237e8c_image20359fc6ce557b416d902e2fd77d31cf85.JPG",
  foodQuarter: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/12/13/a00b8df9-fa8b-4ac8-af28-e325abcdc90e_image03118faa6c41f41ca9762eed7ecec71e8.JPG",
  greyCravings: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2026/3/18/35870c2a-8ce6-42c1-8ab2-84ae167dfbf4_image032a4b9fb59054aa5923983482c68c2f0.JPG",
  gurukripa: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/v1671395547/8f3975bdb5ae0f24af3faa933c712b48.jpg",
  uttamDaDhaba: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/DINEOUT_ALL_RESTAURANTS/IMAGES/RESTAURANT_IMAGE_SERVICE/2025/1/20/04a3913e-b5f6-45df-bbe5-d481417c3062_23783UttamDaDhaba04d9062c8891174c98a4ce57ba704d84a3.JPG",
};

export const discoverSections: DiscoverSectionData[] = [
  {
    id: "cuisine",
    title: "Top Dining Out Cuisine Restaurants Near Me",
    items: [
      { id: "1", title: "African Restaurants near me" },
      { id: "2", title: "American Restaurants near me" },
      { id: "3", title: "Arabian Restaurants near me" },
      { id: "4", title: "Asian Restaurants near me" },
      { id: "5", title: "Awadhi Restaurants near me" },
      { id: "6", title: "Bakery Restaurants near me" },
      { id: "7", title: "Bar Food Restaurants near me" },
      { id: "8", title: "Bengali Restaurants near me" },
      { id: "9", title: "Beverages Restaurants near me" },
      { id: "10", title: "Biryani Restaurants near me" },
      { id: "11", title: "Burmese Restaurants near me" },
    ],
  },
  {
    id: "collections",
    title: "Top Dining Restaurant Collections Near me",
    items: [
      { id: "1", title: "5 Star Restaurants near me" },
      { id: "2", title: "Air Conditioned Restaurants near me" },
      { id: "3", title: "Best Bars Restaurants near me" },
      { id: "4", title: "Brewery Restaurants near me" },
      { id: "5", title: "Brunch Restaurants near me" },
      { id: "6", title: "Buffet Restaurants near me" },
      { id: "7", title: "Cricket Live Screening Restaurants near me" },
      { id: "8", title: "Dance Floor Restaurants near me" },
      { id: "9", title: "Date Night Restaurants near me" },
      { id: "10", title: "Casual Dining Restaurants near me" },
      { id: "11", title: "DJ Feature Restaurants near me" },
    ],
  },
];