




"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import { Project } from '@/types'

interface ProjectCardProps {
  project: Project
  index: number
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -10 }}
      className="h-full flex-shrink-0 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.333rem)]"
    >
      <div className="group h-full overflow-hidden rounded-xl bg-slate-900/50 backdrop-blur-sm border border-blue-500/20 hover:border-blue-400/40 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 relative">
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-blue-500/5 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl" />
        
        <div className="relative overflow-hidden rounded-t-xl">
          <div className="w-full h-48 bg-gradient-to-br from-blue-500/20 via-slate-800/50 to-cyan-500/20 flex items-center justify-center relative overflow-hidden">
            {/* Animated Background Pattern */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 opacity-10"
            >
              <div className="absolute top-4 left-4 w-8 h-8 border border-blue-400 rounded-full" />
              <div className="absolute top-8 right-8 w-6 h-6 border border-cyan-400 rounded-full" />
              <div className="absolute bottom-6 left-8 w-4 h-4 border border-blue-400 rounded-full" />
              <div className="absolute bottom-4 right-6 w-10 h-10 border border-cyan-400 rounded-full" />
            </motion.div>
            
            <div className="relative z-10">
              <Code className="w-16 h-16 text-blue-400/60" />
            </div>
          </div>
          
          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg shadow-lg shadow-blue-500/25 transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-slate-700/80 hover:bg-slate-600 text-white text-sm font-medium rounded-lg border border-slate-600 backdrop-blur-sm transition-all duration-300 flex items-center gap-2 hover:scale-105"
              >
                <FaGithub className="w-4 h-4" />
                Code
              </a>
            )}
          </div>
        </div>
        
        <div className="p-6 relative z-10">
          <div className="flex items-start justify-between mb-3">
            <motion.h3
              whileHover={{ x: 5 }}
              className="text-lg font-semibold text-white group-hover:text-blue-400 transition-colors duration-300"
            >
              {project.title}
            </motion.h3>
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 rounded-full text-xs font-medium text-blue-400"
              >
                Featured
              </motion.div>
            )}
          </div>
          
          <p className="text-slate-400 text-sm mb-4 leading-relaxed">
            {project.description}
          </p>
          
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: techIndex * 0.1 }}
                className="px-2 py-1 bg-slate-800/50 border border-slate-700/50 text-slate-300 text-xs rounded-md hover:border-blue-500/30 hover:text-blue-400 transition-all duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>
        
        {/* Bottom Glow Line */}
        <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>
    </motion.div>
  )
}
