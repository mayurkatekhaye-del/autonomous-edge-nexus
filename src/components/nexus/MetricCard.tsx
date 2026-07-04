import type { LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

type Tint = "indigo" | "crimson" | "emerald" | "amber";

const tintMap: Record<Tint, { bar: string; icon: string; glow: string }> = {
  indigo: { bar: "from-indigo-500 to-indigo-300", icon: "text-indigo-400 bg-indigo-500/10", glow: "glow-indigo" },
  crimson: { bar: "from-rose-500 to-rose-300", icon: "text-rose-400 bg-rose-500/10", glow: "glow-crimson" },
  emerald: { bar: "from-emerald-500 to-emerald-300", icon: "text-emerald-400 bg-emerald-500/10", glow: "glow-emerald" },
  amber: { bar: "from-amber-500 to-amber-300", icon: "text-amber-400 bg-amber-500/10", glow: "glow-amber" },
};

export function MetricCard({
  label,
  value,
  sublabel,
  icon: Icon,
  tint = "indigo",
  children,
}: {
  label: string;
  value?: string;
  sublabel?: ReactNode;
  icon?: LucideIcon;
  tint?: Tint;
  children?: ReactNode;
}) {
  const t = tintMap[tint];
  return (
    <div className={`relative overflow-hidden rounded-xl border border-slate-800 bg-card p-6 ${t.glow} transition-transform hover:-translate-y-0.5`}>
      <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${t.bar} opacity-70`} />
      <div className="flex items-start justify-between">
        <p className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">{label}</p>
        {Icon && (
          <div className={`h-8 w-8 rounded-md grid place-items-center ${t.icon}`}>
            <Icon className="h-4 w-4" />
          </div>
        )}
      </div>
      {children ? (
        <div className="mt-4">{children}</div>
      ) : (
        <>
          <p className="mt-5 font-mono text-3xl font-semibold tracking-tight text-white tabular-nums">
            {value}
          </p>
          {sublabel && <div className="mt-2 text-xs">{sublabel}</div>}
        </>
      )}
    </div>
  );
}
