import { Layout } from './components/Layout'

function App() {
  return (
    <Layout>
      <section id="hero" className="min-h-screen flex items-center justify-center pt-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald font-mono text-xs">
            <span className="w-2 h-2 rounded-full bg-cyber-emerald animate-ping" />
            <span>PHASE 3 COMPLETE // DESIGN SYSTEM INITIALIZED</span>
          </div>
          <h1 className="font-display font-extrabold text-4xl sm:text-6xl md:text-7xl tracking-tight text-white">
            SPATIAL CYBER ARCHITECT
          </h1>
          <p className="font-mono text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto">
            Custom dark palette, dynamic cursor physics, interactive particle mesh, and HUD telemetry active.
          </p>
        </div>
      </section>
    </Layout>
  )
}

export default App
