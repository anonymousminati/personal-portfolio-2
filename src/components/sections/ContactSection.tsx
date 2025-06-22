"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, GitBranch, ExternalLink } from 'lucide-react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>          <p className="text-muted-foreground max-w-2xl mx-auto">
            Let&apos;s discuss your next project or just say hello
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg dark:bg-primary/10 light:bg-blue-100/50">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Email</h3>
                <p className="text-muted-foreground">john.doe@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg dark:bg-primary/10 light:bg-blue-100/50">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Phone</h3>
                <p className="text-muted-foreground">+1 (555) 123-4567</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-lg dark:bg-primary/10 light:bg-blue-100/50">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold">Location</h3>
                <p className="text-muted-foreground">San Francisco, CA</p>
              </div>
            </div>            <Separator />
              <div className="space-y-4">
              <h3 className="font-semibold">Connect with me</h3>
              <div className="flex gap-4">
                <a 
                  href="https://github.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <GitBranch className="w-5 h-5" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Twitter Profile"
                  className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>                  <CardDescription>
                    I&apos;ll get back to you as soon as possible
                  </CardDescription>
              </CardHeader>              <CardContent>
                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                      <input
                        id="firstName"
                        type="text"
                        className="h-10 w-full px-3 py-2 bg-background rounded-md border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="John"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                      <input
                        id="lastName"
                        type="text"
                        className="h-10 w-full px-3 py-2 bg-background rounded-md border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        placeholder="Doe"
                        required
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="h-10 w-full px-3 py-2 bg-background rounded-md border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                      placeholder="john.doe@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-3 py-2 bg-background rounded-md border border-input text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 resize-none"
                      placeholder="Tell me about your project..."
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
