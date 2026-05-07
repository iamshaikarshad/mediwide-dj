"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Video, Shield, Smartphone, FileText, Stethoscope, Globe, MonitorPlay, HeartPulse } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Video,
    title: "HD Video Consultations",
    description: "Crystal-clear video conferencing built for healthcare with features designed around clinical workflows.",
    capabilities: ["HD Video & Audio", "Screen Sharing", "Virtual Waiting Room", "Recording Options"],
  },
  {
    icon: Shield,
    title: "HIPAA Compliant",
    description: "End-to-end encryption and comprehensive compliance features to protect patient privacy at every step.",
    capabilities: ["E2E Encryption", "BAA Included", "Audit Logging", "Access Controls"],
  },
  {
    icon: FileText,
    title: "EHR Integration",
    description: "Seamless integration with your existing electronic health records for unified patient data and workflows.",
    capabilities: ["Real-time Sync", "Visit Documentation", "E-Prescriptions", "Lab Orders"],
  },
  {
    icon: Stethoscope,
    title: "Virtual Exam Tools",
    description: "Built-in tools for remote physical examinations, including peripheral device integration and AI assistance.",
    capabilities: ["Vital Monitoring", "Image Capture", "AI Diagnostics", "Device Integration"],
  },
  {
    icon: Smartphone,
    title: "Patient Mobile App",
    description: "Native iOS and Android apps that make virtual visits as easy as a video call with family.",
    capabilities: ["Easy Onboarding", "Push Notifications", "In-App Payments", "Visit History"],
  },
  {
    icon: Globe,
    title: "Multi-Location Support",
    description: "Unified telehealth platform that works across all your practice locations with centralized management.",
    capabilities: ["Provider Routing", "Location Settings", "Shared Resources", "Unified Analytics"],
  },
]

const benefits = [
  { icon: HeartPulse, title: "Expand Access", description: "Reach patients who can&apos;t easily visit in-person" },
  { icon: MonitorPlay, title: "Reduce No-Shows", description: "Virtual visits have 50% lower no-show rates" },
  { icon: Globe, title: "Grow Your Practice", description: "Serve patients beyond your geographic area" },
  { icon: Shield, title: "Stay Compliant", description: "Built-in HIPAA compliance and documentation" },
]

export default function TelehealthPage() {
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
              <span className="text-sm text-primary font-medium">Telehealth Solutions</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">Care Without</span>
              <span className="gradient-text">Boundaries</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Deliver exceptional virtual care with telehealth solutions designed for healthcare. 
              HIPAA-compliant, EHR-integrated, and patient-friendly.
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
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border/50 rounded-full font-medium text-lg hover:bg-secondary/50 transition-all"
              >
                View Case Studies
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

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-6 text-center"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
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
                Platform Features
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Everything you need for successful virtual care delivery
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

      {/* Stats Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: "500K+", label: "Virtual Visits Enabled" },
                { value: "99.9%", label: "Platform Uptime" },
                { value: "4.9/5", label: "Patient Satisfaction" },
                { value: "<1min", label: "Average Wait Time" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Launch Virtual Care?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s build a telehealth solution that expands your reach and improves patient access.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
            >
              Get Started
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
