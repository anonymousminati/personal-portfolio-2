"use client"

import React, { useRef, useCallback } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from '@/components/ui/button'
import { projects } from '@/data'

export const ProjectsSection: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null)
  const scrollProjects = useCallback((direction: 'left' | 'right') => {
    if (projectsRef.current) {
      let columns = 1;
      if (window.innerWidth >= 1024) {
        columns = 3;
      } else if (window.innerWidth >= 768) {
        columns = 2;
      }
      
      const scrollAmount = projectsRef.current.offsetWidth / columns;
      projectsRef.current.scrollBy({
        left: direction === 'right' ? scrollAmount : -scrollAmount,
        behavior: 'smooth',
      });
    }
  }, []);

  return (
    <section id="projects" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/30 to-transparent dark:via-slate-900/30 light:via-muted/30" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="relative">
          <div 
            ref={projectsRef} 
            className="flex overflow-x-scroll snap-x snap-mandatory scroll-smooth pb-4 gap-8 no-scrollbar"
          >
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 flex justify-between px-4 pointer-events-none">
            <Button 
              size="icon" 
              className="rounded-full bg-primary/20 text-primary hover:bg-primary/40 pointer-events-auto shadow-lg dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/40 light:bg-blue-100/50 light:text-blue-600 light:hover:bg-blue-100"
              onClick={() => scrollProjects('left')}
            >
              <ArrowLeft className="w-6 h-6" />
            </Button>
            <Button 
              size="icon" 
              className="rounded-full bg-primary/20 text-primary hover:bg-primary/40 pointer-events-auto shadow-lg dark:bg-primary/20 dark:text-primary dark:hover:bg-primary/40 light:bg-blue-100/50 light:text-blue-600 light:hover:bg-blue-100"
              onClick={() => scrollProjects('right')}
            >
              <ArrowRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
