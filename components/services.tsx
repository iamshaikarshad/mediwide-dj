"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Users, 
  Clock, 
  Globe, 
  ShieldCheck, 
  Briefcase, 
  HeartPulse,
  ArrowUpRight 
} from "lucide-react"
import Link from "next/link"
import { AnimatedGradientBorder } from "@/components/ui/background-effects"

const services = [
  {
    icon: HeartPulse,
    title: "Healthcare Recruitment",
    description: "Specialized recruitment for nurses, doctors, allied health professionals, and support staff across all healthcare settings.",
    href: "/services/healthcare-recruitment",
    color: "from-neon-cyan to-neon-blue",
  },
  {
    icon: Clock,
    title: "Temporary Staffing",
    description: "Flexible staffing solutions to cover short-term needs, seasonal demands, and unexpected vacancies with qualified professionals.",
    href: "/services/temporary-staffing",
    color: "from-neon-blue to-neon-purple",
  },
  {
    icon: Briefcase,
    title: "Permanent Staffing",
    description: "Find your next career move or build your dream team with our permanent placement services backed by industry expertise.",
    href: "/services/permanent-staffing",
    color: "from-neon-purple to-neon-cyan",
  },
  {
    icon: Globe,
    title: "International Recruitment",
    description: "Access global talent pools with our international recruitment services, including visa sponsorship and relocation support.",
    href: "/services/international-recruitment",
    color: "from-neon-cyan to-neon-purple",
  },
  {
    icon: ShieldCheck,
    title: "Compliance & Vetting",
    description: "Comprehensive compliance services including DBS checks, right to work verification, and professional registration validation.",
    href: "/services/compliance",
    color: "from-neon-purple to-neon-blue",
  },
  {
    icon: Users,
    title: "Workforce Solutions",
    description: "Strategic workforce planning and managed service solutions tailored to your organization&apos;s unique requirements.",
    href: "/services/workforce-solutions",
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
            Comprehensive Healthcare{" "}
            <span className="gradient-text">Staffing Solutions</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground leading-relaxed"
          >
            From temporary cover to permanent placements, we provide end-to-end recruitment 
            solutions designed specifically for the healthcare industry.
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
