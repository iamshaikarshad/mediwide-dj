"use client"

import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { 
  Zap, 
  Shield, 
  Clock, 
  MapPin, 
  CheckCircle2,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { MagneticButton } from "@/components/ui/magnetic-button"

const features = [
  {
    icon: Zap,
    title: "Rapid AI Deployment",
    description: "From scoping to live production in weeks, not months",
  },
  {
    icon: Shield,
    title: "Healthcare Compliant",
    description: "HIPAA-ready systems built with data security by default",
  },
  {
    icon: Clock,
    title: "Ongoing Optimisation",
    description: "Continuous model tuning and performance monitoring post-launch",
  },
  {
    icon: MapPin,
    title: "End-to-End Delivery",
    description: "Strategy, design, engineering, and integration under one roof",
  },
]

const timeline = [
  { year: "2016", event: "Founded with a focus on healthcare digital transformation" },
  { year: "2018", event: "Delivered first custom EHR integration for NHS-aligned practices" },
  { year: "2020", event: "Launched AI-powered patient triage and booking automation" },
  { year: "2022", event: "Expanded into enterprise hospital software development" },
  { year: "2024", event: "Deploying large language model solutions across clinical workflows" },
]

export function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50])

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-20 -left-40 w-80 h-80 rounded-full bg-neon-cyan/10 blur-3xl pointer-events-none"
      />
      <motion.div
        style={{ y: y2 }}
        className="absolute bottom-20 -right-40 w-80 h-80 rounded-full bg-neon-purple/10 blur-3xl pointer-events-none"
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left column - Content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
            >
              Why Choose Us
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl font-bold mb-6 text-balance"
            >
              Precision AI Delivery for{" "}
              <span className="gradient-text">Healthcare Systems</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground mb-8 leading-relaxed"
            >
              We specialise in designing and deploying AI systems purpose-built for healthcare. 
              From intelligent automation to clinical decision support, we turn complex 
              technology into reliable, compliant, real-world solutions.
            </motion.p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-start gap-3 p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-primary/10">
                    <feature.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <MagneticButton strength={0.15}>
                <Link
                  href="/about"
                  className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-all"
                >
                  Learn More About Us
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
            </motion.div>
          </div>

          {/* Right column - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-8">
              <h3 className="text-xl font-semibold mb-8 text-foreground">Our Journey</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-[7px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-primary via-neon-blue to-neon-purple" />
                
                {/* Timeline items */}
                <div className="space-y-8">
                  {timeline.map((item, index) => (
                    <motion.div
                      key={item.year}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      className="flex items-start gap-4 group"
                    >
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-primary border-4 border-background group-hover:scale-125 transition-transform" />
                      </div>
                      <div>
                        <span className="text-sm font-mono text-primary">{item.year}</span>
                        <p className="text-muted-foreground">{item.event}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative badge */}
            <motion.div
              initial={{ scale: 0, rotate: -12 }}
              animate={isInView ? { scale: 1, rotate: -12 } : { scale: 0, rotate: -12 }}
              transition={{ duration: 0.5, delay: 1, type: "spring" }}
              className="absolute -top-6 -right-6 px-4 py-2 bg-primary text-primary-foreground rounded-xl font-bold shadow-lg glow-cyan"
            >
              AI-Native
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
