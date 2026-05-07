"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Globe, 
  Zap, 
  Brain, 
  Calendar, 
  Palette, 
  Search,
  ArrowUpRight,
  Smartphone,
  BarChart3
} from "lucide-react"
import Link from "next/link"
import { AnimatedGradientBorder } from "@/components/ui/background-effects"

const services = [
  {
    icon: Palette,
    title: "Medical Website Design",
    description: "Custom-built, conversion-optimized websites for healthcare practices. Responsive, fast, and designed to attract and retain patients.",
    href: "/services/web-design",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Zap,
    title: "Healthcare Software Development",
    description: "Bespoke software solutions for clinics, hospitals, and medical practices. EHR systems, practice management, and custom applications.",
    href: "/services/software",
    color: "from-neon-blue to-neon-purple",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Intelligent automation for healthcare workflows. AI receptionists, appointment scheduling, smart patient workflows, and more.",
    href: "/services/ai-automation",
    color: "from-neon-purple to-neon-cyan",
  },
  {
    icon: Calendar,
    title: "Patient Booking Systems",
    description: "Streamlined appointment scheduling with automated reminders, online payments, and patient management integration.",
    href: "/services/booking-systems",
    color: "from-neon-cyan to-neon-purple",
  },
  {
    icon: Smartphone,
    title: "Medical Mobile Apps",
    description: "Native and cross-platform mobile applications for telemedicine, patient monitoring, and practice management.",
    href: "/services/mobile-apps",
    color: "from-neon-purple to-neon-blue",
  },
  {
    icon: BarChart3,
    title: "Healthcare Analytics & SEO",
    description: "Data-driven insights and SEO optimization to boost patient acquisition and improve online visibility for medical practices.",
    href: "/services/analytics-seo",
    color: "from-neon-blue to-neon-cyan",
  },
]

function ServiceCard({ 
  service, 
  index 
}: { 
  service: typeof services[0]
  index: number 
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <Link href={service.href} className="block group h-full">
        <div className="relative h-full p-[1px] rounded-2xl overflow-hidden">
          {/* Animated gradient border */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} animate-pulse`} />
          </div>
          <div className="absolute inset-0 bg-border/50 group-hover:bg-transparent transition-colors" />
          
          {/* Card content */}
          <div className="relative h-full bg-card/80 backdrop-blur-sm rounded-2xl p-8 transition-all duration-500 group-hover:bg-card/60">
            {/* Icon */}
            <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.color} bg-opacity-20 mb-6`}>
              <service.icon className="w-6 h-6 text-primary" />
            </div>

            {/* Title with arrow */}
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <ArrowUpRight className="w-5 h-5 text-muted-foreground opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              {service.description}
            </p>

            {/* Bottom accent line */}
            <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export function Services() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background pointer-events-none" />
      
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(to right, currentColor 1px, transparent 1px),
            linear-gradient(to bottom, currentColor 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            Our Services
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance"
          >
            Futuristic Healthcare{" "}
            <span className="gradient-text">Technology Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            From custom websites to AI-powered automation, we deliver cutting-edge digital 
            solutions designed specifically for healthcare professionals and medical institutions.
          </motion.p>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
