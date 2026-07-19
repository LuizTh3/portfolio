import type { Technology } from '../data'

interface TechnologyCardProps {
  technology: Technology
}

export function TechnologyCard({ technology }: TechnologyCardProps) {
  return (
    <article className="rounded-lg border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-sm text-zinc-400">{technology.status}</p>
      <h3 className="mt-2 text-xl font-semibold">{technology.name}</h3>
    </article>
  )
}
