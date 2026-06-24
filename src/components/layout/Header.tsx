"use client"
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/layout/Container";
import { SearchBar } from "../search/SearchBar";

import Location from "../../../public/Location";
import Profile from "../../../public/Profile";
import ChevronDown from "../../../public/ChevronDown";
import Swiggy_logo from "../../../public/Swiggy-logo.png"

export function Header() {
  const [search, setSearch] = useState("");
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white">
  <Container>
    <div className="py-3">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-4 lg:gap-6">

          <Link href="/" className="shrink-0">
            <Image
              src={Swiggy_logo}
              alt="Swiggy"
              width={120}
              height={38}
              priority
              className="h-auto w-[100px] md:w-[120px]"
            />
          </Link>

          <div className="hidden md:flex items-center gap-2">
            <div className="h-8 w-px bg-slate-300" />
            <button className="flex items-center gap-2">
              <Location />
              <span className="max-w-[300px] truncate text-base font-bold text-slate-800">
                Setup your precise location
              </span>
              <ChevronDown />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-4">

          <div className="hidden md:block w-[280px] lg:w-[420px] xl:w-[520px]">
            <SearchBar
              value={search}
              onSearch={setSearch}
            />
          </div>

          <button className="flex items-center justify-center">
            <Profile className="h-11 w-11 md:h-15 md:w-15 text-slate-600" />
          </button>
        </div>
      </div>

      <div className="mt-3 md:hidden">
        <SearchBar
          value={search}
          onSearch={setSearch}
        />
      </div>
    </div>
  </Container>
</header>
  );
}