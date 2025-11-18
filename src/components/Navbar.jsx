import React from 'react'
import { Menu, PhoneOutgoing, Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 backdrop-blur-md bg-slate-950/40 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 via-sky-400 to-cyan-300 shadow-[0_0_30px_rgba(56,189,248,0.35)] flex items-center justify-center">
            <PhoneOutgoing className="h-5 w-5 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-white font-semibold tracking-tight">EchoFlow</span>
              <Sparkles className="h-4 w-4 text-sky-300" />
            </div>
            <p className="text-xs text-sky-200/60 -mt-0.5">Never miss a follow‑up</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-sky-200/80 hover:text-white transition-colors">Features</a>
          <a href="#how" className="text-sky-200/80 hover:text-white transition-colors">How it works</a>
          <a href="#pricing" className="text-sky-200/80 hover:text-white transition-colors">Pricing</a>
          <a href="#faq" className="text-sky-200/80 hover:text-white transition-colors">FAQ</a>
        </nav>

        <div className="flex items-center gap-3">
          <button className="hidden md:inline-flex items-center rounded-lg px-4 py-2 text-sm text-sky-200 hover:text-white transition-colors">Log in</button>
          <button className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium text-slate-900 bg-sky-200 hover:bg-white transition-colors shadow-sm">Start free</button>
          <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white/80">
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}
