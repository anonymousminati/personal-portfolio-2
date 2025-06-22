"use client"

import React, { useState, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'

interface AnimatedCounterProps {
  end: number
  duration?: number
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    let startTime: number
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1)
      setCount(Math.floor(progress * end))
      
      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration, isInView])

  return <span ref={ref}>{count}</span>
}