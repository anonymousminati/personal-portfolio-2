import { 
  Code, 
  Palette, 
  Users, 
  MessageCircle, 
  Clock, 
  Target, 
  Award, 
  Github 
} from 'lucide-react'
import { Skill, Achievement } from '@/types'

export const skills: Skill[] = [
  { name: 'JavaScript', level: 95, category: 'technical', icon: <Code className="w-4 h-4" /> },
  { name: 'React', level: 90, category: 'technical', icon: <Code className="w-4 h-4" /> },
  { name: 'TypeScript', level: 85, category: 'technical', icon: <Code className="w-4 h-4" /> },
  { name: 'Node.js', level: 80, category: 'technical', icon: <Code className="w-4 h-4" /> },
  { name: 'UI/UX Design', level: 75, category: 'technical', icon: <Palette className="w-4 h-4" /> },
  { name: 'Leadership', level: 88, category: 'soft', icon: <Users className="w-4 h-4" /> },
  { name: 'Communication', level: 92, category: 'soft', icon: <MessageCircle className="w-4 h-4" /> },
  { name: 'Time Management', level: 85, category: 'soft', icon: <Clock className="w-4 h-4" /> },
  { name: 'Problem Solving', level: 90, category: 'soft', icon: <Target className="w-4 h-4" /> }
]

export const achievements: Achievement[] = [
  {
    id: '1',
    title: 'Best Developer Award',
    description: 'Recognized for outstanding contribution to product development',
    date: '2023',
    icon: <Award className="w-6 h-6" />
  },
  {
    id: '2',
    title: 'Open Source Contributor',
    description: 'Active contributor to major open source projects',
    date: '2022',
    icon: <Github className="w-6 h-6" />
  }
]
