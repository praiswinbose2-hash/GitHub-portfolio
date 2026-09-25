import { useState } from 'react'
import { motion } from 'framer-motion'
import { Server, Layout, Layers, Shield, CheckCircle2, Zap, Database, Terminal } from 'lucide-react'

interface SkillCategory {
  id: string
  title: string
  icon: React.ReactNode
  color: string
  description: string
  skills: { name: string; level: string; highlight?: boolean }[]
}

const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Core Systems & Backend',
    icon: <Server className="w-5 h-5 text-cyber-emerald" />,
    color: 'emerald',
    description: 'High-performance API architectures, distributed microservices, and persistent transactional storage.',
    skills: [
      { name: 'FastAPI / Python', level: 'Architect', highlight: true },
      { name: 'SQLAlchemy / SQLModel', level: 'Advanced', highlight: true },
      { name: 'PostgreSQL / SQLite', level: 'Expert', highlight: true },
      { name: 'REST & WebSockets', level: 'Mastery' },
      { name: 'AsyncIO & Concurrency', level: 'Advanced' },
      { name: 'Redis Caching', level: 'Proficient' },
    ],
  },
  {
    id: 'frontend',
    title: 'Tactile Frontend Architecture',
    icon: <Layout className="w-5 h-5 text-cyber-teal" />,
    color: 'teal',
    description: 'Ultra-fluid component design systems, deterministic state machines, and micro-interaction animation.',
    skills: [
      { name: 'React 19 / Next.js', level: 'Expert', highlight: true },
      { name: 'TypeScript', level: 'Strict Typing', highlight: true },
      { name: 'Tailwind CSS', level: 'Design Systems', highlight: true },
      { name: 'Framer Motion', level: 'Advanced Physics' },
      { name: 'Vite Ecosystem', level: 'Optimized Builds' },
      { name: 'Responsive Layouts', level: 'Pixel-Perfect' },
    ],
  },
  {
    id: 'graphics',
    title: 'Creative Tech & Spatial Canvas',
    icon: <Layers className="w-5 h-5 text-cyber-violet" />,
    color: 'violet',
    description: 'Generative shader computing, WebGPU compute pipelines, and interactive particle dynamics.',
    skills: [
      { name: 'WebGPU / WGSL', level: 'Compute Shaders', highlight: true },
      { name: 'HTML5 Canvas 2D/3D', level: 'Custom Renderers' },
      { name: 'WebAssembly (Wasm)', level: 'C++ Interop' },
      { name: 'AudioWorklet DSP', level: 'Spatial Audio' },
      { name: 'Physics Simulations', level: 'Vector Math' },
    ],
  },
  {
    id: 'devops',
    title: 'Cloud, DevOps & Security',
    icon: <Shield className="w-5 h-5 text-cyber-amber" />,
    color: 'amber',
    description: 'Containerized deployments, automated CI/CD workflows, and hardened networking layers.',
    skills: [
      { name: 'Docker & Compose', level: 'Containerization', highlight: true },
      { name: 'GitHub Actions', level: 'Automated CI/CD', highlight: true },
      { name: 'Linux / POSIX Shell', level: 'System Admin' },
      { name: '256-bit TLS / Auth', level: 'Security Hardening' },
      { name: 'Vercel / Render / Cloud', level: 'Serverless / IaaS' },
    ],
  },
]

export function About() {
  const [selectedCategory, setSelectedCategory] = useState<string>('backend')

  const activeCategory = skillCategories.find((c) => c.id === selectedCategory) || skillCategories[0]

  return (
    <section id="about" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-teal/10 border border-cyber-teal/30 text-cyber-teal font-mono text-xs">
          <Terminal className="w-3.5 h-3.5" />
          <span>CAPABILITY MATRIX // 02</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
          Engineered for Performance & Aesthetics
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
          I bridge the gap between rigorous systems-level backend engineering and hyper-responsive spatial interfaces. Every millisecond of latency and every pixel of motion is intentionally architected.
        </p>
      </div>

      {/* Philosophy Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="glass-panel p-6 rounded-2xl space-y-3 relative overflow-hidden group">
          <div className="p-3 rounded-xl bg-cyber-emerald/10 text-cyber-emerald w-fit">
            <Zap className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-emerald transition-colors">
            Zero Jitter & High Throughput
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Optimized memory allocations, non-blocking I/O routines, and sub-second asset bundling ensure uninterrupted responsiveness across all devices.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl space-y-3 relative overflow-hidden group">
          <div className="p-3 rounded-xl bg-cyber-teal/10 text-cyber-teal w-fit">
            <Database className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-teal transition-colors">
            Type-Safe & Clean Schemas
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Strict end-to-end data contracts using Pydantic and TypeScript prevent runtime errors and ensure long-term architectural stability.
          </p>
        </div>

        <div className="glass-panel p-6 rounded-2xl space-y-3 relative overflow-hidden group">
          <div className="p-3 rounded-xl bg-cyber-violet/10 text-cyber-violet w-fit">
            <Layers className="w-6 h-6" />
          </div>
          <h3 className="font-display font-bold text-lg text-white group-hover:text-cyber-violet transition-colors">
            Tactile Spatial Interfaces
          </h3>
          <p className="font-sans text-xs sm:text-sm text-zinc-400 leading-relaxed">
            Fluid gesture dynamics, custom WebGL/WebGPU renderers, and micro-interactions that make digital software feel alive and intuitive.
          </p>
        </div>
      </div>

      {/* Interactive Skill Category Tabs & Matrix */}
      <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap gap-3 pb-2 border-b border-white/10">
          {skillCategories.map((cat) => {
            const isSelected = selectedCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`flex items-center gap-2.5 px-4 py-2.5 rounded-xl font-mono text-xs sm:text-sm transition-all duration-300 ${
                  isSelected
                    ? 'bg-cyber-emerald/15 text-cyber-emerald border border-cyber-emerald/40 shadow-[0_0_15px_rgba(0,255,157,0.2)]'
                    : 'bg-white/5 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 border border-white/5'
                }`}
              >
                {cat.icon}
                <span className="font-semibold">{cat.title}</span>
              </button>
            )
          })}
        </div>

        {/* Active Category Display */}
        <motion.div
          key={activeCategory.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="space-y-6"
        >
          <div className="text-left space-y-1">
            <h4 className="font-display font-bold text-xl text-white">
              {activeCategory.title}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-400 font-sans">
              {activeCategory.description}
            </p>
          </div>

          {/* Skill Capsules Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {activeCategory.skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 rounded-xl bg-background-card/80 border border-white/5 hover:border-cyber-emerald/30 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <CheckCircle2
                    className={`w-4 h-4 ${
                      skill.highlight ? 'text-cyber-emerald' : 'text-zinc-600 group-hover:text-cyber-teal'
                    }`}
                  />
                  <span className="font-sans text-sm font-medium text-zinc-200 group-hover:text-white">
                    {skill.name}
                  </span>
                </div>
                <span className="font-mono text-[11px] px-2 py-0.5 rounded-md bg-white/5 text-zinc-400 group-hover:text-cyber-emerald transition-colors">
                  {skill.level}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
