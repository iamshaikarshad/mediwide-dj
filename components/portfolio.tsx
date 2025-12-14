"use client"

import { Card } from "@/components/ui/card"
import { Building2, Stethoscope, Heart, Activity } from "lucide-react"

const projects = [
  {
    icon: Building2,
    title: "Multi-Specialty Clinic Portal",
    description: "Complete patient management system with appointment scheduling, EMR integration, and billing.",
    stats: "50+ doctors, 10,000+ patients",
  },
  {
    icon: Stethoscope,
    title: "Telemedicine Platform",
    description: "HIPAA-compliant video consultation platform with prescription management and payment processing.",
    stats: "5,000+ consultations/month",
  },
  {
    icon: Heart,
    title: "Cardiology Practice Website",
    description: "Modern, responsive website with patient portal, educational resources, and online booking.",
    stats: "300% increase in online bookings",
  },
  {
    icon: Activity,
    title: "Healthcare Analytics Dashboard",
    description: "Real-time analytics and reporting system for hospital administration and performance tracking.",
    stats: "Processing 1M+ data points",
  },
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Trusted by Healthcare Professionals</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We've helped dozens of medical practices transform their digital presence and streamline their operations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-300 hover:scale-105"
            >
              <project.icon className="h-14 w-14 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">{project.description}</p>
              <div className="text-sm text-primary font-semibold">{project.stats}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
