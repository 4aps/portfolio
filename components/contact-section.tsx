"use client"

import type React from "react"

import { useState } from "react"
import { Mail, Github, Linkedin, CheckCircle } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required"
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters"
    }

    return newErrors
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()
  const newErrors = validateForm()

  if (Object.keys(newErrors).length === 0) {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!res.ok) {
        console.error("Form submission failed:", await res.text())
        return
      }

      // success UI
      setSubmitted(true)
      setFormData({ name: "", email: "", message: "" })
      setTimeout(() => setSubmitted(false), 5000)

    } catch (error) {
      console.error("Network error:", error)
    }
  } else {
    setErrors(newErrors)
  }
}

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-accent rounded"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Let's Connect</h3>
              <p className="text-foreground/70 leading-relaxed mb-8">
                I'm always interested in hearing about new projects and opportunities. Feel free to reach out if you'd
                like to collaborate or just say hello!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              {/* Email */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors mt-1">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Email</p>
                  <a
                    href="mailto:akhandpratapfpp@gmail.com"
                    className="text-accent hover:text-accent/80 transition-colors break-all"
                  >
                    akhandpratapfpp@gmail.com
                  </a>
                </div>
              </div>

              {/* GitHub */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors mt-1">
                  <Github className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">GitHub</p>
                  <a
                    href="https://github.com/4aps"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    github.com/4aps
                  </a>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex gap-4 items-start group">
                <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors mt-1">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">LinkedIn</p>
                  <a
                    href="https://www.linkedin.com/in/4aps/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 transition-colors"
                  >
                    linkedin.com/in/4aps
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6 bg-background/50 p-8 rounded-lg border border-border">
              {/* Success Message */}
              {submitted && (
                <div className="flex gap-3 items-center p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <p className="text-green-400 font-medium">Thanks for reaching out! I'll get back to you soon.</p>
                </div>
              )}

              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-input border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all ${
                    errors.name ? "border-red-500/50" : "border-border"
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 bg-input border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all ${
                    errors.email ? "border-red-500/50" : "border-border"
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              {/* Message Input */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-2 bg-input border rounded-lg text-foreground placeholder-foreground/40 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all resize-none ${
                    errors.message ? "border-red-500/50" : "border-border"
                  }`}
                  placeholder="Your message..."
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-6 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all duration-200 transform hover:scale-105 active:scale-95"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
