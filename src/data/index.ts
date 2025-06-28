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
    id: 'taxim',
    title: 'Taxim - AI-Powered Mathematical Animation Studio',
    description: 'An innovative platform that transforms natural language prompts into stunning mathematical animations using Manim and Google Gemini AI. Features real-time animation rendering, intelligent error handling, session management, and a fully containerized backend with automated CI/CD deployment.',
    image: '/images/taxim-cover.png',
    technologies: ['Node.js', 'Express.js', 'Google Gemini AI', 'Docker', 'Manim', 'FFmpeg', 'Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Radix UI', 'GitHub Actions'],
    githubUrl: 'https://github.com/anonymousminati/taxim-frontend',
    liveUrl: 'https://anonymousminati.github.io/taxim-frontend/',
    featured: true,
    duration: 'Dec 2024 - Present'
  },
  {
    id: 'quantpulse',
    title: 'QuantPulse',
    description: 'A comprehensive financial analytics and risk management platform built with Python and Streamlit. It empowers traders with advanced tools for market analysis, portfolio optimization, and risk management, featuring 10+ modules, real-time data for over 100 tickers, and backtesting with 12+ technical indicators.',
    image: '/images/QuantPulse-cover.png',
    technologies: ['Python', 'Streamlit', 'Pandas', 'NumPy', 'yFinance', 'Scikit-learn', 'BeautifulSoup', 'NLTK'],
    githubUrl: 'https://github.com/anonymousminati/QuantPulse',
    liveUrl: 'https://quantpulsebyprathameshmalode.streamlit.app/',
    featured: true,
    duration: 'Jun 2025 - Jun 2025'
  },
  {
    id: 'volco',
    title: 'VolCo - Volunteer Coordination Platform',
    description: 'A mobile-friendly platform with real-time mapping for volunteer and NGO tracking. It includes a recommendation engine that increased matching efficiency by 35% and an alert system for rapid volunteer mobilization during emergencies.',
    image: '/images/IMG-20250303-WA0005.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'REST APIs', 'Android Development'],
    githubUrl: 'https://github.com/anonymousminati/VolCo',
    featured: true,
    duration: 'Jan 2025 - Jun 2025'
  },
  {
    id: 'mockinterviewai',
    title: 'MockInterviewAI',
    description: 'An AI-powered platform to help users prepare for interviews. It simulates real-time interview scenarios using Gemini APIs and provides personalized feedback, with a scalable backend using PostgreSQL and Drizzle ORM.',
    image: '/images/Screenshot_2025-03-12_121948.png',
    technologies: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Express.js', 'PostgreSQL', 'Drizzle ORM', 'Google Gemini'],
    githubUrl: 'https://github.com/anonymousminati/MockInterviewAI',
    featured: true,
    duration: 'Jan 2025 - Feb 2025'
  },  {
    id: 'pdfgpt',
    title: 'PDFGPT: PDF-based Q&A with Google Gemini AI',
    description: 'A Streamlit application allowing users to upload PDF documents and ask questions based on their content. It uses a FAISS vector database for efficient text retrieval and Google Gemini AI to generate context-aware answers.',
    image: '/images/Demo.png',
    technologies: ['Python', 'Streamlit', 'Google Gemini', 'FAISS', 'PyPDF2', 'Sentence Transformer', 'VectorDB'],
    githubUrl: 'https://github.com/anonymousminati/PDFGPT',
    liveUrl: 'https://smartdoc-ai.onrender.com/dashboard',
    featured: true,
    duration: 'Apr 2025 - Apr 2025'
  },
  {
    id: 'hottest-ml-topics',
    title: 'Hottest Topics in Machine Learning',
    description: 'This project explores the hottest topics in machine learning using NIPS papers. It involves text preprocessing, exploratory data analysis (EDA), and Latent Dirichlet Allocation (LDA) for topic modeling to identify key research trends.',
    image: '/images/word_cloud.png',
    technologies: ['Python', 'Data Science', 'LDA', 'EDA', 'WordCloud', 'Csv', 'Data Visualization'],
    githubUrl: 'https://github.com/anonymousminati/hottest-topics-ml',
    featured: true,
    duration: 'Apr 2025 - Apr 2025'
  },
  {
    id: 'image-recognition-model',
    title: 'Image Recognition Model Generation',
    description: 'A Streamlit-based application for training and testing object detection models. Users can upload and label images, train a model using transfer learning, and test it with new images in batch mode.',
    image: '/images/object_detect_algorithm_diagram.png',
    technologies: ['Python', 'Streamlit', 'Machine Learning', 'Image Processing', 'Data Handling', 'Model Persistence'],
    githubUrl: 'https://github.com/anonymousminati/image-recognition-model',
    featured: true,
    duration: 'Apr 2025 - Apr 2025'
  },  {
    id: 'comparison-sorting-algorithms',
    title: 'Comparison of Sorting Algorithms',
    description: 'A Next.js web application that visualizes various sorting algorithms with dynamic animations. It allows users to adjust array sizes and speeds to better understand how each algorithm works.',
    image: '/images/Screenshot_2025-04-20_130855.png',
    technologies: ['Next.js', 'React.js', 'JavaScript', 'DSA', 'Algorithms'],
    githubUrl: 'https://github.com/anonymousminati/Comparison-Sorting-Algorithms',
    liveUrl: 'https://comparison-sorting-algorithms-beige.vercel.app/',
    featured: false,
    duration: 'Oct 2024 - Dec 2024'
  },
  {
    id: 'police-stress-management',
    title: 'Police Stress Management System',
    description: 'An advanced system integrating emotion detection, personalized music recommendations, and an AI chatbot to reduce stress among police officers. Implemented using TensorFlow for emotion detection and Gemini AI for the chatbot.',
    image: '/images/WhatsApp_Image_2025-03-12_at_11.58.01.jpg',
    technologies: ['Flutter', 'Dart', 'Firebase', 'Cloud Firestore', 'TensorFlow', 'GetX', 'Google Gemini'],
    githubUrl: 'https://github.com/anonymousminati/stressShield',
    featured: false,
    duration: 'Nov 2023 - Feb 2024'
  },
  {
    id: 'hr-dashboard-tableau',
    title: 'HR Dashboard in Tableau',
    description: 'An interactive HR dashboard built in Tableau to analyze over 10,000 employee records. It visualizes demographics, performance, and income trends to provide actionable insights for HR teams.',
    image: '/images/Screenshot_2025-04-20_130731.png',
    technologies: ['Tableau', 'Tableau Online', 'Data Science', 'Data Visualization', 'Python', 'Faker'],
    githubUrl: 'https://github.com/anonymousminati/hr-dashboard-tableau',
    featured: false,
    duration: 'Jan 2025 - Jan 2025'
  },
  {
    id: 'house-price-prediction',
    title: 'House Price Prediction',
    description: 'A machine learning project that predicts house prices using a linear regression model, achieving an R-squared of 0.700. Identified key predictors like square footage, waterfront access, and grade through exploratory data analysis.',
    image: '/images/output.png',
    technologies: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'Seaborn'],
    githubUrl: 'https://github.com/anonymousminati/House-Prices-Prediction-USA',
    featured: false,
    duration: 'Aug 2024 - Sep 2024'
  },
  {
    id: 'football-webscrap',
    title: 'Football Web Scraper',
    description: 'A web scraper built to collect and analyze data from a soccer website, demonstrating skills in data extraction and analysis using Python libraries.',
    image: '/images/football-placeholder.png',
    technologies: ['Python', 'Pandas', 'NumPy', 'Beautiful Soup', 'Data Science'],
    githubUrl: 'https://github.com/anonymousminati/football-webscrap',
    featured: false,
    duration: 'Dec 2024 - Jan 2025'
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
