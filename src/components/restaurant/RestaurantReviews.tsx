import { Rating } from "@/components/ui/Rating";
import type { RestaurantReview } from "@/types/restaurant";

type RestaurantReviewsProps = {
  reviews: RestaurantReview[];
};

export function RestaurantReviews({ reviews }: RestaurantReviewsProps) {
  return (
    <section className="py-6">
      <h2 className="text-2xl font-black text-slate-900">Guest reviews</h2>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {reviews.map((review) => (
          <article className="rounded-lg border border-slate-200 bg-white p-4 shadow-sm" key={review.id}>
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-black text-slate-900">{review.author}</h3>
              <Rating value={review.rating} />
            </div>
            <p className="mt-3 text-sm leading-6 text-slate-600">{review.comment}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
