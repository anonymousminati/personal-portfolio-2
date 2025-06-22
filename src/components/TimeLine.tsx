"use client"

import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Calendar } from 'lucide-react'
import { Experience, Education } from '@/types'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface TimelineItemProps {
  item: Experience | Education
  index: number
  type: 'experience' | 'education'
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ 
  item, 
  index, 
  type 
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative"
    >
      <div className="flex items-center gap-4">
        <div className="flex-shrink-0 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg" />
        <Card className="flex-1 border-border bg-card">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-lg">
                  {type === 'experience' ? (item as Experience).position : (item as Education).degree}
                </CardTitle>
                <CardDescription className="text-primary font-medium">
                  {type === 'experience' ? (item as Experience).company : (item as Education).institution}
                </CardDescription>
              </div>
              <Badge variant="outline" className="flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {item.duration}
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-3">{item.description}</p>
            {type === 'experience' && (item as Experience).technologies && (
              <div className="flex flex-wrap gap-2">
                {(item as Experience).technologies.map((tech) => (
                  <Badge key={tech} variant="secondary" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </motion.div>
  )
}
