import React from 'react'
import { motion } from 'framer-motion'

const logos = ['Twilio', 'RingCentral', 'Aircall', 'Zoom Phone', 'Dialpad', 'Five9', 'Grasshopper']

export default function Marquee() {
  return (
    <section className="relative py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="overflow-hidden rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl">
          <motion.div
            className="flex gap-12 whitespace-nowrap text-sky-200/70 text-sm"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          >
            {[...logos, ...logos].map((l, i) => (
              <div key={i} className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10">
                <span className="h-2 w-2 rounded-full bg-sky-300" /> {l}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
