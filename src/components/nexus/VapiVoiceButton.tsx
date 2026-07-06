import { useEffect, useRef, useState } from "react";
import { Mic, PhoneOff, Loader2 } from "lucide-react";
import Vapi from "@vapi-ai/web";

const PUBLIC_KEY = "5636c4fb-627d-47e7-a61e-ec15f064b7dc";
const ASSISTANT_ID = "72c0f3b4-4297-4e89-9ac8-e8eb798e9367";

type Status = "idle" | "connecting" | "connected" | "listening";

export function VapiVoiceButton() {
  const vapiRef = useRef<Vapi | null>(null);
  const [status, setStatus] = useState<Status>("idle");
  const [volume, setVolume] = useState(0);

  useEffect(() => {
    const vapi = new Vapi(PUBLIC_KEY);
    vapiRef.current = vapi;

    vapi.on("call-start", () => setStatus("connected"));
    vapi.on("call-end", () => {
      setStatus("idle");
      setVolume(0);
    });
    vapi.on("speech-start", () => setStatus("listening"));
    vapi.on("speech-end", () => setStatus("connected"));
    vapi.on("volume-level", (v: number) => setVolume(v));
    vapi.on("error", (e: unknown) => {
      console.error("Vapi error:", e);
      setStatus("idle");
    });

    return () => {
      try {
        vapi.stop();
      } catch {
        /* noop */
      }
    };
  }, []);

  const active = status !== "idle";

  const toggle = async () => {
    const vapi = vapiRef.current;
    if (!vapi) return;
    if (active) {
      vapi.stop();
      return;
    }
    try {
      setStatus("connecting");
      await vapi.start(ASSISTANT_ID);
    } catch (e) {
      console.error(e);
      setStatus("idle");
    }
  };

  const label =
    status === "connecting"
      ? "Connecting…"
      : status === "listening"
        ? "Listening…"
        : status === "connected"
          ? "Connected · Tap to end"
          : "Talk to Nexus";

  const ringScale = 1 + Math.min(volume, 1) * 0.5;

  return (
    <div className="fixed bottom-5 right-5 md:bottom-8 md:right-8 z-50 flex flex-col items-end gap-2">
      <div
        className={`hidden sm:flex items-center gap-2 rounded-full border border-slate-800 bg-[#0b1220]/90 backdrop-blur px-3 py-1.5 text-xs font-medium transition-opacity ${
          active ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <span
          className={`h-1.5 w-1.5 rounded-full ${
            status === "listening"
              ? "bg-emerald-400 animate-pulse"
              : status === "connecting"
                ? "bg-amber-400 animate-pulse"
                : "bg-indigo-400"
          }`}
        />
        <span className="text-slate-200">{label}</span>
      </div>

      <button
        onClick={toggle}
        aria-label={label}
        className={`relative h-14 w-14 md:h-16 md:w-16 rounded-full grid place-items-center text-white transition-all duration-300 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400 ${
          active
            ? "bg-gradient-to-br from-rose-500 to-rose-600 shadow-[0_10px_40px_-8px_rgba(244,63,94,0.6)]"
            : "bg-gradient-to-br from-indigo-500 to-emerald-500 shadow-[0_10px_40px_-8px_rgba(99,102,241,0.7)] hover:scale-105"
        }`}
      >
        {active && (
          <span
            className="absolute inset-0 rounded-full bg-rose-400/30 transition-transform duration-150"
            style={{ transform: `scale(${ringScale})` }}
          />
        )}
        {!active && (
          <span className="absolute inset-0 rounded-full bg-indigo-400/20 animate-ping" />
        )}
        <span className="relative">
          {status === "connecting" ? (
            <Loader2 className="h-6 w-6 md:h-7 md:w-7 animate-spin" />
          ) : active ? (
            <PhoneOff className="h-6 w-6 md:h-7 md:w-7" />
          ) : (
            <Mic className="h-6 w-6 md:h-7 md:w-7" />
          )}
        </span>
      </button>
    </div>
  );
}
