import React from 'react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300" />
          <span className="text-white/90 font-medium">EchoFlow</span>
        </div>
        <p className="text-sky-200/70 text-sm">© {new Date().getFullYear()} EchoFlow, Inc. All rights reserved.</p>
      </div>
    </footer>
  )
}
