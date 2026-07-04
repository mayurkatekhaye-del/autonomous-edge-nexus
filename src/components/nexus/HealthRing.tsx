export function HealthRing({ value = 84 }: { value?: number }) {
  const size = 96;
  const stroke = 8;
  const r = (size - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (value / 100) * c;

  return (
    <div className="flex items-center gap-4">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} className="-rotate-90">
          <defs>
            <linearGradient id="healthGrad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366f1" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <circle cx={size / 2} cy={size / 2} r={r} stroke="#1e293b" strokeWidth={stroke} fill="none" />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={r}
            stroke="url(#healthGrad)"
            strokeWidth={stroke}
            fill="none"
            strokeLinecap="round"
            strokeDasharray={c}
            strokeDashoffset={offset}
            style={{ transition: "stroke-dashoffset 1.2s ease-out" }}
          />
        </svg>
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <p className="font-mono text-lg font-semibold text-white leading-none">{value}</p>
            <p className="text-[9px] uppercase tracking-wider text-slate-500 mt-0.5">/ 100</p>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <p className="text-xs text-emerald-400 font-medium">Optimal performance</p>
        <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">
          Cashflow, inventory, and customer velocity trending above baseline.
        </p>
      </div>
    </div>
  );
}
