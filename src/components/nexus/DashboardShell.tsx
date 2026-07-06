import { Search, Bell } from "lucide-react";
import { type ReactNode } from "react";
import { Sidebar } from "@/components/nexus/Sidebar";
import { VapiVoiceButton } from "@/components/nexus/VapiVoiceButton";

export function DashboardShell({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <VapiVoiceButton />
      <Sidebar />
      <main className="md:pl-72">
        <header className="sticky top-0 z-30 h-16 border-b border-slate-800 bg-[#020617]/80 backdrop-blur-xl">
          <div className="h-full px-6 md:px-8 flex items-center gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.18em] text-slate-500">{eyebrow}</p>
              <h1 className="text-sm font-semibold text-white leading-none mt-1">{title}</h1>
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
        <div className="p-6 md:p-8 space-y-8 max-w-[1600px]">{children}</div>
      </main>
    </div>
  );
}
