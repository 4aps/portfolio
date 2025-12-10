"use client"

import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  project: {
    id: number
    title: string
    shortDescription: string
    techStack: string[]
  }
  onClick: () => void
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="group relative bg-card border border-border rounded-lg p-6 cursor-pointer transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-accent/20"
    >
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 rounded-lg transition-opacity duration-300"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Title */}
        <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
          {project.title}
        </h3>

        {/* Description */}
        <p className="text-foreground/70 mb-6 line-clamp-2 group-hover:text-foreground/80 transition-colors">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.techStack.slice(0, 3).map((tech) => (
            <span key={tech} className="px-2 py-1 bg-secondary/50 text-foreground/80 rounded text-xs font-medium">
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="px-2 py-1 text-accent text-xs font-medium">+{project.techStack.length - 3} more</span>
          )}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
          <span>View Details</span>
          <ArrowRight size={18} />
        </div>
      </div>
    </div>
  )
}
