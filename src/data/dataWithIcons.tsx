import { 
  Award, 
  TrendingUp,
  Users
} from 'lucide-react'
import { 
  SiJavascript,
  SiPython,
  SiDart,
  SiMysql,
  SiHtml5,
  SiReact,
  SiNextdotjs,
  SiFlutter,
  SiTailwindcss,
  SiMui,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiPostgresql,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTableau,
  SiFigma,
  SiGit,
  SiAmazonwebservices
} from 'react-icons/si'
import { 
  FaUsers,
  FaBrain,
  FaUserCog,
  FaLightbulb,
  FaTools,
  FaJava,
  FaDatabase,
  FaChartBar
} from 'react-icons/fa'
import { Skill, Achievement } from '@/types'

export const skills: Skill[] = [
  // Programming Languages
  { name: 'JavaScript', level: 95, category: 'technical', icon: <SiJavascript className="w-4 h-4 text-yellow-500" /> },
  { name: 'Python', level: 85, category: 'technical', icon: <SiPython className="w-4 h-4 text-blue-500" /> },
  { name: 'Java', level: 80, category: 'technical', icon: <FaJava className="w-4 h-4 text-red-600" /> },
  { name: 'Dart', level: 85, category: 'technical', icon: <SiDart className="w-4 h-4 text-blue-400" /> },
  { name: 'SQL', level: 85, category: 'technical', icon: <FaDatabase className="w-4 h-4 text-orange-500" /> },
  { name: 'HTML/CSS', level: 95, category: 'technical', icon: <SiHtml5 className="w-4 h-4 text-orange-600" /> },
  
  // Frontend Frameworks & Libraries
  { name: 'React.js', level: 95, category: 'technical', icon: <SiReact className="w-4 h-4 text-cyan-400" /> },
  { name: 'Next.js', level: 90, category: 'technical', icon: <SiNextdotjs className="w-4 h-4 text-white" /> },
  { name: 'Flutter', level: 85, category: 'technical', icon: <SiFlutter className="w-4 h-4 text-blue-400" /> },
  { name: 'Tailwind CSS', level: 90, category: 'technical', icon: <SiTailwindcss className="w-4 h-4 text-teal-400" /> },
  { name: 'Material UI', level: 85, category: 'technical', icon: <SiMui className="w-4 h-4 text-blue-600" /> },
  
  // Backend & APIs
  { name: 'Node.js', level: 90, category: 'technical', icon: <SiNodedotjs className="w-4 h-4 text-green-600" /> },
  { name: 'Express.js', level: 90, category: 'technical', icon: <SiExpress className="w-4 h-4 text-gray-600" /> },
  { name: 'REST APIs', level: 92, category: 'technical', icon: <FaTools className="w-4 h-4 text-purple-500" /> },
  
  // Databases
  { name: 'MongoDB', level: 88, category: 'technical', icon: <SiMongodb className="w-4 h-4 text-green-500" /> },
  { name: 'MySQL', level: 85, category: 'technical', icon: <SiMysql className="w-4 h-4 text-blue-600" /> },
  { name: 'Firebase', level: 85, category: 'technical', icon: <SiFirebase className="w-4 h-4 text-orange-400" /> },
  { name: 'PostgreSQL', level: 80, category: 'technical', icon: <SiPostgresql className="w-4 h-4 text-blue-700" /> },
  
  // Data Science & Analytics
  { name: 'Pandas', level: 85, category: 'technical', icon: <SiPandas className="w-4 h-4 text-purple-600" /> },
  { name: 'NumPy', level: 85, category: 'technical', icon: <SiNumpy className="w-4 h-4 text-blue-500" /> },
  { name: 'Machine Learning', level: 80, category: 'technical', icon: <SiScikitlearn className="w-4 h-4 text-orange-500" /> },
  { name: 'Power BI', level: 82, category: 'technical', icon: <FaChartBar className="w-4 h-4 text-yellow-500" /> },
  { name: 'Tableau', level: 80, category: 'technical', icon: <SiTableau className="w-4 h-4 text-blue-500" /> },
  
  // Design & Tools
  { name: 'UI/UX Design', level: 88, category: 'technical', icon: <FaLightbulb className="w-4 h-4 text-yellow-400" /> },
  { name: 'Figma', level: 85, category: 'technical', icon: <SiFigma className="w-4 h-4 text-purple-500" /> },
  { name: 'Git/GitHub', level: 90, category: 'technical', icon: <SiGit className="w-4 h-4 text-orange-600" /> },
  { name: 'AWS', level: 75, category: 'technical', icon: <SiAmazonwebservices className="w-4 h-4 text-orange-400" /> },
  
  // Soft Skills
  { name: 'Team Management', level: 90, category: 'soft', icon: <FaUsers className="w-4 h-4 text-blue-500" /> },
  { name: 'Problem Solving', level: 95, category: 'soft', icon: <FaBrain className="w-4 h-4 text-pink-500" /> },
  { name: 'Decision Making', level: 88, category: 'soft', icon: <FaLightbulb className="w-4 h-4 text-yellow-400" /> },
  { name: 'Troubleshooting', level: 92, category: 'soft', icon: <FaTools className="w-4 h-4 text-gray-600" /> },
  { name: 'Independent Work', level: 90, category: 'soft', icon: <FaUserCog className="w-4 h-4 text-green-500" /> }
]

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'High Academic Performance',
    description: 'Maintaining 9.32 CGPA in Bachelor of Engineering',
    date: '2022-2025',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Performance Optimization Expert',
    description: 'Improved application performance by 25% and data processing by 40%',
    date: '2024',
    icon: <TrendingUp className="w-6 h-6" />
  },
  {
    id: '3',
    title: 'User Engagement Enhancement',
    description: 'Boosted user engagement by 30% and retention rates by 20%',
    date: '2024',
    icon: <Users className="w-6 h-6" />
  },
  {
    id: '4',
    title: 'Multiple Technology Certifications',
    description: 'Advanced Data Science, Full Stack MERN, and Flutter Development',
    date: '2024-2025',
    icon: <Award className="w-6 h-6" />
  }
]
