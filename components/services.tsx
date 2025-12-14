"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Globe, Database, Shield, Smartphone, Code, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Medical Websites",
    description:
      "Professional, HIPAA-compliant websites designed specifically for healthcare providers and medical practices.",
  },
  {
    icon: Database,
    title: "Patient Management Systems",
    description:
      "Custom software solutions for managing patient records, appointments, and healthcare workflows efficiently.",
  },
  {
    icon: Shield,
    title: "Secure Data Solutions",
    description:
      "Enterprise-grade security and compliance for protecting sensitive medical data and patient information.",
  },
  {
    icon: Smartphone,
    title: "Mobile Applications",
    description: "Native and cross-platform mobile apps for telemedicine, patient engagement, and healthcare delivery.",
  },
  {
    icon: Code,
    title: "Custom Development",
    description: "Tailored software solutions built to meet your unique medical practice requirements and workflows.",
  },
  {
    icon: Zap,
    title: "Integration Services",
    description: "Seamless integration with existing EMR/EHR systems, billing software, and healthcare platforms.",
  },
]

export function Services() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services" ref={sectionRef} className="py-32 bg-secondary/30 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Comprehensive Digital Services</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            From concept to deployment, we deliver complete web and software solutions tailored for the healthcare
            industry.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className={`p-8 bg-card/50 backdrop-blur border-border/50 hover:border-primary/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
            >
              <service.icon className="h-12 w-12 text-primary mb-6" />
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
