import { createFileRoute } from "@tanstack/react-router";
import { DashboardShell } from "@/components/nexus/DashboardShell";
import { PhoneIncoming, PhoneOutgoing, PhoneMissed } from "lucide-react";

export const Route = createFileRoute("/telephony")({
  component: TelephonyPage,
});

type Call = {
  direction: "in" | "out" | "missed";
  contact: string;
  number: string;
  duration: string;
  outcome: string;
  outcomeTint: string;
  time: string;
};

const calls: Call[] = [
  { direction: "out", contact: "Abhishek Kumar", number: "+91 98765 43210", duration: "3m 42s", outcome: "Payment Promised", outcomeTint: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", time: "04:12" },
  { direction: "out", contact: "Shreya Sharma", number: "+91 87654 32109", duration: "1m 08s", outcome: "Follow Up Scheduled", outcomeTint: "text-amber-400 bg-amber-500/10 border-amber-500/20", time: "03:47" },
  { direction: "in", contact: "Vendor · Milkyway Dairy", number: "+91 90000 11223", duration: "6m 14s", outcome: "Order Confirmed", outcomeTint: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20", time: "02:31" },
  { direction: "missed", contact: "Unknown", number: "+91 99887 66554", duration: "—", outcome: "Missed", outcomeTint: "text-rose-400 bg-rose-500/10 border-rose-500/20", time: "01:12" },
];

const icons = { in: PhoneIncoming, out: PhoneOutgoing, missed: PhoneMissed };
const dirTint = { in: "text-emerald-400", out: "text-indigo-400", missed: "text-rose-400" };

function TelephonyPage() {
  return (
    <DashboardShell eyebrow="Telephony" title="Voice Interaction Logs">
      <div>
        <h2 className="text-2xl font-semibold tracking-tight text-white">Nexus Call Activity</h2>
        <p className="text-sm text-slate-500 mt-1">Every autonomous conversation, transcribed and outcome-tagged.</p>
      </div>

      <section className="rounded-xl border border-slate-800 bg-card overflow-hidden">
        <div className="px-6 py-5 border-b border-slate-800 flex items-center justify-between">
          <div>
            <h3 className="text-sm font-semibold text-white">Recent Calls</h3>
            <p className="text-xs text-slate-500 mt-0.5">Last 24 hours</p>
          </div>
          <span className="font-mono text-[11px] text-slate-500">{calls.length} calls</span>
        </div>
        <div className="divide-y divide-slate-800/60">
          {calls.map((c, i) => {
            const Icon = icons[c.direction];
            return (
              <div key={i} className="px-6 py-4 flex items-center gap-4">
                <div className={`h-9 w-9 rounded-md border border-slate-800 bg-slate-900/60 grid place-items-center ${dirTint[c.direction]}`}>
                  <Icon className="h-4 w-4" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-white truncate">{c.contact}</p>
                  <p className="text-[11px] text-slate-500 font-mono mt-0.5">{c.number} · {c.duration}</p>
                </div>
                <span className={`text-[10px] font-semibold border px-2 py-1 rounded ${c.outcomeTint}`}>
                  {c.outcome}
                </span>
                <span className="font-mono text-[11px] text-slate-500 w-14 text-right">{c.time}</span>
              </div>
            );
          })}
        </div>
      </section>
    </DashboardShell>
  );
}
