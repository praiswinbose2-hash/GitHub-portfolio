export interface ProjectItem {
  id: number
  slug: string
  title: string
  tagline: string
  description: string
  role: string
  tech_stack: string[]
  github_url?: string
  live_url?: string
  image_url?: string
  category: string
  featured: boolean
  order: number
  year: string
}

export const FALLBACK_PROJECTS: ProjectItem[] = [
  {
    id: 1,
    slug: 'aetheria-engine',
    title: 'Aetheria Engine',
    tagline: 'Real-time WebGPU atmospheric fluid simulation & generative particle canvas',
    description: 'A high-performance interactive fluid simulation and particle rendering engine built with modern WebGPU compute shaders. Features audio-reactive flow fields, custom physical forces, and sub-millisecond particle frame calculations directly on the GPU.',
    role: 'Creator & Lead Graphics Engineer',
    tech_stack: ['TypeScript', 'WebGPU', 'WGSL', 'React', 'Framer Motion', 'Tailwind CSS'],
    github_url: 'https://github.com/praiswinbose2-hash/GitHub-portfolio',
    live_url: 'https://praiswinbose2-hash.github.io/GitHub-portfolio/',
    image_url: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    category: 'Graphics & WebGPU',
    featured: true,
    order: 1,
    year: '2025',
  },
  {
    id: 2,
    slug: 'krypton-agent-framework',
    title: 'Krypton Orchestrator',
    tagline: 'Autonomous agent orchestration framework with live streaming DAG visualizer',
    description: 'Distributed agent pipeline engine that coordinates multi-step reasoning, real-time tool execution streaming, and failure-recovery fallback policies. Includes an interactive visual execution graph with real-time state inspectability.',
    role: 'Full-Stack Architect',
    tech_stack: ['FastAPI', 'Python', 'React', 'TypeScript', 'WebSockets', 'Framer Motion', 'SQLite'],
    github_url: 'https://github.com/praiswinbose2-hash/GitHub-portfolio',
    live_url: 'https://praiswinbose2-hash.github.io/GitHub-portfolio/',
    image_url: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?auto=format&fit=crop&w=1200&q=80',
    category: 'AI Systems',
    featured: true,
    order: 2,
    year: '2025',
  },
  {
    id: 3,
    slug: 'hyperion-audio-synth',
    title: 'Hyperion Spatial Audio',
    tagline: 'Wasm-powered polyphonic synthesizer & binaural 3D spatial visualizer',
    description: 'Ultra-low latency synthesizer engine compiled to WebAssembly with custom C++ DSP routines. Emits 3D binaural spatialized audio nodes with real-time spectrum analysis and interactive geometric waveforms.',
    role: 'Systems & Audio Engineer',
    tech_stack: ['C++', 'WebAssembly', 'AudioWorklet', 'TypeScript', 'React', 'Three.js'],
    github_url: 'https://github.com/praiswinbose2-hash/GitHub-portfolio',
    live_url: 'https://praiswinbose2-hash.github.io/GitHub-portfolio/',
    image_url: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80',
    category: 'Audio & Systems',
    featured: true,
    order: 3,
    year: '2024',
  },
  {
    id: 4,
    slug: 'nexus-collaborative-canvas',
    title: 'Nexus Canvas',
    tagline: 'Real-time infinite workspace with peer-to-peer CRDT state synchronization',
    description: 'Infinite multi-user whiteboard with frictionless P2P state synchronization via CRDTs. Supports thousands of simultaneous collaborative vectors, live cursor presence, dynamic markdown rendering, and local-first offline persistence.',
    role: 'Frontend & Distributed Systems Engineer',
    tech_stack: ['TypeScript', 'React', 'Yjs', 'WebRTC', 'Tailwind CSS', 'Vite'],
    github_url: 'https://github.com/praiswinbose2-hash/GitHub-portfolio',
    live_url: 'https://praiswinbose2-hash.github.io/GitHub-portfolio/',
    image_url: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    category: 'Collaborative Software',
    featured: true,
    order: 4,
    year: '2024',
  },
]
