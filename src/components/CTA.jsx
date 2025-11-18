import React from 'react'

export default function CTA() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-sky-200/90 mb-4">
          Flexible pricing, cancel anytime
        </div>
        <h3 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Start free, upgrade when you’re ready</h3>
        <p className="mt-3 text-sky-200/80">Try everything for 14 days. Keep your conversations, templates, and settings when you upgrade.</p>

        <div className="mt-10 grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
            <p className="text-sky-200/80 text-sm">Starter</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-white text-4xl font-semibold">$29</span>
              <span className="text-sky-200/60">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-sky-200/80 list-disc list-inside">
              <li>Up to 500 automated texts</li>
              <li>Missed‑call detection</li>
              <li>Basic templates</li>
            </ul>
          </div>

          <div className="relative rounded-2xl border border-sky-300/40 bg-gradient-to-b from-white/10 to-white/5 p-6 text-left shadow-[0_10px_40px_rgba(125,211,252,0.15)]">
            <div className="absolute -top-3 right-4 rounded-full bg-sky-300 text-slate-900 text-xs px-2 py-0.5">Popular</div>
            <p className="text-sky-200/80 text-sm">Growth</p>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-white text-4xl font-semibold">$79</span>
              <span className="text-sky-200/60">/mo</span>
            </div>
            <ul className="mt-4 space-y-2 text-sm text-sky-200/80 list-disc list-inside">
              <li>Everything in Starter</li>
              <li>Unlimited templates</li>
              <li>Calendar integration</li>
              <li>Team routing</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-xl bg-sky-200 text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(125,211,252,0.25)] hover:bg-white transition-colors">
            Start free trial
          </button>
          <button className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition-colors">
            Book a demo
          </button>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1000px_500px_at_50%_120%,rgba(125,211,252,0.15),transparent)]" />
    </section>
  )
}
