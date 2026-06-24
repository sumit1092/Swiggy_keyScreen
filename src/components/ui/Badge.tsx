import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  tone?: "orange" | "green" | "slate";
};

const tones = {
  green: "bg-green-50 text-green-700 ring-green-100",
  orange: "bg-orange-50 text-[#d9480f] ring-orange-100",
  slate: "bg-slate-100 text-slate-700 ring-slate-200",
};

export function Badge({ children, tone = "slate" }: BadgeProps) {
  return (
    <span className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ring-1 ${tones[tone]}`}>
      {children}
    </span>
  );
}
