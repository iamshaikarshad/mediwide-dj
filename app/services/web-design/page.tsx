"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Palette, Globe, Smartphone, Search, Zap, Shield, Code, Layers } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Palette,
    title: "Custom Design",
    description: "Bespoke website designs tailored to your practice&apos;s brand identity, values, and patient demographics.",
    capabilities: ["Brand Integration", "Custom UI/UX", "Visual Identity", "Typography Systems"],
  },
  {
    icon: Smartphone,
    title: "Responsive & Mobile-First",
    description: "Websites that look stunning and function flawlessly across all devices, from desktops to smartphones.",
    capabilities: ["Mobile Optimization", "Touch-Friendly UI", "Cross-Browser Support", "Adaptive Layouts"],
  },
  {
    icon: Search,
    title: "Healthcare SEO",
    description: "Search engine optimization strategies specifically designed to help patients find your practice online.",
    capabilities: ["Local SEO", "Medical Keywords", "Google My Business", "Content Strategy"],
  },
  {
    icon: Zap,
    title: "Performance Optimized",
    description: "Lightning-fast load times and optimized performance to ensure the best user experience and search rankings.",
    capabilities: ["Core Web Vitals", "Image Optimization", "Caching Strategies", "CDN Integration"],
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "All websites built with healthcare compliance in mind, protecting patient data and meeting regulatory requirements.",
    capabilities: ["SSL Encryption", "Secure Forms", "Data Protection", "Privacy Compliance"],
  },
  {
    icon: Layers,
    title: "CMS Integration",
    description: "Easy-to-use content management systems that let your team update content without technical knowledge.",
    capabilities: ["WordPress/Headless CMS", "Easy Updates", "Staff Training", "Content Scheduling"],
  },
]

const processSteps = [
  { step: "01", title: "Discovery", description: "We learn about your practice, patients, and goals" },
  { step: "02", title: "Strategy", description: "Develop a comprehensive design and content strategy" },
  { step: "03", title: "Design", description: "Create stunning mockups for your approval" },
  { step: "04", title: "Development", description: "Build your website with clean, performant code" },
  { step: "05", title: "Launch", description: "Deploy, test, and ensure everything works perfectly" },
  { step: "06", title: "Support", description: "Ongoing maintenance, updates, and optimization" },
]

export default function WebDesignPage() {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/10 via-neon-purple/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-background pointer-events-none opacity-40" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block px-4 py-2 glass rounded-full border border-primary/20 mb-8"
            >
              <span className="text-sm text-primary font-medium">Medical Web Design</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">Websites That</span>
              <span className="gradient-text">Convert Patients</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Beautiful, fast, and conversion-optimized websites designed specifically for healthcare 
              practices. Stand out online and attract more patients.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12"
            >
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
              >
                Get a Quote
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border/50 rounded-full font-medium text-lg hover:bg-secondary/50 transition-all"
              >
                View Portfolio
              </Link>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-2 bg-primary rounded-full"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section ref={sectionRef} className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neon-purple/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-bold mb-6"
              >
                What We Deliver
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Everything your healthcare practice needs to succeed online
              </motion.p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Feature = feature.icon
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group glass rounded-2xl p-8 hover:bg-card/50 transition-all duration-300"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                      <Feature className="w-6 h-6 text-primary" />
                    </div>

                    <h3 className="text-2xl font-semibold mb-3 text-foreground">
                      {feature.title}
                    </h3>

                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {feature.description}
                    </p>

                    <div className="space-y-2">
                      {feature.capabilities.map((cap) => (
                        <div key={cap} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {cap}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                Our Process
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                A proven approach to delivering exceptional healthcare websites
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-2xl p-8"
                >
                  <div className="text-4xl font-bold gradient-text mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-neon-purple/5 to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready for a Website That Works?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s create a digital presence that attracts patients and grows your practice.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
            >
              Start Your Project
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
