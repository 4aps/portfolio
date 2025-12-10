"use client"

import { Award, Trophy, Briefcase as Certificate } from "lucide-react"

const achievementsData = [
  {
    icon: Trophy,
    title: "Google Club Hackathon - GLBITM (2023)",
    description: "Built an intelligent quiz generator using GPT-API and React.",
    details: "Leveraged artificial intelligence to create dynamic, personalized quiz experiences.",
  },
  {
    icon: Certificate,
    title: "Ethical Hacker Certificate",
    description: "Cisco Networking Academy certification in cybersecurity.",
    details: "Comprehensive training in network security, ethical hacking, and defense mechanisms.",
  },
  {
    icon: Award,
    title: "Competitive Programming",
    description: "Regular problem-solving across multiple online platforms.",
    details: "Consistently improving coding skills and algorithmic thinking through DSA practice.",
  },
]

export default function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Achievements</span> & Awards
          </h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => {
            const Icon = achievement.icon
            return (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-8 hover:border-accent transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
              >
                {/* Icon */}
                <div className="mb-6 inline-flex p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                  <Icon className="w-8 h-8 text-accent" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                  {achievement.title}
                </h3>

                {/* Description */}
                <p className="text-foreground/80 mb-4">{achievement.description}</p>

                {/* Details */}
                <p className="text-foreground/60 text-sm leading-relaxed">{achievement.details}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
