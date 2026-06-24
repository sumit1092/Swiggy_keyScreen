import Image from "next/image";

type RestaurantGalleryProps = {
  images: string[];
  name: string;
};

export function RestaurantGallery({ images, name }: RestaurantGalleryProps) {
  return (
    <div className="grid gap-3 md:grid-cols-[1.5fr_1fr]">
      <div className="relative h-72 overflow-hidden rounded-lg bg-slate-100 md:h-96">
        <Image src={images[0]} alt={name} fill priority className="object-cover" sizes="(max-width: 768px) 100vw, 66vw" />
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-1">
        {images.slice(1, 3).map((image, index) => (
          <div className="relative h-36 overflow-hidden rounded-lg bg-slate-100 md:h-[11.625rem]" key={image}>
            <Image src={image} alt={`${name} gallery ${index + 2}`} fill className="object-cover" sizes="(max-width: 768px) 50vw, 33vw" />
          </div>
        ))}
      </div>
    </div>
  );
}
