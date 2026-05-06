"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { useCounter } from "@/hooks/use-animations"

const stats = [
  {
    value: 150,
    suffix: "+",
    label: "AI Systems Deployed",
    description: "Live in healthcare environments worldwide",
  },
  {
    value: 40,
    suffix: "%",
    label: "Admin Time Saved",
    description: "Average reduction across client practices",
  },
  {
    value: 99,
    suffix: "%",
    label: "Uptime Guaranteed",
    description: "Across all production deployments",
  },
  {
    value: 3,
    suffix: "wk",
    label: "Average Time to Launch",
    description: "From kickoff to live deployment",
  },
]

function StatItem({ 
  stat, 
  index 
}: { 
  stat: typeof stats[0]
  index: number 
}) {
  const { count, ref } = useCounter(stat.value, 2500)

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative group"
    >
      <div className="text-center p-8 rounded-2xl bg-card/30 border border-border/50 hover:border-primary/30 transition-all duration-500 hover:bg-card/50">
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
        
        <div className="relative">
          {/* Number */}
          <div className="text-5xl sm:text-6xl font-bold mb-2">
            <span className="gradient-text">
              {count.toLocaleString()}{stat.suffix}
            </span>
          </div>
          
          {/* Label */}
          <h3 className="text-xl font-semibold text-foreground mb-2">
            {stat.label}
          </h3>
          
          {/* Description */}
          <p className="text-sm text-muted-foreground">
            {stat.description}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

export function Stats() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section
      ref={sectionRef}
      className="py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      {/* Animated grid */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at center, oklch(0.7 0.15 195 / 0.3) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
          >
            Our Impact
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl font-bold mb-6 text-balance"
          >
            Numbers That{" "}
            <span className="gradient-text">Speak for Themselves</span>
          </motion.h2>
        </div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
