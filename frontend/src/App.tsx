import { useEffect, useState } from 'react'

function App() {
  const [apiStatus, setApiStatus] = useState<string>('Checking backend...')

  useEffect(() => {
    fetch('http://localhost:8000/api/health')
      .then((res) => res.json())
      .then((data) => setApiStatus(`Connected: ${data.status}`))
      .catch(() => setApiStatus('Backend offline or starting up'))
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#090a0f] text-white p-6">
      <div className="max-w-md w-full p-8 rounded-2xl bg-white/[0.03] border border-white/10 backdrop-blur-xl shadow-2xl text-center space-y-4">
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-2">
          ⚡
        </div>
        <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
          Portfolio Scaffold
        </h1>
        <p className="text-sm text-zinc-400">
          React + Vite + TypeScript + Tailwind CSS
        </p>
        <div className="pt-2">
          <span className="inline-block px-3 py-1 text-xs font-mono rounded-full bg-zinc-800/80 border border-zinc-700 text-zinc-300">
            Backend Status: {apiStatus}
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
