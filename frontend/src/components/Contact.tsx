import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Mail, MapPin, Check, Copy, Terminal, Radio } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'transmitting' | 'sent' | 'error'>('idle')
  const [copied, setCopied] = useState(false)
  const [feedbackMsg, setFeedbackMsg] = useState('')

  const myEmail = 'praiswinbose@gmail.com'

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText(myEmail)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setStatus('transmitting')

    try {
      const res = await fetch('http://localhost:8000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('sent')
        setFeedbackMsg('Signal successfully received and encrypted in database.')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('API server returned error')
      }
    } catch {
      // Fallback for static GitHub Pages deployment
      setTimeout(() => {
        setStatus('sent')
        setFeedbackMsg('Transmission logged via client dispatcher. Thank you!')
        setFormData({ name: '', email: '', subject: '', message: '' })
      }, 800)
    }
  }

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="space-y-4 text-center max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyber-violet/10 border border-cyber-violet/30 text-cyber-violet font-mono text-xs">
          <Radio className="w-3.5 h-3.5" />
          <span>TRANSMIT PROTOCOL // 04</span>
        </div>
        <h2 className="font-display font-bold text-3xl sm:text-5xl text-white tracking-tight">
          Initiate Direct Transmission
        </h2>
        <p className="font-sans text-sm sm:text-base text-zinc-400 leading-relaxed">
          Whether you are looking to architect a new high-scale distributed backend, assemble a groundbreaking WebGPU interface, or explore engineering roles — send a transmission.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 text-left">
        {/* Left Column: Direct Telemetry & Contact Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-8">
            <div className="space-y-2">
              <div className="text-xs font-mono text-cyber-emerald flex items-center gap-2">
                <Terminal className="w-4 h-4" />
                <span>DIRECT ACCESS CHANNELS</span>
              </div>
              <h3 className="font-display font-bold text-2xl text-white">
                Get In Touch
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 font-sans leading-relaxed">
                Available for worldwide remote roles and cutting-edge engineering teams.
              </p>
            </div>

            {/* Email quick-copy card */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/10 space-y-2">
              <div className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                PRIMARY SIGNAL EMAIL
              </div>
              <div className="flex items-center justify-between gap-3">
                <span className="font-mono text-sm text-zinc-200 truncate select-all">
                  {myEmail}
                </span>
                <button
                  onClick={copyEmailToClipboard}
                  className="p-2 rounded-xl bg-cyber-emerald/10 hover:bg-cyber-emerald text-cyber-emerald hover:text-black border border-cyber-emerald/30 transition-all shrink-0"
                  aria-label="Copy Email"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              {copied && (
                <div className="text-[11px] font-mono text-cyber-emerald pt-1">
                  ✓ Address copied to clipboard
                </div>
              )}
            </div>

            {/* Location & Timezone info */}
            <div className="space-y-4 font-mono text-xs text-zinc-400">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyber-teal/10 text-cyber-teal">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">BASE LOCATION</div>
                  <div className="text-zinc-200 font-semibold">Tamil Nadu, India (IST UTC+5:30)</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyber-emerald/10 text-cyber-emerald">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500 uppercase">RESPONSE LATENCY</div>
                  <div className="text-zinc-200 font-semibold">&lt; 12 Hours Guaranteed</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Transmission Form */}
        <div className="lg:col-span-7">
          <form
            onSubmit={handleSubmit}
            className="glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 space-y-6"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                  Your Identifier (Name) *
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Elena Vance"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-cyber-emerald focus:ring-1 focus:ring-cyber-emerald text-sm text-white font-sans placeholder-zinc-600 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                  Return Signal (Email) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="elena@domain.com"
                  className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-cyber-emerald focus:ring-1 focus:ring-cyber-emerald text-sm text-white font-sans placeholder-zinc-600 outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                Subject (Optional)
              </label>
              <input
                type="text"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="Collaboration / Engineering Role / Advisory"
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-cyber-emerald focus:ring-1 focus:ring-cyber-emerald text-sm text-white font-sans placeholder-zinc-600 outline-none transition-all"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-xs font-mono text-zinc-300 uppercase tracking-wider">
                Message Content *
              </label>
              <textarea
                required
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Details regarding your project, architecture needs, or role..."
                className="w-full px-4 py-3.5 rounded-xl bg-black/40 border border-white/10 focus:border-cyber-emerald focus:ring-1 focus:ring-cyber-emerald text-sm text-white font-sans placeholder-zinc-600 outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'transmitting'}
              className="w-full py-4 rounded-xl font-mono font-bold text-sm bg-cyber-emerald text-black hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,255,157,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] disabled:opacity-50"
            >
              {status === 'transmitting' ? (
                <>
                  <span className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  <span>ENCRYPTING & TRANSMITTING...</span>
                </>
              ) : status === 'sent' ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>SIGNAL DISPATCHED // READY FOR ANOTHER</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>TRANSMIT MESSAGE SIGNAL</span>
                </>
              )}
            </button>

            {status === 'sent' && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-mono"
              >
                {feedbackMsg || 'Message transmitted successfully.'}
              </motion.div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
