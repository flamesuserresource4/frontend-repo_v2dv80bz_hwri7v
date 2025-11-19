import Hero from './components/Hero'
import Features from './components/Features'
import Steps from './components/Steps'
import FAQ from './components/FAQ'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-rose-900 to-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(244,63,94,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(99,102,241,0.25),transparent_45%)]" />

      <header className="relative z-10">
        <nav className="max-w-6xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="text-white font-semibold">CouplesCare</a>
          <div className="hidden sm:flex items-center gap-6 text-white/80">
            <a href="#how" className="hover:text-white transition">Как это работает</a>
            <a href="#faq" className="hover:text-white transition">FAQ</a>
            <a href="https://t.me/your_couples_psych_bot" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-lg bg-white/10 border border-white/20 hover:bg-white/20 text-white font-semibold">Открыть бота</a>
          </div>
        </nav>
      </header>

      <main className="relative z-10">
        <Hero />
        <Features />
        <Steps />
        <section id="faq" className="relative">
          <FAQ />
        </section>
        <footer className="py-12 text-center text-white/60">
          © {new Date().getFullYear()} CouplesCare. Сделано с заботой.
        </footer>
      </main>
    </div>
  )
}

export default App
