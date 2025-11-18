import React from 'react'

export default function FX() {
  return (
    <>
      {/* Rotating conic halo */}
      <div className="pointer-events-none fixed -z-10 inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-20%] h-[120vmin] w-[120vmin] -translate-x-1/2 rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.0),rgba(56,189,248,0.12),rgba(168,85,247,0.12),rgba(56,189,248,0.0))] blur-3xl animate-spin-slower" />
      </div>

      {/* Aurora beams */}
      <div className="pointer-events-none fixed -z-10 inset-0">
        <div className="absolute -top-1/3 left-[-10%] h-[80vmin] w-[50vmin] rotate-12 bg-gradient-to-b from-sky-300/15 via-fuchsia-300/10 to-transparent blur-3xl animate-aurora" />
        <div className="absolute top-[-10%] right-[-10%] h-[70vmin] w-[50vmin] -rotate-12 bg-gradient-to-b from-blue-400/15 via-violet-300/10 to-transparent blur-3xl animate-aurora-delayed" />
      </div>

      {/* Floating glass blobs */}
      <div className="pointer-events-none fixed -z-10 inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[20%] h-64 w-64 rounded-full bg-white/6 backdrop-blur-xl border border-white/10 animate-blob" />
        <div className="absolute right-[12%] top-[35%] h-52 w-52 rounded-[40%] bg-sky-300/10 backdrop-blur-xl border border-sky-200/30 animate-blob-delayed" />
        <div className="absolute left-[25%] bottom-[12%] h-72 w-72 rounded-[45%] bg-violet-300/10 backdrop-blur-xl border border-violet-200/20 animate-blob-2" />
      </div>

      {/* Subtle dot grid */}
      <div className="pointer-events-none fixed -z-20 inset-0 opacity-[0.18] mix-blend-screen" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[length:24px_24px]" />
      </div>

      {/* Grain overlay - encoded data URI to avoid JSX parsing issues */}
      <div className="pointer-events-none fixed -z-10 inset-0 opacity-[0.08] mix-blend-overlay bg-[url(\"data:image/svg+xml;utf8,%3Csvg%20xmlns='http://www.w3.org/2000/svg'%20viewBox='0%200%20100%20100'%3E%3Cfilter%20id='n'%3E%3CfeTurbulence%20type='fractalNoise'%20baseFrequency='0.65'%20numOctaves='2'%20stitchTiles='stitch'/%3E%3C/filter%3E%3Crect%20width='100%25'%20height='100%25'%20filter='url(%23n)'/%3E%3C/svg%3E\")]" />
    </>
  )
}
