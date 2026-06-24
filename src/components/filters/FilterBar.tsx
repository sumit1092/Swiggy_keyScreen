"use client";

import { filterOptions } from "@/utils/constants";
import { FilterChip } from "@/components/filters/FilterChip";

type FilterBarProps = {
  activeFilter: string;
  onFilterChange: (filter: string) => void;
};

export function FilterBar({ activeFilter, onFilterChange }: FilterBarProps) {
  return (
    <div className="flex gap-3 overflow-x-auto pb-2">
      {filterOptions.map((filter) => (
        <FilterChip
          active={activeFilter === filter}
          key={filter}
          label={filter}
          onClick={() => onFilterChange(filter)}
        />
      ))}
    </div>
  );
}
