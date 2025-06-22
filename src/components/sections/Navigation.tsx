"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { Section } from '@/types'

interface NavigationProps {
  sections: Section[]
  activeSection: string
  isMenuOpen: boolean
  theme: 'light' | 'dark'
  onSectionClick: (sectionId: string) => void
  onMenuToggle: () => void
  onThemeToggle: () => void
}

export const Navigation: React.FC<NavigationProps> = ({
  sections,
  activeSection,
  isMenuOpen,
  theme,
  onSectionClick,
  onMenuToggle,
  onThemeToggle
}) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-blue-500/20 shadow-lg shadow-blue-500/10 dark:bg-slate-950/80 dark:border-blue-500/20 dark:shadow-blue-500/10 light:bg-background/80 light:border-blue-200/50 light:shadow-blue-200/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
          >
            <span className="relative">
              Portfolio
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg blur opacity-75" />
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => onSectionClick(section.id)}
                className={`relative px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg group ${
                  activeSection === section.id 
                    ? 'text-blue-400 bg-blue-500/10 shadow-lg shadow-blue-500/20 dark:text-blue-400 dark:bg-blue-500/10 dark:shadow-blue-500/20 light:text-blue-600 light:bg-blue-100 light:shadow-blue-200' 
                    : 'text-slate-300 hover:text-blue-400 hover:bg-blue-500/5 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-500/5 light:text-slate-700 light:hover:text-blue-600 light:hover:bg-blue-100/50'
                }`}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30 dark:bg-gradient-to-r dark:from-blue-500/20 dark:to-cyan-500/20 dark:border-blue-500/30 light:bg-gradient-to-r light:from-blue-200/50 light:to-cyan-200/50 light:border-blue-300/50"
                    style={{ borderRadius: 8 }}
                  />
                )}
                <span className="relative z-10">{section.label}</span>
                <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/0 to-cyan-500/0 group-hover:from-blue-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          <div className="flex items-center gap-2">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 dark:hover:bg-blue-500/20 light:bg-blue-100/50 light:border-blue-200/50 light:text-blue-600 light:hover:bg-blue-100"
              onClick={onThemeToggle}
            >
              {theme === 'dark' ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="md:hidden p-2 rounded-lg bg-blue-500/10 border border-blue-500/20 text-blue-400 hover:bg-blue-500/20 transition-all duration-300 dark:bg-blue-500/10 dark:border-blue-500/20 dark:text-blue-400 dark:hover:bg-blue-500/20 light:bg-blue-100/50 light:border-blue-200/50 light:text-blue-600 light:hover:bg-blue-100"
              onClick={onMenuToggle}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, height: 0 }}
            animate={{ opacity: 1, y: 0, height: 'auto' }}
            exit={{ opacity: 0, y: -20, height: 0 }}
            className="md:hidden py-4 border-t border-blue-500/20 bg-slate-950/95 backdrop-blur-xl rounded-b-lg dark:border-blue-500/20 dark:bg-slate-950/95 light:border-blue-200/50 light:bg-background/95"
          >
            {sections.map((section, index) => (
              <motion.button
                key={section.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                onClick={() => onSectionClick(section.id)}
                className={`block w-full text-left py-3 px-4 text-sm font-medium transition-all duration-300 rounded-lg mx-2 my-1 ${
                  activeSection === section.id 
                    ? 'text-blue-400 bg-blue-500/10 border border-blue-500/30 dark:text-blue-400 dark:bg-blue-500/10 dark:border-blue-500/30 light:text-blue-600 light:bg-blue-100 light:border-blue-300' 
                    : 'text-slate-300 hover:text-blue-400 hover:bg-blue-500/5 dark:text-slate-300 dark:hover:text-blue-400 dark:hover:bg-blue-500/5 light:text-slate-700 light:hover:text-blue-600 light:hover:bg-blue-100/50'
                }`}
              >
                {section.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  )
}
