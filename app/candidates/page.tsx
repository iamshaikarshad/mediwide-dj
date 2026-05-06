"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  Briefcase, 
  GraduationCap, 
  Heart, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  FileText,
  Users,
  Award,
  Clock
} from "lucide-react"
import Link from "next/link"
import { MagneticButton } from "@/components/ui/magnetic-button"
import { GridBackground, FloatingOrbs } from "@/components/ui/background-effects"

const benefits = [
  {
    icon: Briefcase,
    title: "Diverse Opportunities",
    description: "Access hundreds of healthcare roles across the UK, from temporary shifts to permanent positions.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "We support your professional development with training resources and career guidance.",
  },
  {
    icon: Clock,
    title: "Flexible Working",
    description: "Choose shifts that fit your lifestyle with our range of full-time, part-time, and temporary roles.",
  },
  {
    icon: Award,
    title: "Competitive Pay",
    description: "Earn what you deserve with market-leading rates and prompt weekly payments.",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Your personal consultant is available 24/7 to help with any questions or concerns.",
  },
  {
    icon: Heart,
    title: "Wellbeing Focus",
    description: "We prioritize your wellbeing with resources, support, and a genuine care for your success.",
  },
]

const steps = [
  {
    step: "01",
    title: "Register With Us",
    description: "Create your profile and upload your CV. Tell us about your experience and career goals.",
  },
  {
    step: "02",
    title: "Complete Compliance",
    description: "We guide you through the compliance process, including DBS checks and registration verification.",
  },
  {
    step: "03",
    title: "Get Matched",
    description: "Our team matches you with suitable opportunities based on your skills and preferences.",
  },
  {
    step: "04",
    title: "Start Working",
    description: "Accept bookings that suit you and start making a difference in healthcare.",
  },
]

const roles = [
  "Registered Nurses",
  "Healthcare Assistants",
  "Support Workers",
  "Mental Health Nurses",
  "Doctors",
  "Allied Health Professionals",
  "Midwives",
  "Care Coordinators",
]

export default function CandidatesPage() {
  const heroRef = useRef<HTMLElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        <FloatingOrbs />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div>
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
                className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
              >
                For Candidates
              </motion.span>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance"
              >
                Your Healthcare Career{" "}
                <span className="gradient-text">Starts Here</span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-muted-foreground mb-8 leading-relaxed"
              >
                Join thousands of healthcare professionals who trust Mediwide to find rewarding 
                opportunities. No fees, flexible work, and dedicated support throughout your journey.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <MagneticButton strength={0.15}>
                  <Link
                    href="/jobs"
                    className="group flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
                  >
                    Browse Jobs
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </MagneticButton>
                <MagneticButton strength={0.15}>
                  <Link
                    href="/contact"
                    className="flex items-center justify-center gap-2 px-8 py-4 border border-border/50 rounded-full font-medium text-lg hover:bg-secondary/50 transition-all"
                  >
                    <FileText className="w-5 h-5" />
                    Submit CV
                  </Link>
                </MagneticButton>
              </motion.div>

              {/* Trust indicators */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isHeroInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-wrap gap-6 mt-8 text-sm text-muted-foreground"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>No registration fees</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Weekly pay</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>24/7 support</span>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isHeroInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="hidden lg:block"
            >
              <div className="glass-card rounded-2xl p-8">
                <h3 className="text-xl font-semibold mb-6">We Recruit</h3>
                <div className="flex flex-wrap gap-2">
                  {roles.map((role) => (
                    <span 
                      key={role}
                      className="px-3 py-2 text-sm bg-secondary/50 rounded-full"
                    >
                      {role}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Why Join Mediwide
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              More than just a recruitment agency - we&apos;re your career partner
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              How to Get Started
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Your journey to rewarding healthcare work in four simple steps
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                <div className="text-6xl font-bold text-primary/10 mb-4">{step.step}</div>
                <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 right-0 translate-x-1/2 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 md:p-12 text-center"
            >
              <p className="text-xl md:text-2xl text-foreground mb-6 leading-relaxed">
                &ldquo;Mediwide helped me find my ideal nursing position within a week. The team was 
                incredibly supportive throughout the process, and I&apos;m now working in a role that 
                truly matches my career goals.&rdquo;
              </p>
              <div>
                <div className="font-semibold">Emma Thompson, RN</div>
                <div className="text-sm text-muted-foreground">ICU Nurse, London</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-neon-purple/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Ready to Find Your Next Role?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Browse our latest opportunities or register with us today
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <MagneticButton strength={0.15}>
                <Link
                  href="/jobs"
                  className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-full font-medium text-lg hover:bg-primary/90 transition-all glow-cyan"
                >
                  View All Jobs
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </MagneticButton>
              <MagneticButton strength={0.15}>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-8 py-4 border border-border/50 rounded-full font-medium text-lg hover:bg-secondary/50 transition-all"
                >
                  Register Now
                </Link>
              </MagneticButton>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
