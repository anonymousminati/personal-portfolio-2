"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { AnimatedCounter } from '@/components/AnimatedCounter'
import ProfileImage from '@/assets/images/ProfileImage.jpg'
import Image from 'next/image'

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/10 to-transparent dark:via-blue-950/10 light:via-blue-100/10" />
      <div className="max-w-7xl mx-auto">        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Full Stack Web Developer with hands-on experience in modern, scalable architectures
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg overflow-hidden flex items-center justify-center dark:from-primary/20 dark:to-secondary/20 light:from-blue-100/50 light:to-cyan-100/50">
              <div className="relative w-80 h-80 rounded-full overflow-hidden border-4 border-primary/30 shadow-2xl">
                <Image
                  src={ProfileImage}
                  alt="Prathamesh Malode - Full Stack Web Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I&apos;m a passionate Full Stack Web Developer with hands-on experience in building and optimizing 
              modern, scalable frontend architectures using React.js, Next.js, and microfrontend principles. 
              Currently pursuing Bachelor of Engineering with a stellar 9.32 CGPA.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              Proficient in designing responsive web applications, creating REST APIs, and deploying on 
              cloud platforms. I have a strong focus on performance optimization, modular design, and 
              test-driven development. I&apos;ve successfully improved user engagement by 30% and data 
              processing by 40% across multiple projects.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={7} />+
                </div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">
                  <AnimatedCounter end={1} />+
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
