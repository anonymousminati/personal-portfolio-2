"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Code, Users } from 'lucide-react'
import { SkillBar } from '@/components/SkillBar'
import { skills } from '@/data/dataWithIcons'

export const SkillsSection: React.FC = () => {
  const technicalSkills = skills.filter(skill => skill.category === 'technical')
  const softSkills = skills.filter(skill => skill.category === 'soft')

  return (
    <section id="skills" className="py-20 px-4 bg-slate-900/30 relative dark:bg-slate-900/30 light:bg-muted/50">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950/20 via-transparent to-cyan-950/20 dark:from-blue-950/20 dark:to-cyan-950/20 light:from-blue-100/20 light:to-cyan-100/20" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical and soft skills
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-8 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillBar key={skill.name} skill={skill} delay={index * 0.1} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
