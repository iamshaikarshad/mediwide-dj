"use client"

import { useEffect, useState } from "react"
import { CheckCircle2 } from "lucide-react"

const features = [
  "HIPAA Compliance Expertise",
  "Healthcare Industry Experience",
  "Modern Technology Stack",
  "Responsive Design",
  "Ongoing Support & Maintenance",
  "Fast Turnaround Times",
]

export function About() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-10"
        style={{
          transform: `translateY(${(scrollY - 1000) * 0.3}px)`,
        }}
      >
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 text-balance">
              Why Choose <span className="text-primary">MediWide</span>?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              We specialize in creating digital solutions exclusively for medical professionals. Our deep understanding
              of healthcare workflows, compliance requirements, and patient care enables us to build products that truly
              serve your practice.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With years of experience in healthcare technology, we deliver secure, scalable, and user-friendly
              solutions that help you focus on what matters most—your patients.
            </p>
          </div>

          <div className="space-y-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur rounded-lg border border-border/50 hover:border-primary/50 transition-colors"
              >
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
