import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/nexus/DashboardShell";
import { DiagnosticsPane } from "@/components/nexus/DiagnosticsPane";
import { Brain, BookOpen, Database, Zap } from "lucide-react";

export const Route = createFileRoute("/knowledge")({
  component: KnowledgePage,
});

const sources = [
  { name: "Standard Operating Procedures.pdf", size: "2.4 MB", chunks: 128, updated: "2h ago" },
  { name: "Vendor Contracts 2026.docx", size: "890 KB", chunks: 64, updated: "1d ago" },
  { name: "Customer Interaction Playbook.md", size: "42 KB", chunks: 18, updated: "3d ago" },
];

function KnowledgePage() {
  return (
    <DashboardShell eyebrow="Knowledge" title="Nexus Knowledge Brain">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Operational Memory</h2>
        <p className="text-sm text-slate-500 mt-1">
          Every document you feed Nexus becomes retrievable context for autonomous decisions.
        </p>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {[
          { label: "Indexed Chunks", value: "12,482", icon: Database },
          { label: "Vector Dimensions", value: "1,536", icon: Brain },
          { label: "Avg. Retrieval", value: "84 ms", icon: Zap },
        ].map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-xl border border-slate-800 bg-card p-5">
              <div className="flex items-center justify-between">
                <p className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</p>
                <Icon className="h-4 w-4 text-indigo-400" />
              </div>
              <p className="mt-3 text-2xl font-semibold text-white font-mono">{s.value}</p>
            </div>
          );
        })}
      </section>

      <DiagnosticsPane />

      <section className="rounded-xl border border-slate-800 bg-card overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Indexed Sources</h3>
            <p className="text-xs text-slate-500 mt-0.5">Live corpus feeding the Nexus retriever</p>
          </div>
          <span className="font-mono text-[11px] text-slate-500">{sources.length} sources</span>
        </div>
        <div className="divide-y divide-slate-800/60">
          {sources.map((s) => (
            <div key={s.name} className="px-6 py-4 flex items-center gap-4">
              <div className="h-9 w-9 rounded-md bg-indigo-500/10 border border-indigo-500/20 grid place-items-center">
                <BookOpen className="h-4 w-4 text-indigo-400" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">{s.name}</p>
                <p className="text-[11px] text-slate-500 font-mono mt-0.5">
                  {s.size} · {s.chunks} chunks · updated {s.updated}
                </p>
              </div>
              <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded">
                Synced
              </span>
            </div>
          ))}
        </div>
      </section>
    </DashboardShell>
  );
}
