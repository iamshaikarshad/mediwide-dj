"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Users, Target, Zap, Award, Globe, Heart } from "lucide-react"
import Link from "next/link"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const values = [
  {
    icon: Target,
    title: "Innovation Driven",
    description: "We constantly push the boundaries of what's possible in healthcare technology, staying ahead of industry trends and emerging solutions.",
  },
  {
    icon: Heart,
    title: "Patient-Centric",
    description: "Every solution we build prioritizes the patient experience, reducing friction and improving health outcomes for healthcare users.",
  },
  {
    icon: Users,
    title: "Collaborative",
    description: "We work closely with healthcare teams to understand unique needs, ensuring solutions align perfectly with practice goals and workflows.",
  },
  {
    icon: Zap,
    title: "Execution Excellence",
    description: "From concept to launch, we deliver solutions on time and on budget with meticulous attention to detail and quality assurance.",
  },
  {
    icon: Globe,
    title: "Trustworthy",
    description: "Healthcare demands exceptional security and compliance. We maintain the highest standards in data protection and regulatory adherence.",
  },
  {
    icon: Award,
    title: "Results Oriented",
    description: "We measure success by the impact our solutions deliver—measurable improvements in efficiency, revenue, and patient satisfaction.",
  },
]

const timeline = [
  {
    year: "2016",
    title: "Founded",
    description: "Mediwide was established with a mission to revolutionize healthcare through digital innovation and cutting-edge technology.",
  },
  {
    year: "2018",
    title: "First 50 Clients",
    description: "Reached a milestone of 50+ healthcare practices using our solutions across the UK, establishing trust in the healthcare sector.",
  },
  {
    year: "2020",
    title: "AI Integration",
    description: "Launched our first AI-powered solutions, bringing intelligent automation to healthcare workflows and patient communication.",
  },
  {
    year: "2022",
    title: "Enterprise Scale",
    description: "Expanded to serve large hospital networks and multi-practice organizations with enterprise-grade solutions.",
  },
  {
    year: "2024",
    title: "Global Expansion",
    description: "Extended our reach internationally, helping healthcare providers across Europe and beyond transform their digital presence.",
  },
]

export default function AboutPage() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  })

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/10 via-neon-purple/5 to-transparent pointer-events-none" />
        <div className="absolute inset-0 grid-background opacity-40 pointer-events-none" />

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
              <span className="text-sm text-primary font-medium">Our Story</span>
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              <span className="block text-foreground mb-2">Transforming Healthcare</span>
              <span className="gradient-text">Through Digital Innovation</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            >
              We&apos;re a team of designers, developers, and healthcare specialists committed to 
              building the future of healthcare technology—one innovative solution at a time.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We empower healthcare professionals to deliver exceptional patient care by providing 
                cutting-edge digital solutions. Our mission is to eliminate technological barriers, 
                streamline operations, and enable healthcare teams to focus on what they do best—caring for patients.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every solution we build is grounded in healthcare expertise, modern design principles, 
                and a deep understanding of the unique challenges faced by medical practices, clinics, and hospitals.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="glass rounded-3xl p-8 h-full flex items-center justify-center min-h-[400px]"
            >
              <div className="text-center">
                <div className="text-6xl font-bold gradient-text mb-4">8+</div>
                <p className="text-lg text-muted-foreground">Years of Healthcare Expertise</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section ref={sectionRef} className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/5 via-transparent to-transparent pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">Our Values</h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do and define how we work with our clients.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="glass rounded-2xl p-8"
                  >
                    <div className="inline-flex p-3 rounded-xl bg-primary/10 mb-6">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-24"
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">Our Journey</h2>
              <p className="text-xl text-muted-foreground">
                From startup to trusted healthcare technology partner
              </p>
            </motion.div>

            <div className="space-y-8">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex gap-8 ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}
                >
                  {/* Timeline marker */}
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center flex-shrink-0">
                      <span className="text-lg font-bold text-primary">{item.year}</span>
                    </div>
                    {index < timeline.length - 1 && (
                      <div className="w-1 h-24 bg-gradient-to-b from-primary/60 to-primary/20" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="glass rounded-2xl p-8 flex-1">
                    <h3 className="text-2xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-cyan/5 via-transparent to-neon-purple/5 pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-5xl sm:text-6xl font-bold mb-6">Our Team</h2>
              <p className="text-xl text-muted-foreground mb-12">
                Talented designers, developers, and healthcare specialists working together to revolutionize medical technology.
              </p>

              <div className="glass rounded-3xl p-12">
                <div className="text-6xl font-bold gradient-text mb-4">40+</div>
                <p className="text-xl text-muted-foreground mb-8">Team Members Across Multiple Disciplines</p>
                <p className="text-lg text-muted-foreground">
                  Our diverse team brings expertise in software development, healthcare operations, 
                  UX design, AI/ML, data science, and healthcare compliance.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative">
        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">Let&apos;s Work Together</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to transform your healthcare practice with innovative digital solutions?
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
