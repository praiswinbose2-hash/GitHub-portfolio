import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Terminal, Code2, FolderGit2, Mail, Menu, X, Sparkles, ExternalLink } from 'lucide-react'

interface NavItem {
  name: string
  href: string
  icon: React.ReactNode
}

const navItems: NavItem[] = [
  { name: 'System', href: '#hero', icon: <Terminal className="w-4 h-4" /> },
  { name: 'Matrix', href: '#about', icon: <Code2 className="w-4 h-4" /> },
  { name: 'Projects', href: '#projects', icon: <FolderGit2 className="w-4 h-4" /> },
  { name: 'Transmit', href: '#contact', icon: <Mail className="w-4 h-4" /> },
]

export function Navbar() {
  const [activeSection, setActiveSection] = useState<string>('hero')
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)

      const sections = ['hero', 'about', 'projects', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el) {
          const top = el.offsetTop
          const height = el.offsetHeight
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 px-4 sm:px-6 transition-all duration-300 ${
          scrolled ? 'py-3 bg-background/80 backdrop-blur-xl border-b border-white/5' : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-3 px-3 py-1.5 rounded-xl bg-background-card/80 border border-white/10 backdrop-blur-md transition-all duration-300 hover:border-cyber-emerald/50"
          >
            <div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-mono font-bold text-sm">
              <span className="relative z-10">PB</span>
              <div className="absolute inset-0 rounded-lg bg-cyber-emerald/20 blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="hidden sm:block text-left">
              <div className="text-xs font-mono font-semibold tracking-wider text-zinc-200 group-hover:text-cyber-emerald transition-colors">
                PRAISWIN BOSE
              </div>
              <div className="text-[10px] font-mono text-zinc-500">
                SYS.ARCHITECT // v2.5
              </div>
            </div>
          </a>

          {/* Center Floating HUD Nav (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-background-card/70 border border-white/10 backdrop-blur-xl shadow-2xl shadow-black/60">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '')
              return (
                <a
                  key={item.name}
                  href={item.href}
                  className={`relative px-4 py-2 rounded-full text-xs font-mono tracking-wide transition-all duration-200 flex items-center gap-2 ${
                    isActive
                      ? 'text-cyber-emerald font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/[0.04]'
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 rounded-full bg-cyber-emerald/15 border border-cyber-emerald/40 -z-10 shadow-[0_0_12px_rgba(0,255,157,0.25)]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              )
            })}
          </nav>

          {/* Right Status & Actions */}
          <div className="flex items-center gap-3">
            {/* Live Status Badge */}
            <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-background-card/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-zinc-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyber-emerald shadow-[0_0_8px_#00FF9D]"></span>
              </span>
              <span className="text-zinc-400">STATUS:</span>
              <span className="text-emerald-400 font-medium">AVAILABLE</span>
            </div>

            {/* Quick Action / Contact */}
            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-mono font-semibold bg-cyber-emerald/10 border border-cyber-emerald/40 text-cyber-emerald hover:bg-cyber-emerald hover:text-black transition-all duration-300 shadow-[0_0_15px_rgba(0,255,157,0.15)] hover:shadow-[0_0_25px_rgba(0,255,157,0.4)]"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>INITIALIZE</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-xl bg-background-card/80 border border-white/10 text-zinc-300 hover:text-white"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-2xl bg-background-card/95 border border-white/15 backdrop-blur-2xl shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-mono text-zinc-300 hover:bg-cyber-emerald/10 hover:text-cyber-emerald transition-colors"
                >
                  {item.icon}
                  <span>{item.name}</span>
                </a>
              ))}
              <div className="pt-3 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400 px-2">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-cyber-emerald animate-pulse" />
                  <span>Available for Hire</span>
                </div>
                <a
                  href="https://github.com/praiswinbose2-hash"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 text-cyber-emerald"
                >
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
