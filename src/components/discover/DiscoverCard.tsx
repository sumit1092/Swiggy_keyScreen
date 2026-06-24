interface DiscoverCardProps {
  title: string;
}

export function DiscoverCard({
  title,
}: DiscoverCardProps) {
  return (
    <button
      className="
        flex
        min-h-[72px]
        items-center
        justify-center
        rounded-2xl
        border
        border-slate-200
        bg-white
        px-6
        text-center
        text-base
        font-extrabold
        text-slate-700
        transition-all
        hover:border-slate-300
        hover:shadow-sm
      "
    >
      {title}
    </button>
  );
}