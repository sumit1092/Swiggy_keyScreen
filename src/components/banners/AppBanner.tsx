import Image from "next/image";
import getAppBanner from "../../../public/get_appBanner.png"

export function AppBanner() {
  return (
    <section className="bg-white">
        <div className="">
          <Image
            src={getAppBanner}
            alt="Explore Top Dining Out Restaurants"
            width={1600}
            height={100}
            priority
            className="h-[300px] w-full"
          />
        </div>
    </section>
  );
}