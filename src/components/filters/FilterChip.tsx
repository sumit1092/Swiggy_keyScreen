"use client";

type FilterChipProps = {
  active: boolean;
  label: string;
  onClick: () => void;
};

export function FilterChip({ active, label, onClick }: FilterChipProps) {
  return (
    <button
      aria-pressed={active}
      className={
        active
          ? "shrink-0 rounded-3xl bg-slate-900 px-4 py-2 text-sm font-bold text-white"
          : "shrink-0 rounded-3xl border border-slate-200 bg-white px-4 py-2 text-sm font-bold text-slate-700 transition hover:border-slate-300"
      }
      onClick={onClick}
      type="button"
    >
      {label}
    </button>
  );
}
