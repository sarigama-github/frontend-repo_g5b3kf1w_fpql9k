import React, { useMemo } from 'react'
import { motion } from 'framer-motion'

function randomBetween(min, max) {
  return Math.random() * (max - min) + min
}

export default function Particles({ count = 40 }) {
  const dots = useMemo(() => {
    return new Array(count).fill(0).map((_, i) => ({
      id: i,
      x: randomBetween(0, 100),
      y: randomBetween(0, 100),
      size: randomBetween(3, 8),
      delay: randomBetween(0, 6),
      duration: randomBetween(6, 14),
      hue: randomBetween(185, 230),
    }))
  }, [count])

  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      {dots.map((d) => (
        <motion.span
          key={d.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.2, 0.6, 0.2], y: [0, -10, 0], x: [0, 5, 0] }}
          transition={{ duration: d.duration, delay: d.delay, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            left: `${d.x}%`,
            top: `${d.y}%`,
            width: d.size,
            height: d.size,
            background: `hsla(${d.hue}, 90%, 70%, 0.35)`,
            borderRadius: 999,
            boxShadow: `0 0 30px hsla(${d.hue}, 90%, 70%, 0.35)`,
          }}
        />
      ))}
    </div>
  )
}
