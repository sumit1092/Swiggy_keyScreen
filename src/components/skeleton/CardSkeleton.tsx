export function CardSkeleton() {
  return (
    <div className="animate-pulse overflow-hidden rounded-lg bg-white shadow-sm ring-1 ring-slate-200">
      <div className="h-52 bg-slate-200" />
      <div className="space-y-3 p-4">
        <div className="h-4 w-2/3 rounded bg-slate-200" />
        <div className="h-3 w-full rounded bg-slate-100" />
        <div className="h-8 w-1/2 rounded bg-slate-100" />
      </div>
    </div>
  );
}
