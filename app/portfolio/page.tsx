"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const projects = [
  {
    title: "Advanced Clinic Management System",
    description: "Complete practice management platform with patient records, appointment scheduling, billing, and real-time analytics for a 50-provider clinic network.",
    metrics: [
      { label: "Efficiency Gain", value: "45%" },
      { label: "Patient Satisfaction", value: "4.9/5" },
      { label: "Time Saved Monthly", value: "300hrs" },
    ],
    tags: ["Web App", "Backend", "Database Design"],
    image: "gradient-cyan-to-blue",
  },
  {
    title: "AI-Powered Telehealth Platform",
    description: "Comprehensive telemedicine solution with AI triage, video consultations, prescription management, and automated patient follow-ups.",
    metrics: [
      { label: "Active Users", value: "10K+" },
      { label: "Daily Sessions", value: "500+" },
      { label: "Response Rate", value: "98%" },
    ],
    tags: ["AI Integration", "Real-time Video", "Mobile App"],
    image: "gradient-purple-to-pink",
  },
  {
    title: "Medical Practice Website Redesign",
    description: "Modern, conversion-optimized website for a multi-specialty practice with patient portal, online booking, and SEO optimization.",
    metrics: [
      { label: "Traffic Increase", value: "280%" },
      { label: "Booking Rate", value: "+156%" },
      { label: "Page Speed", value: "98 Lighthouse" },
    ],
    tags: ["Web Design", "SEO", "Patient Portal"],
    image: "gradient-teal-to-cyan",
  },
  {
    title: "Hospital Dashboard & Analytics",
    description: "Real-time operational dashboard for hospital administrators with patient flow tracking, resource utilization, and predictive analytics.",
    metrics: [
      { label: "Data Points", value: "1M+" },
      { label: "Queries/Day", value: "50K+" },
      { label: "Uptime", value: "99.99%" },
    ],
    tags: ["Dashboard", "Analytics", "Data Visualization"],
    image: "gradient-blue-to-purple",
  },
  {
    title: "Patient Booking & Reminder System",
    description: "Automated appointment system with AI-powered reminders, rescheduling suggestions, and integration with major EMR platforms.",
    metrics: [
      { label: "No-show Reduction", value: "68%" },
      { label: "Automation Rate", value: "92%" },
      { label: "Integration Scope", value: "8 EMRs" },
    ],
    tags: ["Automation", "AI", "Integration"],
    image: "gradient-magenta-to-cyan",
  },
  {
    title: "Medical Branding & Web Presence",
    description: "Complete branding overhaul and website launch for a specialty medical practice, including logo design, brand guidelines, and digital marketing.",
    metrics: [
      { label: "Brand Recognition", value: "High" },
      { label: "Lead Generation", value: "+125%" },
      { label: "Social Followers", value: "15K+" },
    ],
    tags: ["Branding", "Web Design", "Marketing"],
    image: "gradient-orange-to-pink",
  },
]

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  const y = useTransform(scrollYProgress, [0, 0.2], [100, 0])

  return (
    <motion.div
      ref={ref}
      style={{ opacity, y }}
      className="mb-24 last:mb-0"
    >
      <div className="relative group cursor-pointer">
        {/* Background gradient */}
        <div className={`absolute -inset-1 bg-gradient-to-r ${
          project.image === "gradient-cyan-to-blue" ? "from-neon-cyan/30 to-neon-blue/30" :
          project.image === "gradient-purple-to-pink" ? "from-neon-purple/30 to-neon-cyan/30" :
          project.image === "gradient-teal-to-cyan" ? "from-neon-cyan/30 to-neon-purple/30" :
          project.image === "gradient-blue-to-purple" ? "from-neon-blue/30 to-neon-purple/30" :
          project.image === "gradient-magenta-to-cyan" ? "from-neon-purple/30 to-neon-cyan/30" :
          "from-neon-cyan/30 via-neon-blue/30 to-neon-purple/30"
        } rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur` />}

        <div className="relative glass rounded-3xl overflow-hidden">
          {/* Content grid */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 p-8 lg:p-12">
            {/* Left side - Info */}
            <div className="flex flex-col justify-between">
              <div>
                {/* Project number */}
                <div className="text-sm font-medium text-primary/60 mb-4">
                  PROJECT 0{index + 1}
                </div>

                {/* Title */}
                <h3 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight text-balance">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* View project link */}
              <motion.div
                whileHover={{ x: 8 }}
                className="inline-flex items-center gap-2 text-primary font-medium mt-8"
              >
                <span>View Case Study</span>
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </div>

            {/* Right side - Metrics */}
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                {project.metrics.map((metric) => (
                  <div key={metric.label} className="border-b border-border/30 pb-6 last:border-b-0">
                    <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wider">
                      {metric.label}
                    </div>
                    <div className="text-3xl sm:text-4xl font-bold text-transparent bg-gradient-to-r from-neon-cyan via-neon-blue to-neon-purple bg-clip-text">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6">
              <span className="block text-foreground mb-2">Our Work</span>
              <span className="gradient-text">Featured Projects</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Explore our portfolio of transformative digital solutions for healthcare organizations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard key={project.title} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 via-transparent to-background pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Ready to Transform Your Practice?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can build the perfect digital solution for your healthcare needs.
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
