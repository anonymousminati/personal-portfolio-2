"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { achievements } from '@/data/dataWithIcons'

export const AchievementsSection: React.FC = () => {
  return (
    <section id="achievements" className="py-20 px-4 bg-muted/30 dark:bg-muted/30 light:bg-muted/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my career
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="border-border bg-card">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-primary/10 rounded-lg dark:bg-primary/10 light:bg-blue-100/50">
                      {achievement.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.description}</CardDescription>
                    </div>
                    <Badge variant="outline">{achievement.date}</Badge>
                  </div>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
