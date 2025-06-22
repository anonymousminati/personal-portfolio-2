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
    title: 'QuantPulse - Financial Analytics Platform',
    description: 'Advanced financial analytics and risk management platform with 10 modules including real-time market data, portfolio optimization, and quantitative modeling supporting 100+ stock tickers with 95%+ data accuracy.',
    image: '/project1.jpg',
    technologies: ['React', 'Node.js', 'Python', 'MongoDB', 'Plotly', 'Financial APIs'],
    githubUrl: 'https://github.com/prathameshmalode',
    featured: true,
    duration: 'May 2024 - May 2025'
  },
  {
    id: '2',
    title: 'Image Recognition Model Generator',
    description: 'Python-based object detection trainer using Streamlit, enabling image uploads, class labeling, and model training with River\'s incremental learning (GaussianNB) with real-time training progress and confidence thresholding.',
    image: '/project2.jpg',
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Computer Vision', 'Pillow'],
    githubUrl: 'https://github.com/prathameshmalode',
    featured: true,
    duration: 'April 2025'
  },
  {
    id: '3',
    title: 'IncluReach - Inclusive Job Portal',
    description: 'Built an inclusive job portal connecting job seekers with disabilities to inclusive employers. Features secure RESTful APIs for authentication, job postings, and application tracking with WCAG 2.1 compliant UI.',
    image: '/project3.jpg',
    technologies: ['React', 'Node.js', 'MongoDB', 'JWT', 'Tailwind CSS', 'Express'],
    githubUrl: 'https://github.com/prathameshmalode',
    featured: true,
    duration: 'March 2025 - April 2025'
  },
  {
    id: '4',
    title: 'SmartDoc - AI Document Assistant',
    description: 'AI-powered document assistant with React.js, Node.js, and Google Gemini API for text extraction, summarization, and AI-driven Q&A. Features sentiment analysis, Smart Document Writer, and secure document management.',
    image: '/project4.jpg',
    technologies: ['React.js', 'Node.js', 'Google Gemini API', 'Auth0', 'TailwindCSS', 'Framer Motion'],
    githubUrl: 'https://github.com/prathameshmalode',
    featured: false,
    duration: 'February 2025 - January 2025'
  }
]

export const experiences: Experience[] = [
  {
    id: '1',
    company: 'Comdata Innovation Pvt. Ltd.',
    position: 'Software Developer Engineer Intern',
    duration: 'Jan 2025 - Present',
    description: 'Spearheading high-impact projects for Maharashtra Police and Maersk Global, delivering VMS and HRMS solutions and revamping websites to enhance user experience and drive client satisfaction.',
    technologies: ['React', 'Node.js', 'Next.js', 'MongoDB', 'REST APIs']
  },
  {
    id: '2',
    company: 'Spiderweb Digital Pvt. Ltd.',
    position: 'Full Stack MERN Intern',
    duration: 'Jan 2024 - July 2024',
    description: 'Developed scalable frontends and backends using React.js, Next.js, and Node.js for 10+ businesses. Engineered REST APIs integrating Node.js and MongoDB, enhanced data processing speed by 40%. Redesigned 5 live websites boosting performance by 50% and user retention by 20%.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'MongoDB', 'REST APIs', 'MERN Stack']
  }
]

export const education: Education[] = [
  {
    id: '1',
    institution: 'Marathwada Mitra Mandal Institute of Technology',
    degree: 'Bachelor of Engineering',
    duration: 'August 2022 - May 2025',
    description: 'CGPA: 9.32. Focused on computer engineering with emphasis on full-stack development, data science, and modern web technologies.',
    location: 'Pune, Maharashtra, India'
  }
]

// Personal Information
export const personalInfo = {
  name: 'Prathamesh Shriram Malode',
  title: 'Full Stack Web Developer',
  email: 'prathameshmalode.2@gmail.com',
  phone: '+91 9359227932',
  location: 'Pune, Maharashtra, India',
  linkedin: 'https://www.linkedin.com/in/prathameshmalode/',
  github: 'https://github.com/anonymousminati',
  leetcode: 'https://leetcode.com/prathameshmalode',
  hackerrank: 'https://www.hackerrank.com/prathameshmalode',
  medium: 'https://medium.com/@prathameshmalode',
  summary: 'Full Stack Web Developer with hands-on experience in building and optimizing modern, scalable frontend architectures using React.js, Next.js, and microfrontend principles. Proficient in designing responsive web applications, creating REST APIs, and deploying on cloud platforms. Strong focus on performance, modular design, and test-driven development. Improved user engagement by 30% and data processing by 40% across multiple projects. Experienced in Agile environments and CI/CD pipelines.'
}

// Certifications
export const certifications = [
  {
    id: '1',
    title: 'Advanced Certificate in Data Science with AI-ML',
    issuer: 'UpGrad',
    location: 'Pune, IN',
    date: '2024',
    credentialUrl: '#'
  },
  {
    id: '2',
    title: 'Full Stack Web Development MERN Training',
    issuer: '3RI Technologies',
    location: 'Pune, IN',
    date: '2024',
    credentialUrl: '#'
  },
  {
    id: '3',
    title: 'Complete Flutter Development Bootcamp with Dart',
    issuer: 'UDEMY',
    date: '2024',
    credentialUrl: '#'
  }
]
