"use client"

const educationData = [
  {
    degree: "B. Tech (Computer Science & Engineering)",
    institution: "IMSEC Ghaziabad",
    duration: "2022–2026",
    details: "CGPA: 8.12",
    description: "Core coursework in DSA, DBMS, Operating Systems, and system design.",
  },
  {
    degree: "Class XII (Senior Secondary)",
    institution: "Pt. Deen Dayal U.S.D. Vidyalaya, Kanpur",
    duration: "2021",
    details: "Percentage: 88.6%",
    description: "Strong foundation in mathematics and computer science.",
  },
  {
    degree: "Class X (Secondary)",
    institution: "Sr LS International Public School, Kannauj",
    duration: "2019",
    details: "Percentage: 88.16%",
    description: "Excellent performance across all subjects.",
  },
]

export default function EducationSection() {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            <span className="text-accent">Education</span> & Academics
          </h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="relative pl-8 pb-8 border-l-2 border-accent">
              {/* Timeline dot */}
              <div className="absolute left-[-8px] top-0 w-4 h-4 bg-accent rounded-full"></div>

              {/* Content */}
              <div className="bg-background/50 p-6 rounded-lg border border-border hover:border-accent/50 transition-all duration-300">
                <h3 className="text-2xl font-bold text-foreground mb-2">{edu.degree}</h3>
                <p className="text-accent font-semibold mb-1">{edu.institution}</p>
                <p className="text-foreground/60 text-sm mb-3">{edu.duration}</p>
                <p className="text-foreground/80 font-medium mb-2">{edu.details}</p>
                <p className="text-foreground/70">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
