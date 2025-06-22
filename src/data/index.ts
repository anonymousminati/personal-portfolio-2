import { Project, Experience, Education, Section } from '@/types'

export const sections: Section[] = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' }
]

export const projects: Project[] = [
  {
    id: '1',
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce solution with modern UI and robust backend.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '2',
    title: 'Task Management App',
    description: 'Collaborative task management with real-time updates and team features.',
    image: '/project2.jpg',
    technologies: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '3',
    title: 'Data Visualization Dashboard',
    description: 'Interactive dashboard for complex data analysis and reporting.',
    image: '/project3.jpg',
    technologies: ['D3.js', 'React', 'Python', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    featured: true
  },
  {
    id: '4',
    title: 'Social Media Clone',
    description: 'A social media platform with real-time chat and post features.',
    image: '/project4.jpg',
    technologies: ['Next.js', 'Supabase', 'TypeScript'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false
  },
  {
    id: '5',
    title: 'AI Chatbot Integration',
    description: 'Integrated a custom AI chatbot into an existing customer support system.',
    image: '/project5.jpg',
    technologies: ['Python', 'Flask', 'OpenAI API', 'React'],
    githubUrl: 'https://github.com',
    featured: true
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Tech Innovations Inc.',
    position: 'Senior Frontend Developer',
    duration: '2022 - Present',
    description: 'Leading frontend development for enterprise applications, mentoring junior developers, and implementing modern development practices.',
    technologies: ['React', 'TypeScript', 'Next.js', 'GraphQL']
  },
  {
    id: '2',
    company: 'Digital Solutions Ltd.',
    position: 'Full Stack Developer',
    duration: '2020 - 2022',
    description: 'Developed and maintained web applications, collaborated with cross-functional teams, and optimized application performance.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'AWS']
  }
]

export const education: Education[] = [
  {
    id: '1',
    institution: 'University of Technology',
    degree: 'Master of Computer Science',
    duration: '2018 - 2020',
    description: 'Specialized in software engineering and artificial intelligence. Graduated with honors.'
  },
  {
    id: '2',
    institution: 'State University',
    degree: 'Bachelor of Computer Science',
    duration: '2014 - 2018',
    description: 'Foundation in computer science fundamentals, algorithms, and software development.'
  }
]
