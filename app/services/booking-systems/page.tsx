"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, Bell, CreditCard, Users, Clock, Smartphone, RefreshCw, CheckCircle } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const features = [
  {
    icon: Calendar,
    title: "Online Booking",
    description: "24/7 self-service appointment booking that integrates seamlessly with your existing systems and workflows.",
    capabilities: ["Real-time Availability", "Service Selection", "Provider Preference", "Multi-location Support"],
  },
  {
    icon: Bell,
    title: "Smart Reminders",
    description: "Automated appointment reminders via SMS, email, and voice to dramatically reduce no-shows and late arrivals.",
    capabilities: ["Multi-channel Delivery", "Custom Timing", "Confirmation Requests", "Escalation Workflows"],
  },
  {
    icon: CreditCard,
    title: "Payment Integration",
    description: "Secure online payments, deposits, and co-pay collection integrated directly into the booking process.",
    capabilities: ["Deposit Collection", "Co-pay Processing", "Payment Plans", "Insurance Verification"],
  },
  {
    icon: RefreshCw,
    title: "Waitlist Management",
    description: "Intelligent waitlist systems that automatically fill cancellations and optimize your schedule utilization.",
    capabilities: ["Auto-fill Cancellations", "Priority Queuing", "Patient Notifications", "Slot Optimization"],
  },
  {
    icon: Users,
    title: "Patient Management",
    description: "Comprehensive patient profiles with booking history, preferences, and communication logs in one place.",
    capabilities: ["Profile Management", "Booking History", "Preferences", "Notes & Tags"],
  },
  {
    icon: Smartphone,
    title: "Mobile Experience",
    description: "Native mobile apps and responsive web interfaces that make booking effortless from any device.",
    capabilities: ["iOS & Android Apps", "Mobile-First Design", "Push Notifications", "Apple/Google Wallet"],
  },
]

const stats = [
  { value: "67%", label: "Reduction in No-Shows" },
  { value: "24/7", label: "Booking Availability" },
  { value: "85%", label: "Online Booking Adoption" },
  { value: "15min", label: "Average Time Saved per Booking" },
]

export default function BookingSystemsPage() {
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
              <span className="text-sm text-primary font-medium">Patient Booking Systems</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">Effortless Booking</span>
              <span className="gradient-text">Zero No-Shows</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              Modern appointment scheduling that patients love and staff rely on. 
              Reduce no-shows, fill your schedule, and free up your front desk.
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
                Get Started
                <ArrowUpRight className="w-5 h-5" />
              </Link>
              <Link
                href="/portfolio"
                className="inline-flex items-center gap-2 px-8 py-4 border border-border/50 rounded-full font-medium text-lg hover:bg-secondary/50 transition-all"
              >
                See Examples
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

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl sm:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
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
                Booking Features
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto"
              >
                Everything you need to streamline appointments
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

      {/* How It Works */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">
                How It Works
              </h2>
            </motion.div>

            <div className="space-y-6">
              {[
                { step: 1, title: "Patient Books Online", description: "Patients select their service, provider, and preferred time from your branded booking page or widget." },
                { step: 2, title: "Automatic Confirmation", description: "Instant confirmation sent via email and SMS with appointment details and any pre-visit instructions." },
                { step: 3, title: "Smart Reminders", description: "Automated reminders sent at optimal intervals with easy options to confirm, reschedule, or cancel." },
                { step: 4, title: "Check-In & Arrival", description: "Digital check-in, paperwork completion, and real-time updates keep everything running smoothly." },
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-6 items-start glass rounded-2xl p-8"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <span className="text-xl font-bold gradient-text">{item.step}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
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
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Streamline Bookings?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s build a booking system that patients love and your team relies on.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
            >
              Request a Demo
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
