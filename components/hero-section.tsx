"use client"

import { useEffect, useState } from "react"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className={`transition-all duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {/* Main Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-tight">
            Akhand Pratap Singh
          </h1>

          {/* Subtitle */}
          <p className="text-4xl sm:text-4xl text-accent font-semibold mb-6">
            Software Engineer
          </p>

          {/* Description */}
          <p className="text-lg text-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Building intelligent web applications with React, Node.js, and modern web technologies. Passionate about
            problem-solving, system design, and creating meaningful digital experiences.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button
              onClick={() => scrollToSection("projects")}
              className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105"
            >
              View Projects
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-8 py-3 border-2 border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 transition-all duration-200"
            >
              Contact Me
            </button>
          </div>

          {/* Contact Links */}
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/4aps"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card hover:bg-accent/20 transition-all duration-200 text-accent hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/4aps/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card hover:bg-accent/20 transition-all duration-200 text-accent hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:akhandpratapfpp@gmail.com"
              className="w-12 h-12 flex items-center justify-center rounded-full bg-card hover:bg-accent/20 transition-all duration-200 text-accent hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
