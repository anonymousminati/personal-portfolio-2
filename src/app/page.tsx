"use client"

import React, { useState, useEffect, useCallback } from 'react'
import { 
  Navigation,
  HeroSection,
  AboutSection,
  SkillsSection,
  ExperienceSection,
  EducationSection,
  ProjectsSection,
  AchievementsSection,
  ContactSection,
  Footer
} from '@/components'
import { sections } from '@/data'

export default function Home() {
  const [activeSection, setActiveSection] = useState('hero')
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = ['hero', 'about', 'skills', 'experience', 'education', 'projects', 'achievements', 'contact']
      const scrollPosition = window.scrollY + 100

      for (const section of sectionIds) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'bg-slate-950 text-white' : 'bg-background text-foreground'} relative overflow-x-hidden`}>
      {/* Background Effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950 pointer-events-none dark:from-slate-950 dark:via-blue-950/20 dark:to-slate-950 light:from-background light:via-blue-100/20 light:to-background" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] pointer-events-none dark:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)] light:bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.05),transparent_50%)]" />
      
      <Navigation
        sections={sections}
        activeSection={activeSection}
        isMenuOpen={isMenuOpen}
        theme={theme}
        onSectionClick={scrollToSection}
        onMenuToggle={() => setIsMenuOpen(!isMenuOpen)}
        onThemeToggle={toggleTheme}
      />

      <HeroSection onScrollToSection={scrollToSection} />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <EducationSection />
      <ProjectsSection />
      <AchievementsSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
