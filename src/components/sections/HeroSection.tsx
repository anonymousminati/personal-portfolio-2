"use client"

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Code, Palette, ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  onScrollToSection: (sectionId: string) => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onScrollToSection }) => {
  const heroRef = useRef<HTMLElement>(null)
  const { scrollY } = useScroll()
  
  const heroY = useTransform(scrollY, [0, 500], [0, 150])
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0])
  const heroScale = useTransform(scrollY, [0, 300], [1, 1.1])

  return (
    <section id="hero" ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            rotate: { duration: 50, repeat: Infinity, ease: "linear" },
            scale: { duration: 8, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl dark:from-blue-500/10 dark:to-cyan-500/10 light:from-blue-200/20 light:to-cyan-200/20"
        />
        <motion.div
          animate={{ 
            rotate: -360,
            scale: [1.2, 1, 1.2]
          }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 6, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl dark:from-cyan-500/10 dark:to-blue-500/10 light:from-cyan-200/20 light:to-blue-200/20"
        />
      </div>

      <motion.div
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="text-center z-10 px-4 relative"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl dark:from-blue-500/20 dark:to-cyan-500/20 light:from-blue-200/30 light:to-cyan-200/30"
            />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full flex items-center justify-center border border-blue-500/30 dark:from-blue-500/20 dark:to-cyan-500/20 dark:border-blue-500/30 light:from-blue-200/30 light:to-cyan-200/30 light:border-blue-300/50">
              <Code className="w-16 h-16 text-blue-400 dark:text-blue-400 light:text-blue-600" />
            </div>
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="block text-slate-300 dark:text-slate-300 light:text-slate-700"
          >
            Hi, I&apos;m
          </motion.span>
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent relative"
          >
            John Doe
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full shadow-lg shadow-blue-500/50 dark:from-blue-500 dark:to-cyan-500 dark:shadow-blue-500/50 light:from-blue-600 light:to-cyan-600 light:shadow-blue-300/50"
            />
          </motion.span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-xl md:text-2xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed dark:text-slate-400 light:text-slate-600"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            Full Stack Developer & UI/UX Designer passionate about creating{' '}
          </motion.span>
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-blue-400 font-semibold dark:text-blue-400 light:text-blue-600"
          >
            exceptional digital experiences
          </motion.span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)" }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onScrollToSection('projects')}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-lg shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all duration-300 border border-blue-400/20 dark:from-blue-500 dark:to-cyan-500 dark:shadow-blue-500/25 dark:hover:shadow-blue-500/40 dark:border-blue-400/20 light:from-blue-600 light:to-cyan-600 light:shadow-blue-300/25 light:hover:shadow-blue-300/40 light:border-blue-500/20"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onScrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-blue-500/50 text-blue-400 font-semibold rounded-lg hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300 backdrop-blur-sm dark:border-blue-500/50 dark:text-blue-400 dark:hover:bg-blue-500/10 dark:hover:border-blue-400 light:border-blue-300/50 light:text-blue-600 light:hover:bg-blue-100/50 light:hover:border-blue-500"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Floating Elements */}
        <div className="absolute top-1/2 left-10 hidden lg:block">
          <motion.div
            animate={{ y: [-10, 10, -10], rotate: [0, 5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-16 h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 flex items-center justify-center dark:from-blue-500/20 dark:to-cyan-500/20 dark:border-blue-500/30 light:from-blue-200/30 light:to-cyan-200/30 light:border-blue-300/50"
          >
            <Code className="w-8 h-8 text-blue-400 dark:text-blue-400 light:text-blue-600" />
          </motion.div>
        </div>
        
        <div className="absolute top-1/3 right-10 hidden lg:block">
          <motion.div
            animate={{ y: [10, -10, 10], rotate: [0, -5, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full border border-cyan-500/30 flex items-center justify-center dark:from-cyan-500/20 dark:to-blue-500/20 dark:border-cyan-500/30 light:from-cyan-200/30 light:to-blue-200/30 light:border-cyan-300/50"
          >
            <Palette className="w-6 h-6 text-cyan-400 dark:text-cyan-400 light:text-cyan-600" />
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
      >
        <div className="p-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm dark:bg-blue-500/10 dark:border-blue-500/30 light:bg-blue-100/50 light:border-blue-300/50">
          <ChevronDown className="w-6 h-6 text-blue-400 dark:text-blue-400 light:text-blue-600" />
        </div>
      </motion.div>
    </section>
  )
}
