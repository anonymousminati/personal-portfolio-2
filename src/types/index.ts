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
  duration?: string
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
  location?: string
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

export interface PersonalInfo {
  name: string
  title: string
  email: string
  phone: string
  location: string
  linkedin: string
  github: string
  leetcode?: string
  hackerrank?: string
  medium?: string
  summary: string
}

export interface Certification {
  id: string
  title: string
  issuer: string
  location?: string
  date: string
  credentialUrl?: string
}
