import { TechnologyStatusSection } from '../sections'

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-zinc-50">
      <div className="mx-auto flex max-w-5xl flex-col gap-10">
        <header className="max-w-2xl">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-cyan-300">
            Digital Software Factory
          </p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-6xl">
            A fundacao do portfolio esta pronta.
          </h1>
          <p className="mt-5 text-lg leading-8 text-zinc-300">
            React, TypeScript strict e uma estrutura modular preparada para
            transformar ideias em software.
          </p>
        </header>

        <TechnologyStatusSection />
      </div>
    </main>
  )
}
