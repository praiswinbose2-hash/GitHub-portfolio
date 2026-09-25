import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, FolderGit2, Terminal, Sparkles, X, Cpu, CheckCircle } from 'lucide-react'
import type { ProjectItem } from '../data/projectsData'
import { FALLBACK_PROJECTS } from '../data/projectsData'

function GithubIcon({ className = 'w-4 h-4' }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

export function Projects() {
  const [projects, setProjects] = useState<ProjectItem[]>(FALLBACK_PROJECTS)
  const [activeCategory, setActiveCategory] = useState<string>('All')
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null)
  const [dataSource, setDataSource] = useState<'API' | 'STATIC'>('STATIC')

  useEffect(() => {
    // Attempt dynamic backend fetch with fallback
    fetch('http://localhost:8000/api/projects')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok')
        return res.json()
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setProjects(data)
          setDataSource('API')
        }
      })
      .catch(() => {
        setProjects(FALLBACK_PROJECTS)
        setDataSource('STATIC')
      })
  }, [])

  const categories = ['All', 'Graphics & WebGPU', 'AI Systems', 'Audio & Systems', 'Collaborative Software']

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter((p) => p.category.toLowerCase().includes(activeCategory.toLowerCase()))

  return (
    <section id="projects" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-mono text-xs">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>DEPLOYED ARCHITECTURES // 03</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
            Featured Systems & Works
          </h2>
          <p className="font-sans text-sm sm:text-base text-zinc-400 max-w-xl">
            A curated showcase of high-performance full-stack architectures, generative GPU engines, and real-time collaborative workspaces.
          </p>
        </div>

        {/* Data Origin Indicator */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-background-card border border-white/10 font-mono text-xs text-zinc-400 self-start md:self-auto">
          <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-pulse" />
          <span>DATA FEED: <strong className="text-white">{dataSource}</strong></span>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap gap-2 pb-2">
        {categories.map((cat) => {
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all duration-200 ${
                isActive
                  ? 'bg-cyber-emerald text-black font-semibold shadow-[0_0_15px_rgba(0,255,157,0.3)]'
                  : 'bg-background-card/80 text-zinc-400 hover:text-zinc-200 hover:bg-white/10 border border-white/5'
              }`}
            >
              {cat}
            </button>
          )
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.slug || project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-3xl bg-background-card/70 border border-white/10 overflow-hidden hover:border-cyber-emerald/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,157,0.15)] flex flex-col justify-between text-left"
          >
            {/* Top Image Preview with Gradient Overlay */}
            <div className="relative h-60 w-full overflow-hidden bg-zinc-900">
              {project.image_url ? (
                <img
                  src={project.image_url}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-zinc-800 to-zinc-950 flex items-center justify-center">
                  <Terminal className="w-12 h-12 text-zinc-700" />
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/40 to-transparent" />

              {/* Floating Meta Badges */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="px-3 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-cyber-emerald backdrop-blur-md">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-black/60 border border-white/15 text-[11px] font-mono text-zinc-300 backdrop-blur-md">
                  {project.year}
                </span>
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-8 space-y-5 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider">
                  ROLE // {project.role}
                </div>
                <h3 className="font-display font-bold text-2xl text-white group-hover:text-cyber-emerald transition-colors">
                  {project.title}
                </h3>
                <p className="font-sans text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                  {project.tagline || project.description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="space-y-4 pt-2">
                <div className="flex flex-wrap gap-2">
                  {project.tech_stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-white/5 border border-white/5 text-[11px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="inline-flex items-center gap-2 text-xs font-mono text-cyber-emerald hover:text-white transition-colors"
                  >
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>SYSTEM SPECS</span>
                  </button>

                  <div className="flex items-center gap-3">
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-300 hover:text-white transition-all"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-cyber-emerald/10 hover:bg-cyber-emerald text-cyber-emerald hover:text-black border border-cyber-emerald/30 transition-all"
                        aria-label="Live Demo Link"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Deep Dive Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl rounded-3xl bg-background-card border border-cyber-emerald/40 p-6 sm:p-8 space-y-6 shadow-2xl text-left max-h-[90vh] overflow-y-auto"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-xl bg-white/5 border border-white/10 text-zinc-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-cyber-emerald">
                  <Cpu className="w-4 h-4" />
                  <span>ARCHITECTURE BREAKDOWN</span>
                </div>
                <h3 className="font-display font-bold text-3xl text-white">
                  {selectedProject.title}
                </h3>
                <p className="font-sans text-sm text-cyber-teal font-medium">
                  {selectedProject.tagline}
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-sm text-zinc-300 font-sans leading-relaxed">
                {selectedProject.description}
              </div>

              <div className="space-y-2">
                <div className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  DEPLOYED TECHNOLOGIES
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech_stack.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1.5 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-xs font-mono text-cyber-emerald"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
                  <CheckCircle className="w-4 h-4 text-cyber-emerald" />
                  <span>Verified Production Stack</span>
                </div>

                <div className="flex items-center gap-3">
                  {selectedProject.github_url && (
                    <a
                      href={selectedProject.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-zinc-200 hover:text-white"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>CODE</span>
                    </a>
                  )}
                  {selectedProject.live_url && (
                    <a
                      href={selectedProject.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyber-emerald text-black font-mono font-semibold text-xs hover:bg-white transition-colors"
                    >
                      <span>LAUNCH</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  )
}
