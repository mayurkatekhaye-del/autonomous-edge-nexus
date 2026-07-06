import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/nexus/DashboardShell";
import { CRMLedger } from "@/components/nexus/CRMLedger";

export const Route = createFileRoute("/crm")({
  component: CrmPage,
});

function CrmPage() {
  return (
    <DashboardShell eyebrow="Operations" title="CRM Operations Ledger">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Receivables under Nexus</h2>
        <p className="text-sm text-slate-500 mt-1">
          Every account, every rupee — supervised by autonomous risk models.
        </p>
      </div>

      <section className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { label: "Total Outstanding", value: "₹88,400", tint: "text-rose-400" },
          { label: "Recovered (7D)", value: "₹24,120", tint: "text-emerald-400" },
          { label: "Success Rate", value: "78%", tint: "text-indigo-400" },
        ].map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-800 bg-card p-5">
            <p className="text-xs text-slate-500 uppercase tracking-wider">{s.label}</p>
            <p className={`mt-3 text-2xl font-semibold font-mono ${s.tint}`}>{s.value}</p>
          </div>
        ))}
      </section>

      <CRMLedger />
    </DashboardShell>
  );
}
