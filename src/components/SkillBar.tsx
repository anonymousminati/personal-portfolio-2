"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Skill } from '@/types'
import { Progress } from '@/components/ui/progress'

interface SkillBarProps {
  skill: Skill
  delay: number
}

export const SkillBar: React.FC<SkillBarProps> = ({ skill, delay }) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay }}
      className="space-y-2"
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          {skill.icon}
          <span className="text-sm font-medium text-foreground">{skill.name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{skill.level}%</span>
      </div>
      <Progress value={isInView ? skill.level : 0} className="h-2" />
    </motion.div>
  )
}
