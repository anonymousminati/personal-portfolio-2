"use client"

import React, { useRef, useEffect, useState } from 'react'
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
  const [animatedValue, setAnimatedValue] = useState(0)

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        const duration = 700 // Animation duration in ms
        const steps = 10; // Number of animation steps
        const increment = skill.level / steps
        const stepDuration = duration / steps

        let currentStep = 0
        const interval = setInterval(() => {
          currentStep++
          const newValue = Math.min(currentStep * increment, skill.level)
          setAnimatedValue(newValue)
          
          if (currentStep >= steps) {
            clearInterval(interval)
            setAnimatedValue(skill.level) // Ensure final value is exact
          }
        }, stepDuration)

        return () => clearInterval(interval)
      }, delay * 1000) // Delay based on the prop

      return () => clearTimeout(timer)
    }
  }, [isInView, skill.level, delay])

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
        <motion.span 
          className="text-sm text-muted-foreground"
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ duration: 0.3, delay: delay + 0.5 }}
        >
          {Math.round(animatedValue)}%
        </motion.span>
      </div>
      <Progress value={animatedValue} className="h-2" />
    </motion.div>
  )
}
