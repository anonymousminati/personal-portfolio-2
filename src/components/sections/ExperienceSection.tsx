"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TimelineItem } from '@/components/TimeLine'
import { experiences } from '@/data'

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My journey through various roles and companies
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <TimelineItem
                key={experience.id}
                item={experience}
                index={index}
                type="experience"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
