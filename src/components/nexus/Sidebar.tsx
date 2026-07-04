import { LayoutDashboard, Brain, Users, PhoneCall, ChevronsUpDown, Sparkles } from "lucide-react";
import { useState } from "react";

const nav = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Nexus Knowledge Brain", icon: Brain },
  { label: "CRM Operations Ledger", icon: Users },
  { label: "Telephony Logs", icon: PhoneCall },
];

export function Sidebar() {
  const [open, setOpen] = useState(false);
  return (
    <aside className="hidden md:flex fixed inset-y-0 left-0 w-72 flex-col border-r border-slate-800 bg-[#050b1a]/80 backdrop-blur-xl z-40">
      {/* Brand */}
      <div className="flex items-center gap-2.5 px-6 h-16 border-b border-slate-800">
        <div className="relative h-8 w-8 rounded-md bg-gradient-to-br from-indigo-500 to-emerald-500 grid place-items-center">
          <Sparkles className="h-4 w-4 text-white" />
        </div>
        <div>
          <p className="text-sm font-semibold tracking-tight text-white leading-none">NEXUS AI</p>
          <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500 mt-1">Autonomous OS</p>
        </div>
      </div>

      {/* Tenant switcher */}
      <div className="px-4 pt-4">
        <button
          onClick={() => setOpen((o) => !o)}
          className="group w-full flex items-center gap-3 rounded-lg border border-slate-800 bg-slate-900/50 px-3 py-2.5 hover:border-indigo-500/50 hover:bg-slate-900 transition-all"
        >
          <div className="h-8 w-8 rounded-md bg-gradient-to-br from-slate-700 to-slate-900 grid place-items-center text-xs font-semibold text-white">
            MC
          </div>
          <div className="flex-1 text-left min-w-0">
            <p className="text-xs text-slate-500 leading-none">Tenant</p>
            <p className="text-sm text-white font-medium truncate mt-0.5">The Midnight Cafe</p>
          </div>
          <span className="text-[9px] font-semibold uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
            Active
          </span>
          <ChevronsUpDown className="h-3.5 w-3.5 text-slate-500 group-hover:text-slate-300 transition-colors" />
        </button>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        <p className="px-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-600 mb-2">
          Workspace
        </p>
        {nav.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`group w-full flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-all ${
                item.active
                  ? "bg-indigo-500/10 text-white border border-indigo-500/30"
                  : "text-slate-400 hover:text-white hover:bg-slate-900/60 border border-transparent"
              }`}
            >
              <Icon
                className={`h-4 w-4 transition-transform group-hover:scale-110 ${
                  item.active ? "text-indigo-400" : ""
                }`}
              />
              <span className="font-medium">{item.label}</span>
              {item.active && (
                <span className="ml-auto h-1.5 w-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
              )}
            </button>
          );
        })}
      </nav>

      {/* Node status */}
      <div className="p-4 border-t border-slate-800">
        <div className="flex items-center gap-3 rounded-lg bg-slate-900/60 border border-slate-800 px-3 py-2.5">
          <span className="relative flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-emerald-400 status-dot" />
            <span className="relative rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <div className="flex-1 min-w-0">
            <p className="text-[10px] uppercase tracking-[0.15em] text-slate-500 leading-none">
              System
            </p>
            <p className="text-xs font-semibold text-white mt-1">Nexus Node: Connected</p>
          </div>
          <span className="font-mono text-[10px] text-emerald-400">42ms</span>
        </div>
      </div>
    </aside>
  );
}
