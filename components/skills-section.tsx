"use client"

import { useState } from "react"
import { Code2, Database, GitBranch, Terminal } from "lucide-react"

const skillsData = [
  {
    category: "Languages",
    icon: Terminal,
    skills: [
      { name: "C++", description: "Used in competitive programming and DSA" },
      { name: "JavaScript", description: "Core language for web development" },
      { name: "TypeScript", description: "Type-safe development across projects" },
    ],
  },
  {
    category: "Frontend",
    icon: Code2,
    skills: [
      { name: "React.js", description: "Building interactive UI components" },
      { name: "Tailwind CSS", description: "Responsive and modern styling" },
      { name: "HTML/CSS", description: "Semantic markup and styling" },
    ],
  },
  {
    category: "Backend",
    icon: Database,
    skills: [
      { name: "Node.js", description: "Server-side JavaScript runtime" },
      { name: "MySQL", description: "Relational database design" },
      { name: "MongoDB", description: "NoSQL document database" },
    ],
  },
  {
    category: "Tools & Concepts",
    icon: GitBranch,
    skills: [
      { name: "Git/GitHub", description: "Version control and collaboration" },
      { name: "DSA", description: "Data structures and algorithms" },
      { name: "System Design", description: "Scalable architecture planning" },
    ],
  },
]

export default function SkillsSection() {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null)

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Skills &</span> Expertise
          </h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillsData.map((category) => {
            const Icon = category.icon
            return (
              <div key={category.category} className="space-y-4">
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                  <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
                </div>

                {/* Skills */}
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div
                      key={skill.name}
                      onMouseEnter={() => setHoveredSkill(skill.name)}
                      onMouseLeave={() => setHoveredSkill(null)}
                      className="relative group"
                    >
                      <div className="p-3 bg-background/50 rounded-lg border border-border hover:border-accent transition-all duration-200 cursor-pointer">
                        <p className="font-medium text-foreground group-hover:text-accent transition-colors">
                          {skill.name}
                        </p>
                        {hoveredSkill === skill.name && (
                          <p className="text-sm text-foreground/70 mt-2">{skill.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
