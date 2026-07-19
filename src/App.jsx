function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-50">
      <section className="mx-auto flex max-w-5xl flex-col gap-8">
        <div className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
            React + Vite + Tailwind
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            Seu portfolio esta pronto para ganhar forma.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            Edite <span className="font-mono text-cyan-200">src/App.jsx</span> para
            comecar a construir a experiencia.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {['React', 'Vite', 'Tailwind CSS'].map((item) => (
            <div key={item} className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
              <p className="text-sm text-zinc-400">Configurado</p>
              <h2 className="mt-2 text-xl font-semibold">{item}</h2>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default App
