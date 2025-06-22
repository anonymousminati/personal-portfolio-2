export interface Skill {
  name: string
  level: number
  category: 'technical' | 'soft'
  icon: React.ReactNode
}

export interface Project {
  id: string
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

export interface Experience {
  id: string
  company: string
  position: string
  duration: string
  description: string
  technologies: string[]
}

export interface Education {
  id: string
  institution: string
  degree: string
  duration: string
  description: string
}

export interface Achievement {
  id: string
  title: string
  description: string
  date: string
  icon: React.ReactNode
}

export interface Section {
  id: string
  label: string
}
