import { Badge } from "@/components/ui/Badge";
import type { Offer } from "@/types/offer";

type RestaurantOffersProps = {
  offers: Offer[];
};

export function RestaurantOffers({ offers }: RestaurantOffersProps) {
  return (
    <section id="offers" className="py-6">
      <h2 className="text-2xl font-black text-slate-900">Available offers</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-3">
        {offers.map((offer) => (
          <article className="rounded-lg border border-orange-100 bg-orange-50 p-4" key={offer.id}>
            <Badge tone="orange">{offer.discountLabel}</Badge>
            <h3 className="mt-3 text-lg font-black text-slate-900">{offer.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{offer.description}</p>
            <p className="mt-3 text-sm font-black text-[#d9480f]">Code: {offer.code}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
