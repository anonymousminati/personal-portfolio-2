"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Users } from 'lucide-react'
import { AnimatedCounter } from '@/components/AnimatedCounter'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent dark:via-blue-950/10 light:via-blue-100/10" />
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Passionate developer with over 5 years of experience creating innovative solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center dark:from-primary/20 dark:to-secondary/20 light:from-blue-100/50 light:to-cyan-100/50">
              <Users className="w-32 h-32 text-primary/40 dark:text-primary/40 light:text-blue-600/40" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate full-stack developer with a keen eye for design and a love for creating 
              seamless user experiences. With over 5 years in the industry, I&apos;ve worked with startups 
              and established companies to bring innovative ideas to life.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              My expertise spans across modern web technologies, and I&apos;m always eager to learn and 
              adapt to new challenges. I believe in writing clean, maintainable code and creating 
              solutions that make a real impact.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={50} />+
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={5} />+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
