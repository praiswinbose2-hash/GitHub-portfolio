import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Sparkles, Code2, Cpu, ShieldCheck } from 'lucide-react'

export function Hero() {
  const [activeCommand, setActiveCommand] = useState<string>('whoami')
  const [typedText, setTypedText] = useState<string>('')
  
  const commands: Record<string, string> = {
    whoami: 'Praiswin Bose — Senior Full-Stack Engineer & Systems Architect.',
    'cat stack.json': 'FastAPI, Python, React, TypeScript, WebSockets, WebGPU, SQL/Postgres, Tailwind.',
    status: 'SYSTEMS ONLINE: Open for Engineering Roles & Core Architecture Collaborations.',
    'ping origin': '64 bytes from universe: icmp_seq=1 ttl=64 time=18.4 ms [OPTIMAL]',
  }

  useEffect(() => {
    let currentText = ''
    const fullText = commands[activeCommand] || ''
    setTypedText('')
    
    let index = 0
    const interval = setInterval(() => {
      if (index < fullText.length) {
        currentText += fullText[index]
        setTypedText(currentText)
        index++
      } else {
        clearInterval(interval)
      }
    }, 18)

    return () => clearInterval(interval)
  }, [activeCommand])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-4 sm:px-6 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Grid Accent */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-full max-w-5xl h-96 bg-radial-glow pointer-events-none opacity-50" />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Main Typography & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 space-y-8 text-left"
        >
          {/* Top Cyber Badge */}
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-mono text-xs shadow-[0_0_15px_rgba(0,255,157,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald"></span>
            </span>
            <span className="tracking-wide">FULL-STACK ARCHITECT // SYSTEMS ENGINEER</span>
          </div>

          {/* Main Headline */}
          <div className="space-y-3">
            <h1 className="font-display font-extrabold text-4xl sm:text-6xl xl:text-7xl tracking-tight text-white leading-[1.08]">
              Engineering{' '}
              <span className="bg-gradient-to-r from-cyber-emerald via-cyber-teal to-cyber-violet bg-clip-text text-transparent">
                Resilient
              </span>{' '}
              Backends & Tactile Interfaces.
            </h1>
            <p className="font-sans text-base sm:text-lg text-zinc-400 max-w-xl leading-relaxed">
              I design and construct high-throughput distributed APIs, real-time reactive engines, and cutting-edge web interfaces crafted with uncompromising precision.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono font-semibold text-sm bg-cyber-emerald text-black hover:bg-white transition-all duration-300 shadow-[0_0_20px_rgba(0,255,157,0.35)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]"
            >
              <span>EXPLORE MATRIX</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-mono font-medium text-sm bg-white/5 border border-white/10 text-zinc-200 hover:text-white hover:border-cyber-emerald/50 hover:bg-white/[0.08] transition-all duration-300"
            >
              <Sparkles className="w-4 h-4 text-cyber-emerald" />
              <span>TRANSMIT SIGNAL</span>
            </a>
          </div>

          {/* Telemetry Stats Strip */}
          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-white/10 font-mono text-left">
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                4<span className="text-cyber-emerald">+</span>
              </div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                Full-Stack Systems
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                60<span className="text-cyber-teal">FPS</span>
              </div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                Fluid Canvas UI
              </div>
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-bold font-display text-white">
                &lt;25<span className="text-cyber-violet">ms</span>
              </div>
              <div className="text-[11px] text-zinc-500 uppercase tracking-wider">
                Target Latency
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Interactive Cyber Console Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5"
        >
          <div className="rounded-2xl bg-background-card/90 border border-white/10 shadow-2xl backdrop-blur-2xl overflow-hidden">
            {/* Terminal Top Window Bar */}
            <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/10 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="ml-2 text-[11px] text-zinc-500">praiswin@quantum-node:~</span>
              </div>
              <div className="flex items-center gap-1.5 text-cyber-emerald text-[11px]">
                <Cpu className="w-3.5 h-3.5" />
                <span>ONLINE</span>
              </div>
            </div>

            {/* Terminal Command Pills */}
            <div className="p-4 border-b border-white/5 bg-black/20 flex flex-wrap gap-2">
              {Object.keys(commands).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setActiveCommand(cmd)}
                  className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-all duration-200 ${
                    activeCommand === cmd
                      ? 'bg-cyber-emerald/20 text-cyber-emerald border border-cyber-emerald/40 shadow-[0_0_10px_rgba(0,255,157,0.2)]'
                      : 'bg-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 border border-white/5'
                  }`}
                >
                  $ {cmd}
                </button>
              ))}
            </div>

            {/* Terminal Screen Body */}
            <div className="p-6 font-mono text-sm space-y-4 min-h-[220px] text-left">
              <div className="text-zinc-500 text-xs">
                # Quantum Kernel 6.1.0-arm64 // Session Active
              </div>

              <div className="flex items-center gap-2 text-cyber-emerald font-semibold">
                <Terminal className="w-4 h-4 text-cyber-teal shrink-0" />
                <span>guest@praiswin-node:~$</span>
                <span className="text-white">{activeCommand}</span>
              </div>

              <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-zinc-300 text-xs sm:text-sm leading-relaxed min-h-[70px]">
                {typedText}
                <span className="inline-block w-2 h-4 bg-cyber-emerald ml-1 animate-pulse align-middle" />
              </div>

              <div className="pt-2 flex items-center justify-between text-[11px] text-zinc-500 border-t border-white/5">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-cyber-emerald" />
                  <span>256-bit TLS handshake verified</span>
                </div>
                <div className="flex items-center gap-1 text-cyber-teal">
                  <Code2 className="w-3.5 h-3.5" />
                  <span>FastAPI / Vite</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
