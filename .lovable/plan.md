# NEXUS AI — Dashboard Workspace Plan

Build a premium, minimal enterprise dashboard as the app's home route. Deep space palette (#020617 bg, slate-800 borders, white text, indigo + emerald accents). Note: stack is TanStack Start + Tailwind v4 + Lucide (not Next.js 15 as mentioned) — I'll use the actual stack while matching the requested look exactly.

## Files

- **`src/styles.css`** — Replace design tokens with deep-space palette (background `#020617`, card `#0b1220`, border `slate-800`, primary indigo glow, accent emerald). Add a `--shadow-glow` and gradient tokens.
- **`src/routes/__root.tsx`** — Update head metadata: title "NEXUS AI — The Autonomous Business Employee", matching description, og/twitter tags. Add Inter + JetBrains Mono via `<link>` in head.
- **`src/components/nexus/Sidebar.tsx`** — Fixed left sidebar: tenant switcher ("The Midnight Cafe (Active)"), nav (Dashboard, Nexus Knowledge Brain, CRM Operations Ledger, Telephony Logs) with hover micro-interactions and active state, bottom status row with pulsing green dot "Nexus Node: Connected".
- **`src/components/nexus/MetricCard.tsx`** — Reusable glowing bordered card (title, value, delta/subtext, icon, tint variant).
- **`src/components/nexus/HealthRing.tsx`** — SVG circular progress rendering 84/100 with indigo→emerald gradient stroke and center label.
- **`src/components/nexus/DiagnosticsPane.tsx`** — Split container:
  - Left: drag-and-drop RAG upload zone (dashed slate border, hover indigo glow, file input, supported formats hint).
  - Right: "Autonomous Diagnostics Log" with 2 alert cards (amber low-stock, crimson collection priority) each with icon, title, body, timestamp.
- **`src/components/nexus/CRMLedger.tsx`** — Table with headers Customer Name / Contact Number / Total Due Amount / AI Risk Matrix Profile / Instant Action. 3 rows as specified. Risk pill variants (crimson/amber/emerald). Action button: indigo with pulse-glow for active, slate disabled for clear.
- **`src/routes/index.tsx`** — Compose page: `<Sidebar />` + main scrollable area with header ("Overview" + date/user), 4-column metric row (responsive: 1/2/4 cols), diagnostics split pane, CRM ledger section. Uses `p-6` to `p-8` padding.

## Design details

- Metric cards: `bg-card` with `border border-slate-800`, top gradient hairline in variant color, soft outer glow (`shadow-[0_0_40px_-12px_rgba(99,102,241,0.35)]`), value in large tabular-nums.
- Delta indicators: emerald `+14.2%` with up-arrow, crimson "High-risk" flag, muted "Stable".
- Health ring: 160px SVG, stroke-linecap round, animated stroke-dashoffset on mount.
- Pulse-glow button: custom `@utility` in styles.css using `animate-pulse` on a blurred indigo backdrop element.
- Typography: Inter for UI, JetBrains Mono for numeric values.
- Fully responsive: sidebar collapses to icon rail under `md`, metric grid 1→2→4, table becomes horizontally scrollable on mobile.

## Out of scope

Static UI only — no backend, no actual file processing, no real telephony. Buttons are decorative.