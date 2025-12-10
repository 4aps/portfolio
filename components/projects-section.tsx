"use client"

import { useState } from "react"
import { X } from "lucide-react"
import ProjectCard from "./project-card"

const projectsData = [
  {
    id: 1,
    title: "RELY Social App",
    description: "A modern social media application with real-time interactions",
    shortDescription: "Full-featured social media platform built with modern web technologies",
    techStack: ["Vite", "React", "TypeScript", "Tailwind CSS", "Appwrite"],
    features: [
      "User authentication and profiles",
      "Create, edit, and delete posts",
      "Real-time notifications",
      "Cloud-based storage with Appwrite",
      "Responsive design for all devices",
    ],
    link: "https://github.com/4aps/rely",
  },
  {
    id: 2,
    title: "HYPE-0 Agent",
    description: "AI-powered web-based project builder with live code execution",
    shortDescription: "Browser-based IDE with AI integration and WebContainers",
    techStack: ["React", "TypeScript", "Node.js", "WebContainers", "Tailwind CSS"],
    features: [
      "In-browser code editor with Monaco",
      "Live code preview and execution",
      "AI prompt integration for code generation",
      "File explorer and project management",
      "Multiple template support",
    ],
    link: "https://github.com/4aps/hype-0",
  },
]

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Featured</span> Projects
          </h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
          ))}
        </div>

        {/* Modal */}
        {selectedProject && (
          <div
            className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="bg-card rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-foreground/50 hover:text-foreground transition-colors"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-2">Overview</h4>
                  <p className="text-foreground/80 leading-relaxed">{selectedProject.description}</p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.techStack.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="text-lg font-semibold text-accent mb-3">Key Features</h4>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, idx) => (
                      <li key={idx} className="flex gap-3 text-foreground/80">
                        <span className="text-accent mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Button */}
                <a
                  href={selectedProject.link}
                  className="inline-block px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200"
                >
                  View Project
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
