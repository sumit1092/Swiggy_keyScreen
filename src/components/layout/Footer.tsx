import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/layout/Container";
import swiggy from "../../../public/Swiggy-logo.png"
import app_store from "../../../public/app_store.png"
import play_store from "../../../public/play_store.png"
import { APP_STORE_URL, PLAY_STORE_URL } from "@/utils/constants";
import { companyLinks, contactLinks, legalLinks, cities, lifeAtSwiggy } from "@/utils/constants";

export function Footer() {
  return (
    <footer className="mt-20 bg-[#f0f0f5]">
      <Container className="py-16">

        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-5 xl:gap-x-12">
          <div>
            <Image
              src={swiggy}
              alt="Swiggy"
              width={170}
              height={54}
              className="h-auto w-[170px]"
            />

            <p className="mt-3 text-[16px] text-slate-500">
              © 2026 Swiggy Limited
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-semibold text-slate-900">
              Company
            </h3>

            <ul className="space-y-3">
              {companyLinks.map((item) => (
                <li key={item}>
                  <button className="text-[16px] text-slate-600 transition hover:text-slate-900">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-semibold text-slate-900">
              Contact us
            </h3>

            <ul className="space-y-3">
              {contactLinks.map((item) => (
                <li key={item}>
                  <button className="text-[16px] text-slate-600 transition hover:text-slate-900">
                    {item}
                  </button>
                </li>
              ))}
            </ul>

            <h3 className="mb-5 mt-10 text-[18px] font-semibold text-slate-900">
              Legal
            </h3>

            <ul className="space-y-3">
              {legalLinks.map((item) => (
                <li key={item}>
                  <button className="text-[16px] text-slate-600 transition hover:text-slate-900">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-semibold text-slate-900">
              Available in:
            </h3>

            <ul className="space-y-3">
              {cities.map((city) => (
                <li
                  key={city}
                  className="text-[16px] text-slate-600"
                >
                  {city}
                </li>
              ))}
            </ul>

            <select
              className="
                mt-6
                h-11
                w-[160px]
                rounded-xl
                border
                border-slate-300
                bg-transparent
                px-4
                text-[15px]
                text-slate-700
                outline-none
              "
            >
              <option>47 cities</option>
            </select>
          </div>

          <div>
            <h3 className="mb-5 text-[18px] font-semibold text-slate-900">
              Life at Swiggy
            </h3>

            <ul className="space-y-3">
              {lifeAtSwiggy.map((item) => (
                <li key={item}>
                  <button className="text-[16px] text-slate-600 transition hover:text-slate-900">
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="my-12 h-px bg-slate-300" />

        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">

          <h3 className="text-center text-[22px] font-semibold text-slate-800 lg:text-left">
            For better experience, download the Swiggy app now
          </h3>

          <div className="flex items-center gap-4">
            <Link
              href={PLAY_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={play_store}
                alt="Google Play"
                className="h-14 w-auto object-contain"
              />
            </Link>

            <Link
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={app_store}
                alt="App Store"
                className="h-14 w-auto object-contain"
              />
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}