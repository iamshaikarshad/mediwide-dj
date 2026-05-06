"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Brain, MessageSquare, Clock, Zap, BarChart3, Shield } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Brain,
    title: "AI Receptionists",
    description: "Intelligent voice and chat-based receptionists that handle scheduling, inquiries, and patient triage 24/7 without human intervention.",
    capabilities: ["Voice Recognition", "Natural Language Processing", "Multi-language Support", "Learning System"],
  },
  {
    icon: Clock,
    title: "Automated Scheduling",
    description: "Smart appointment systems that optimize doctor schedules, reduce no-shows with AI-powered reminders, and maximize efficiency.",
    capabilities: ["Schedule Optimization", "Smart Reminders", "Rescheduling Suggestions", "Slot Prediction"],
  },
  {
    icon: MessageSquare,
    title: "Patient Workflows",
    description: "Automate patient communications, follow-ups, and care coordination with intelligent workflow automation.",
    capabilities: ["Automated Follow-ups", "Patient Communication", "Care Coordination", "Documentation"],
  },
  {
    icon: BarChart3,
    title: "Healthcare Analytics",
    description: "Advanced AI-powered analytics dashboards providing actionable insights on practice performance and patient trends.",
    capabilities: ["Predictive Analytics", "Real-time Dashboards", "Trend Analysis", "Reporting"],
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Eliminate manual tasks with intelligent automation of billing, documentation, inventory management, and compliance.",
    capabilities: ["Task Automation", "Document Processing", "Inventory Management", "Compliance Tracking"],
  },
  {
    icon: Shield,
    title: "Smart Triage & Prioritization",
    description: "AI-driven patient triage systems that categorize urgency, route to appropriate providers, and optimize resource allocation.",
    capabilities: ["Risk Assessment", "Severity Scoring", "Provider Routing", "Resource Optimization"],
  },
]

export default function AIAutomationPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 100])

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        {/* Background effects */}
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
              <span className="text-sm text-primary font-medium">AI & Automation</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">The Future of</span>
              <span className="gradient-text">Healthcare Automation</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Transform your practice with cutting-edge AI systems. Automate repetitive tasks, 
              improve patient experiences, and unlock new operational efficiencies.
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
                Schedule a Demo
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border/50 rounded-full font-medium text-lg hover:bg-secondary/50 transition-all"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
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
            {/* Section header */}
            <div className="text-center mb-24">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-bold mb-6"
              >
                AI Capabilities
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Discover how AI is revolutionizing healthcare operations
              </motion.p>
            </div>

            {/* Features grid */}
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

      {/* Benefits Section */}
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
                Why Choose Our AI Solutions?
              </h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                { title: "Time Savings", value: "70%", description: "Reduce administrative burden by automating routine tasks" },
                { title: "Cost Reduction", value: "45%", description: "Lower operational costs through intelligent automation" },
                { title: "Patient Experience", value: "92%", description: "Satisfaction rate with AI-powered interactions" },
                { title: "Error Reduction", value: "99%", description: "Improve accuracy in scheduling and documentation" },
              ].map((benefit) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  className="glass rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold gradient-text mb-3">
                    {benefit.value}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how AI and automation can revolutionize your healthcare operations.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
            >
              Book Your Consultation
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
