import React from 'react'
import { motion } from 'framer-motion'
import { Sparkles, Waves, Atom, Infinity as InfinityIcon, Stars } from 'lucide-react'

const cards = [
  {
    title: 'Neural Intent Mapper',
    desc: 'Realtime vector routing that understands what your callers actually want — not just keywords.',
    icon: Atom,
    accent: 'from-sky-300/20 to-blue-500/10',
  },
  {
    title: 'Temporal Memory',
    desc: 'Conversations persist across missed calls, texts, and days. Context is never lost.',
    icon: InfinityIcon,
    accent: 'from-violet-300/20 to-fuchsia-500/10',
  },
  {
    title: 'Harmonics Engine',
    desc: 'Dynamic tone blending makes replies feel warm, on‑brand, and unmistakably human.',
    icon: Waves,
    accent: 'from-cyan-300/20 to-emerald-400/10',
  },
]

export default function Showcase() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="text-white text-3xl sm:text-4xl font-semibold tracking-tight"
          >
            Under the hood — beautiful chaos
          </motion.h2>
          <p className="mt-3 text-sky-200/80">Tastefully extra visuals powered by physics‑inspired motion and layered glass morphism.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {cards.map(({ title, desc, icon: Icon, accent }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20, rotate: -2 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className={`absolute -inset-1 rounded-3xl bg-gradient-to-br ${accent} opacity-0 group-hover:opacity-100 blur-2xl transition`} />
              <div className="relative">
                <div className="h-12 w-12 rounded-xl bg-sky-200 text-slate-900 grid place-items-center shadow-[0_10px_30px_rgba(125,211,252,0.25)]">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-4 text-white font-medium">{title}</h3>
                <p className="mt-1 text-sm text-sky-200/80">{desc}</p>
              </div>

              {/* Tilt sparkle */}
              <motion.div
                className="absolute -right-4 -top-4 text-sky-200/50"
                animate={{ rotate: [0, 20, 0, -20, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              >
                <Sparkles className="h-8 w-8" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Parallax badges */}
        <div className="relative mt-16">
          <motion.div
            className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-sky-200/90"
            animate={{ y: [0, -6, 0, 6, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="inline-flex items-center gap-2">
              <Stars className="h-4 w-4" /> 99.99% uptime
            </div>
          </motion.div>
          <motion.div
            className="absolute right-6 -top-3 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-sky-200/90"
            animate={{ y: [0, 8, 0, -8, 0] }}
            transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="inline-flex items-center gap-2">
              <Stars className="h-4 w-4" /> SOC2-ready
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 -z-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
