import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Container } from "@/components/layout/Container";
import { RestaurantGallery } from "@/components/restaurant/RestaurantGallery";
import { RestaurantInfo } from "@/components/restaurant/RestaurantInfo";
import { RestaurantOffers } from "@/components/restaurant/RestaurantOffers";
import { RestaurantReviews } from "@/components/restaurant/RestaurantReviews";
import { getRestaurantDetails } from "@/services/restaurant.service";

type RestaurantPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: RestaurantPageProps): Promise<Metadata> {
  const { id } = await params;
  const { restaurant } = await getRestaurantDetails(id);

  if (!restaurant) {
    return {
      title: "Restaurant not found",
    };
  }

  return {
    title: `${restaurant.name} | Swiggy Dineout Clone`,
    description: `${restaurant.name} in ${restaurant.location} with dining offers and reservations.`,
  };
}

export default async function RestaurantPage({ params }: RestaurantPageProps) {
  const { id } = await params;
  const { restaurant, dishes } = await getRestaurantDetails(id);

  if (!restaurant) {
    notFound();
  }

  return (
    <div className="bg-[#f7f7fb] py-8">
      <Container className="space-y-8">
        <RestaurantGallery images={restaurant.gallery} name={restaurant.name} />
        <RestaurantInfo restaurant={restaurant} />
        <RestaurantOffers offers={restaurant.offers} />
        <RestaurantReviews reviews={restaurant.reviews} />
        <section className="pb-6">
          <h2 className="text-2xl font-black text-slate-900">Chef picks from the kitchen</h2>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
            {dishes.map((dish, index) => (
              <article className="overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200" key={`${dish.id}-${index}`}>
                <div className="relative h-36 bg-slate-100">
                  <Image
                    src={dish.image}
                    alt={dish.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 50vw, 25vw"
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-sm font-black text-slate-900">{dish.name}</h3>
                  <p className="mt-1 text-xs text-slate-500">{dish.cuisine} / {dish.prepTimeMinutes} min</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Container>
    </div>
  );
}
