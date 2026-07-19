export interface Technology {
  name: string
  status: 'Configurado'
}

export const technologies = [
  { name: 'React', status: 'Configurado' },
  { name: 'Vite', status: 'Configurado' },
  { name: 'TypeScript Strict', status: 'Configurado' },
  { name: 'Tailwind CSS', status: 'Configurado' },
  { name: 'Anime.js', status: 'Configurado' },
] as const satisfies readonly Technology[]
