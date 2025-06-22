"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { TimelineItem } from '@/components/TimeLine'
import { education } from '@/data'

export const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 bg-muted/30 dark:bg-muted/30 light:bg-muted/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My academic background and qualifications
          </p>
        </motion.div>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />
          <div className="space-y-8">
            {education.map((edu, index) => (
              <TimelineItem
                key={edu.id}
                item={edu}
                index={index}
                type="education"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
