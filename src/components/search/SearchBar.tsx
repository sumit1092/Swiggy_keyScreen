"use client";

import { Search } from "lucide-react";

type SearchBarProps = {
  value: string;
  onSearch: (value: string) => void;
};

export function SearchBar({
  value,
  onSearch,
}: SearchBarProps) {
  return (
    <div className="relative w-full">
      <input
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search for restaurant and food"
        className="
          h-14
          w-full
          rounded-2xl
          bg-[#eaecf1]
          px-5
          pr-12
          text-base
          text-slate-700
          outline-none
          transition-all
          placeholder:text-slate-500
          placeholder:font-semibold
          focus:border-slate-300
          focus:bg-white
        "
      />

      <Search
        size={20}
        className="
          absolute
          right-4
          top-1/2
          -translate-y-1/2
          text-slate-500
        "
      />
    </div>
  );
}