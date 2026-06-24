import { DiscoverSectionData } from "@/types/discover";
import { DiscoverCard } from "./DiscoverCard";
import { Container } from "../layout/Container";

interface Props {
  section: DiscoverSectionData;
}

export function DiscoverSection({
  section,
}: Props) {
  return (
    <Container>
    <section className="py-10">
      <h4
        className="
          mb-6
          text-2xl
          font-extrabold
          tracking-tight
          text-slate-900
        "
      >
        {section.title}
      </h4>

      <div
        className="
          grid
          gap-4
          grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        {section.items.map((item) => (
          <DiscoverCard
            key={item.id}
            title={item.title}
          />
        ))}
      </div>
    </section>
    </Container>
  );
}