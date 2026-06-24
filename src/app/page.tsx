import { OfferBanner } from "@/components/banners/OfferBanner";
import { RestaurantGrid } from "@/components/restaurant/RestaurantGrid";
import { getDishes, getRestaurants } from "@/services/restaurant.service";
import { discoverSections } from "@/utils/constants";
import { DiscoverSection } from "@/components/discover/DiscoverSection";
import { AppBanner } from "@/components/banners/AppBanner";

export default async function HomePage() {
  const [dishes, restaurants] = await Promise.all([getDishes(), getRestaurants()]);

  return (
    <div className="bg-white">
      <OfferBanner />
      <RestaurantGrid dishes={dishes} restaurants={restaurants} />
      <AppBanner />
  {discoverSections.map((section) => (
    <DiscoverSection
      key={section.id}
      section={section}
    />
  ))}
    </div>
  );
}
