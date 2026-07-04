import { PhoneCall, CheckCircle2 } from "lucide-react";

type Risk = "critical" | "moderate" | "clear";

const rows: {
  name: string;
  phone: string;
  due: string;
  risk: Risk;
  riskLabel: string;
}[] = [
  { name: "Abhishek Kumar", phone: "+91 98765 43210", due: "₹4,500.00", risk: "critical", riskLabel: "Critical Priority" },
  { name: "Shreya Sharma", phone: "+91 87654 32109", due: "₹1,200.00", risk: "moderate", riskLabel: "Moderate Delay" },
  { name: "Piyush Mishra", phone: "+91 76543 21098", due: "₹0.00", risk: "clear", riskLabel: "Clear Status" },
];

const pill: Record<Risk, string> = {
  critical: "text-rose-300 bg-rose-500/10 border-rose-500/30",
  moderate: "text-amber-300 bg-amber-500/10 border-amber-500/30",
  clear: "text-emerald-300 bg-emerald-500/10 border-emerald-500/30",
};

const dot: Record<Risk, string> = {
  critical: "bg-rose-400",
  moderate: "bg-amber-400",
  clear: "bg-emerald-400",
};

export function CRMLedger() {
  return (
    <section className="rounded-xl border border-slate-800 bg-card overflow-hidden">
      <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
        <div>
          <h3 className="text-sm font-semibold text-white">CRM Operations Ledger</h3>
          <p className="text-xs text-slate-500 mt-0.5">
            Autonomous receivables under Nexus supervision
          </p>
        </div>
        <span className="font-mono text-[11px] text-slate-500">3 accounts · updated 12s ago</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-slate-800 bg-slate-900/40">
              <Th>Customer Name</Th>
              <Th>Contact Number</Th>
              <Th className="text-right">Total Due Amount</Th>
              <Th>AI Risk Matrix Profile</Th>
              <Th className="text-right">Instant Action</Th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r, i) => (
              <tr
                key={r.name}
                className={`border-b border-slate-800/60 hover:bg-slate-900/40 transition-colors ${
                  i === rows.length - 1 ? "border-b-0" : ""
                }`}
              >
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="h-8 w-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-900 border border-slate-700 grid place-items-center text-[10px] font-semibold text-white">
                      {r.name.split(" ").map((s) => s[0]).join("")}
                    </div>
                    <span className="font-medium text-white">{r.name}</span>
                  </div>
                </td>
                <td className="px-6 py-4 font-mono text-slate-400">{r.phone}</td>
                <td className="px-6 py-4 text-right font-mono font-semibold text-white tabular-nums">
                  {r.due}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center gap-1.5 text-[11px] font-medium border px-2.5 py-1 rounded-full ${pill[r.risk]}`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${dot[r.risk]}`} />
                    {r.riskLabel}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-end">
                    {r.risk === "clear" ? (
                      <button
                        disabled
                        className="inline-flex items-center gap-2 rounded-md border border-slate-800 bg-slate-900/60 text-slate-500 px-3 py-2 text-xs font-medium cursor-not-allowed"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5" />
                        No Action Required
                      </button>
                    ) : (
                      <button
                        className={`relative inline-flex items-center gap-2 rounded-md bg-indigo-500 hover:bg-indigo-400 text-white px-3 py-2 text-xs font-semibold transition-all shadow-[0_0_20px_-4px_rgba(99,102,241,0.6)] ${
                          r.risk === "critical" ? "pulse-ring" : ""
                        }`}
                      >
                        <PhoneCall className="h-3.5 w-3.5" />
                        Trigger Nexus Voice Call
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

function Th({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <th className={`px-6 py-3.5 text-left text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-500 ${className}`}>
      {children}
    </th>
  );
}
