import React from 'react'
import { PhoneMissed, MessageCircle, CalendarCheck, Smile } from 'lucide-react'

const steps = [
  { icon: PhoneMissed, title: 'Missed call', desc: 'We detect the missed call instantly from your phone system.' },
  { icon: MessageCircle, title: 'Auto text', desc: 'An on‑brand text is sent in seconds with helpful options.' },
  { icon: CalendarCheck, title: 'AI assists', desc: 'The assistant answers, qualifies, and schedules as needed.' },
  { icon: Smile, title: 'You win', desc: 'Caller feels heard, you save the deal, nobody slips through.' },
]

export default function HowItWorks() {
  return (
    <section id="how" className="py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-5">
            <h2 className="text-white text-3xl sm:text-4xl font-semibold tracking-tight">From missed call to booked meeting — automatically</h2>
            <p className="mt-3 text-sky-200/80">Connect your number, choose a tone, and you’re live in minutes. The assistant handles the back‑and‑forth while you focus on work.</p>
          </div>

          <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
            {steps.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="flex items-start gap-4">
                  <div className="h-10 w-10 rounded-lg bg-sky-200 text-slate-900 grid place-items-center">
                    <Icon className="h-5 w-5" />
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
      </div>
    </section>
  )
}
