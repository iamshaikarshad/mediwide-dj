"use client"

import { motion } from "framer-motion"

const partners = [
  "NHS Trust",
  "Bupa Healthcare",
  "Nuffield Health",
  "Spire Healthcare",
  "Circle Health",
  "HCA Healthcare",
  "BMI Healthcare",
  "Ramsay Health Care",
]

export function TrustedBy() {
  return (
    <section className="py-16 relative overflow-hidden border-y border-border/30">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10 pointer-events-none" />
      
      <div className="container mx-auto px-4 mb-8">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-sm text-muted-foreground uppercase tracking-widest"
        >
          Trusted by leading healthcare organizations
        </motion.p>
      </div>
      
      {/* Marquee container */}
      <div className="relative">
        <motion.div
          animate={{ x: [0, -1920] }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 30,
              ease: "linear",
            },
          }}
          className="flex gap-12 items-center"
        >
          {/* Duplicate for seamless loop */}
          {[...partners, ...partners, ...partners, ...partners].map((partner, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-8 py-4 glass rounded-xl hover:border-primary/30 transition-colors cursor-pointer group"
            >
              <span className="text-lg font-medium text-muted-foreground group-hover:text-foreground transition-colors whitespace-nowrap">
                {partner}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
