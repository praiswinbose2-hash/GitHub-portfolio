import React from 'react'
import { CustomCursor } from './CustomCursor'
import { ParticlesBackground } from './ParticlesBackground'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

interface LayoutProps {
  children: React.ReactNode
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen bg-background text-zinc-100 flex flex-col selection:bg-cyber-emerald/30 selection:text-cyber-emerald">
      {/* Interactive Cursor */}
      <CustomCursor />

      {/* Reactive Particle Canvas */}
      <ParticlesBackground />

      {/* Top Ambient Glow Layers */}
      <div className="fixed top-[-10vw] left-[-10vw] w-[45vw] h-[45vw] rounded-full bg-cyber-emerald/5 blur-[120px] pointer-events-none z-0" />
      <div className="fixed bottom-[-10vw] right-[-10vw] w-[45vw] h-[45vw] rounded-full bg-cyber-violet/5 blur-[140px] pointer-events-none z-0" />

      {/* Floating HUD Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 relative z-10 w-full">
        {children}
      </main>

      {/* Telemetry Footer */}
      <Footer />
    </div>
  )
}
