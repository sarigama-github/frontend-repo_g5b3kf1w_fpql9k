import React from 'react'
import { Smartphone, MessageSquare, Bot, CalendarClock, Zap, Shield } from 'lucide-react'

const features = [
  {
    icon: Smartphone,
    title: 'Instant detection',
    desc: 'We sense missed calls in real time and trigger an automated, branded follow‑up.',
  },
  {
    icon: MessageSquare,
    title: 'Human‑like replies',
    desc: 'AI drafts empathetic messages and proposes next steps in your voice and tone.',
  },
  {
    icon: CalendarClock,
    title: 'Auto scheduling',
    desc: 'Offer times, confirm appointments, and push to your calendar automatically.',
  },
  {
    icon: Bot,
    title: 'Smart routing',
    desc: 'Qualify, tag, and route conversations to the right teammate when needed.',
  },
  {
    icon: Zap,
    title: 'Works everywhere',
    desc: 'Plug into your existing phone system in minutes with no code.',
  },
  {
    icon: Shield,
    title: 'Secure by default',
    desc: 'SOC2‑ready practices, encryption at rest and in transit, granular roles.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">Built for speed and trust</h2>
          <p className="mt-3 text-sky-200/80">Everything you need to turn missed calls into conversions — fully automated, tastefully branded.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition hover:translate-y-[-2px] hover:bg-white/10">
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 shrink-0 rounded-xl bg-gradient-to-br from-sky-300 to-blue-500/80 grid place-items-center shadow-[0_10px_30px_rgba(59,130,246,0.25)]">
                  <Icon className="h-5 w-5 text-slate-950" />
                </div>
                <div>
                  <h3 className="text-white font-medium">{title}</h3>
                  <p className="mt-1 text-sm text-sky-200/80">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
