import { useEffect, useState } from 'react'
import { ArrowUp, Activity, ShieldCheck, Terminal } from 'lucide-react'

function GithubIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function LinkedinIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
    </svg>
  )
}

function TwitterIcon({ className = 'w-5 h-5' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  )
}

export function Footer() {
  const [time, setTime] = useState<string>('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Asia/Kolkata',
          hour12: false,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        })
      )
    }
    updateTime()
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative border-t border-white/10 bg-background/90 backdrop-blur-xl pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-24 bg-cyber-emerald/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto space-y-12">
        {/* Top bar: Telemetry & Status HUD */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4 rounded-2xl bg-background-card/50 border border-white/5 font-mono text-xs text-zinc-400">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-emerald/10 text-cyber-emerald">
              <Activity className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">SYSTEM REGION</div>
              <div className="text-zinc-200 font-semibold">ASIA/KOLKATA (IST)</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-teal/10 text-cyber-teal">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">LOCAL TIME</div>
              <div className="text-zinc-200 font-semibold">{time || '00:00:00'} IST</div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-cyber-violet/10 text-cyber-violet">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <div className="text-[10px] text-zinc-500 uppercase tracking-wider">PROTOCOL ENGINE</div>
              <div className="text-zinc-200 font-semibold">FASTAPI + REACT + VITE</div>
            </div>
          </div>

          <div className="flex items-center justify-between sm:justify-end gap-3">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10 hover:border-cyber-emerald/40 hover:text-cyber-emerald transition-all text-xs text-zinc-300"
            >
              <span>RETURN TO TOP</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Middle Bar: Links and Brand */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-4">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-display font-bold text-lg text-white">
              Praiswin Bose
            </h3>
            <p className="text-xs text-zinc-400 font-sans max-w-sm">
              Crafting high-throughput full-stack architectures and tactile digital interfaces.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/praiswinbose2-hash"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-background-card border border-white/10 text-zinc-400 hover:text-cyber-emerald hover:border-cyber-emerald/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-background-card border border-white/10 text-zinc-400 hover:text-cyber-emerald hover:border-cyber-emerald/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all"
              aria-label="LinkedIn Profile"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-background-card border border-white/10 text-zinc-400 hover:text-cyber-emerald hover:border-cyber-emerald/50 hover:shadow-[0_0_15px_rgba(0,255,157,0.2)] transition-all"
              aria-label="Twitter Profile"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between text-[11px] font-mono text-zinc-500 gap-3">
          <div>
            © {new Date().getFullYear()} Praiswin Bose. Engineered with precision.
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyber-emerald" />
            <span>ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
