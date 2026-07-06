import { createFileRoute } from "@tanstack/react-router";
import { TrendingUp, AlertOctagon, Timer, Activity, Search, Bell } from "lucide-react";
import { Sidebar } from "@/components/nexus/Sidebar";
import { MetricCard } from "@/components/nexus/MetricCard";
import { HealthRing } from "@/components/nexus/HealthRing";
import { DiagnosticsPane } from "@/components/nexus/DiagnosticsPane";
import { CRMLedger } from "@/components/nexus/CRMLedger";
import { VapiVoiceButton } from "@/components/nexus/VapiVoiceButton";

export const Route = createFileRoute("/")({
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Sidebar />

      <main className="md:pl-72">
        {/* Top bar */}
        <header className="sticky top-0 z-30 h-16 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-xl">
          <div className="h-full px-6 md:px-8 flex items-center gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">Overview</p>
              <h1 className="text-sm font-semibold text-white leading-none mt-1">
                Dashboard · Friday, 4 July 2026
              </h1>
            </div>
            <div className="ml-auto flex items-center gap-3">
              <div className="hidden md:flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 px-3 py-1.5 text-xs text-slate-500 w-64">
                <Search className="h-3.5 w-3.5" />
                <span>Ask Nexus anything…</span>
                <span className="ml-auto font-mono text-[10px] text-slate-600 border border-slate-800 rounded px-1">
                  ⌘K
                </span>
              </div>
              <button className="relative h-9 w-9 rounded-md border border-slate-800 bg-slate-900/60 grid place-items-center text-slate-400 hover:text-white hover:border-indigo-500/50 transition-all">
                <Bell className="h-4 w-4" />
                <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-rose-400" />
              </button>
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-indigo-500 to-emerald-500 grid place-items-center text-xs font-semibold text-white">
                AV
              </div>
            </div>
          </div>
        </header>

        <div className="p-6 md:p-8 space-y-8 max-w-[1600px]">
          {/* Section header */}
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-white">
                Good evening, Aarav
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                Nexus has processed 1,284 signals and flagged 2 priority actions since your last visit.
              </p>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <span className="rounded-md border border-slate-800 bg-slate-900/60 px-2.5 py-1.5 text-slate-400 font-mono">
                Today
              </span>
              <span className="rounded-md border border-transparent hover:border-slate-800 px-2.5 py-1.5 text-slate-500 font-mono cursor-pointer">
                7D
              </span>
              <span className="rounded-md border border-transparent hover:border-slate-800 px-2.5 py-1.5 text-slate-500 font-mono cursor-pointer">
                30D
              </span>
            </div>
          </div>

          {/* Metrics */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
            <MetricCard
              label="Daily Gross Revenue"
              value="₹42,500"
              icon={TrendingUp}
              tint="emerald"
              sublabel={
                <span className="inline-flex items-center gap-1 text-emerald-400 font-medium">
                  <TrendingUp className="h-3 w-3" />
                  +14.2% daily surge
                </span>
              }
            />
            <MetricCard
              label="Outstanding Liabilities (Udhari)"
              value="₹88,400"
              icon={AlertOctagon}
              tint="crimson"
              sublabel={
                <span className="inline-flex items-center gap-1 text-rose-400 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
                  High-risk exposure flagged
                </span>
              }
            />
            <MetricCard
              label="Operational Runway"
              value="92 Days"
              icon={Timer}
              tint="indigo"
              sublabel={
                <span className="inline-flex items-center gap-1 text-slate-400 font-medium">
                  <span className="h-1.5 w-1.5 rounded-full bg-slate-400" />
                  Stable margin indicator
                </span>
              }
            />
            <MetricCard label="AI Business Health Index" icon={Activity} tint="amber">
              <HealthRing value={84} />
            </MetricCard>
          </section>

          {/* Diagnostics */}
          <DiagnosticsPane />

          {/* Ledger */}
          <CRMLedger />

          <footer className="pt-4 pb-2 flex items-center justify-between text-[11px] text-slate-600 font-mono">
            <span>© 2026 NEXUS AI · Autonomous Business Employee</span>
            <span>v1.4.2 · Node uptime 99.98%</span>
          </footer>
        </div>
      </main>
    </div>
  );
}
