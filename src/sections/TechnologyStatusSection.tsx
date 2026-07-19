import { TechnologyCard } from '../components'
import { technologies } from '../data'

export function TechnologyStatusSection() {
  return (
    <section aria-labelledby="technology-status-title">
      <h2 id="technology-status-title" className="sr-only">
        Status da fundacao tecnica
      </h2>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {technologies.map((technology) => (
          <TechnologyCard key={technology.name} technology={technology} />
        ))}
      </div>
    </section>
  )
}
