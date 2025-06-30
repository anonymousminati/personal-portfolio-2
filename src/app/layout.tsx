import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Prathamesh Malode | Full Stack Developer',
  description: 'Portfolio of Prathamesh Malode, a Full Stack Web Developer specializing in modern, scalable architectures.',
  keywords: [
    'Prathamesh Malode',
    'Full Stack Developer',
    'Web Developer',
    'Portfolio',
    'React Developer',
    'Next.js Developer',
    'JavaScript Developer',
    'Frontend Developer',
    'Backend Developer',
    'Software Engineer',
    'Full Stack Web Developer',
    'Portfolio Website',
    'Web Development',
    'Software Development',
    'Programming',
    'Software Engineer Portfolio',
    'Web Development Portfolio',
    'React.js Portfolio',
    'Next.js Portfolio',  
    'JavaScript Portfolio',
    'Frontend Portfolio',
    'Backend Portfolio',
    'Software Engineer Projects',
    'Web Development Projects',
    'React.js Projects',
    'Next.js Projects',
    'JavaScript Projects',
    'Frontend Projects',
    'Backend Projects',
    'Software Engineer Skills',
    'Web Development Skills',
    'React.js Skills',
    'Next.js Skills',
    'JavaScript Skills',
    'Frontend Skills',
    'Backend Skills',
  ],
  authors: [
    {
      name: 'Prathamesh Malode',
      url: 'https://anonymousminati.github.io/personal-portfolio-2/',
    },
  ],
  creator: 'Prathamesh Malode',
  openGraph: {
    title: 'Prathamesh Malode | Full Stack Developer',
    description: 'Portfolio of Prathamesh Malode, a Full Stack Web Developer specializing in modern, scalable architectures.',
    url: 'https://anonymousminati.github.io/personal-portfolio-2/',
    siteName: 'Prathamesh Malode'
    }
  }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en"  suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}