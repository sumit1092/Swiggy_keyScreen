import Image from "next/image";
import { Container } from "@/components/layout/Container";
import swiggyBanner from "../../../public/SwiggyBanner.png"

export function OfferBanner() {
  return (
    <section className="bg-white">
      <Container>
        <div className="relative overflow-hidden rounded-[40px] mt-10">
          <Image
            src={swiggyBanner}
            alt="Explore Top Dining Out Restaurants"
            width={1600}
            height={100}
            priority
            className="h-[400px] w-full"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/20 to-transparent" />

          <div className="absolute top-32 left-0 inset-0 flex flex-col justify-center px-12 md:px-16">
            <h1
              className="
                max-w-[700px]
                text-[rgb(255,238,229)]
                text-[32px]
                font-extrabold
                leading-[1.3]
                tracking-[-0.03em]
              "
            >
              Explore Top Dining Out <br/>Restaurants in Mumbai
            </h1>
          </div>
        </div>
      </Container>
    </section>
  );
}