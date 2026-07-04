import { UploadCloud, FileText, AlertTriangle, ShieldAlert, Sparkles } from "lucide-react";
import { useRef, useState } from "react";

export function DiagnosticsPane() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const names = Array.from(e.dataTransfer.files).map((f) => f.name);
    setFiles((prev) => [...names, ...prev].slice(0, 4));
  };

  return (
    <section className="grid lg:grid-cols-5 gap-6">
      {/* RAG upload */}
      <div className="lg:col-span-2 rounded-xl border border-slate-800 bg-card p-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-sm font-semibold text-white">Context Training (RAG)</h3>
            <p className="text-xs text-slate-500 mt-0.5">Feed Nexus with your operational memory</p>
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-1 rounded">
            Multi-format
          </span>
        </div>

        <div
          onDragOver={(e) => {
            e.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={onDrop}
          onClick={() => inputRef.current?.click()}
          className={`relative cursor-pointer rounded-lg border-2 border-dashed p-8 text-center transition-all ${
            dragging
              ? "border-indigo-500 bg-indigo-500/5"
              : "border-slate-800 hover:border-indigo-500/50 hover:bg-slate-900/40"
          }`}
        >
          <input
            ref={inputRef}
            type="file"
            multiple
            className="hidden"
            onChange={(e) => {
              const names = Array.from(e.target.files ?? []).map((f) => f.name);
              setFiles((prev) => [...names, ...prev].slice(0, 4));
            }}
          />
          <div className="mx-auto h-12 w-12 rounded-lg bg-indigo-500/10 border border-indigo-500/20 grid place-items-center">
            <UploadCloud className="h-6 w-6 text-indigo-400" />
          </div>
          <p className="mt-4 text-sm font-medium text-white">
            Drop files or <span className="text-indigo-400">browse</span>
          </p>
          <p className="mt-1 text-[11px] text-slate-500">PDF · DOCX · CSV · XLSX · TXT · MD — up to 50MB</p>
        </div>

        <div className="mt-4 space-y-1.5">
          {files.length === 0 ? (
            <div className="flex items-center gap-2 text-[11px] text-slate-600">
              <Sparkles className="h-3 w-3" />
              <span>3 sources indexed · Last sync 2h ago</span>
            </div>
          ) : (
            files.map((name, i) => (
              <div
                key={i}
                className="flex items-center gap-2 text-xs text-slate-300 bg-slate-900/60 border border-slate-800 rounded px-2.5 py-1.5"
              >
                <FileText className="h-3.5 w-3.5 text-indigo-400" />
                <span className="truncate flex-1">{name}</span>
                <span className="text-[10px] text-emerald-400 font-mono">Queued</span>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Diagnostics log */}
      <div className="lg:col-span-3 rounded-xl border border-slate-800 bg-card p-6">
        <div className="flex items-center justify-between mb-5">
          <div>
            <h3 className="text-sm font-semibold text-white">Autonomous Diagnostics Log</h3>
            <p className="text-xs text-slate-500 mt-0.5">Real-time predictive alerts from Nexus core</p>
          </div>
          <span className="flex items-center gap-1.5 text-[10px] font-medium text-emerald-400">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 status-dot" />
            LIVE
          </span>
        </div>

        <div className="space-y-3">
          {/* Alert A */}
          <div className="group relative rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 hover:border-amber-500/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 shrink-0 rounded-md bg-amber-500/15 border border-amber-500/30 grid place-items-center">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-amber-400">
                    Low Stock Danger
                  </span>
                  <span className="text-[10px] text-slate-600 font-mono">· 04:12 UTC</span>
                </div>
                <p className="mt-1.5 text-sm text-white font-medium leading-snug">
                  Predictive threshold alert
                </p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Dairy reserves will deplete in 48 hours based on historic Friday footfall models.
                </p>
              </div>
            </div>
          </div>

          {/* Alert B */}
          <div className="group relative rounded-lg border border-rose-500/20 bg-rose-500/5 p-4 hover:border-rose-500/40 transition-colors">
            <div className="flex items-start gap-3">
              <div className="h-9 w-9 shrink-0 rounded-md bg-rose-500/15 border border-rose-500/30 grid place-items-center">
                <ShieldAlert className="h-4 w-4 text-rose-400" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-rose-400">
                    Collection Priority
                  </span>
                  <span className="text-[10px] text-slate-600 font-mono">· 03:47 UTC</span>
                </div>
                <p className="mt-1.5 text-sm text-white font-medium leading-snug">
                  High-risk account alert
                </p>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Customer Abhishek Kumar holds an overdue balance of ₹4,500 with no account activity for 30 days.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
