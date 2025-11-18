import React from 'react'
import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'
import Particles from './Particles'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Floating particles */}
      <Particles count={60} />

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-32 lg:pt-32 lg:pb-40">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-sky-200/90">
              <span className="h-1.5 w-1.5 rounded-full bg-sky-300 animate-pulse" />
              AI follow‑ups for missed calls
            </div>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
              Turn missed calls into happy customers
            </h1>
            <p className="mt-5 text-sky-200/90 text-base sm:text-lg max-w-xl">
              EchoFlow automatically texts callers when you can't pick up, captures context with AI, and schedules the next best step. No more lost leads, ever.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a href="#pricing" className="group relative inline-flex items-center gap-2 rounded-xl bg-sky-200 text-slate-900 px-5 py-3 font-medium shadow-[0_10px_30px_rgba(125,211,252,0.25)] hover:bg-white transition-colors">
                <span className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-sky-200 to-white opacity-0 group-hover:opacity-30 blur-xl transition" />
                Start free trial
              </a>
              <a href="#how" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-white/90 hover:bg-white/10 transition-colors">
                See how it works
              </a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-sky-200/70">
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-emerald-400"/> 14‑day free trial</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-sky-300"/> No credit card</div>
              <div className="flex items-center gap-2"><span className="h-2 w-2 rounded-full bg-violet-400"/> Cancel anytime</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
            className="lg:col-span-6"
          >
            <div className="relative aspect-[4/3] rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-sky-300/10 via-transparent to-white/5" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <p className="text-sky-200/80 text-sm mb-2">Live demo</p>
                  <p className="text-white text-2xl font-medium tracking-tight">Smart SMS follow‑ups</p>
                </div>
              </div>
              {/* Animated border sheen */}
              <span className="pointer-events-none absolute -inset-[1px] rounded-[calc(theme(borderRadius.3xl)+1px)] bg-[linear-gradient(90deg,rgba(125,211,252,0.0),rgba(125,211,252,0.35),rgba(125,211,252,0.0))] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)] [mask-composite:exclude] p-px animate-[sheen_3s_linear_infinite]" />
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_10%_-10%,rgba(125,211,252,0.15),transparent),radial-gradient(900px_500px_at_90%_10%,rgba(59,130,246,0.12),transparent)]" />
    </section>
  )
}
