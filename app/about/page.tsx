"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CTABanner } from "@/components/cta-banner"
import { 
  Target, 
  Heart, 
  Users, 
  Lightbulb,
  Award,
  TrendingUp
} from "lucide-react"
import { GridBackground, FloatingOrbs } from "@/components/ui/background-effects"

const values = [
  {
    icon: Heart,
    title: "People First",
    description: "We put healthcare professionals and patients at the center of everything we do.",
  },
  {
    icon: Target,
    title: "Excellence",
    description: "We strive for the highest standards in recruitment, compliance, and service delivery.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "We continuously evolve our methods to deliver better outcomes for all stakeholders.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We build lasting relationships based on trust, transparency, and mutual success.",
  },
]

const team = [
  {
    name: "Dr. Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "20+ years in healthcare leadership",
  },
  {
    name: "James Thompson",
    role: "Chief Operations Officer",
    bio: "Expert in healthcare workforce management",
  },
  {
    name: "Emily Roberts",
    role: "Head of Recruitment",
    bio: "15 years nursing background",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    bio: "Leading digital transformation",
  },
]

const milestones = [
  { year: "2009", title: "Founded", description: "Started with a vision to transform healthcare staffing" },
  { year: "2012", title: "1000 Placements", description: "Reached our first major placement milestone" },
  { year: "2015", title: "Nationwide Coverage", description: "Expanded operations across the entire UK" },
  { year: "2018", title: "International Division", description: "Launched global recruitment services" },
  { year: "2021", title: "Digital Platform", description: "Introduced AI-powered matching technology" },
  { year: "2024", title: "Industry Leader", description: "Recognized as top healthcare staffing provider" },
]

export default function AboutPage() {
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
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
            >
              About Mediwide
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance"
            >
              Building the Future of{" "}
              <span className="gradient-text">Healthcare Staffing</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              For over 15 years, Mediwide has been at the forefront of healthcare recruitment, 
              connecting exceptional professionals with leading medical institutions across the globe.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl sm:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2009, Mediwide began with a simple mission: to bridge the gap between 
                  healthcare facilities struggling with staffing shortages and qualified professionals 
                  seeking meaningful career opportunities.
                </p>
                <p>
                  What started as a small team of recruitment specialists has grown into a nationwide 
                  operation, placing thousands of healthcare professionals in roles where they can make 
                  a real difference in patient care.
                </p>
                <p>
                  Today, we leverage cutting-edge technology alongside our deep industry expertise to 
                  deliver staffing solutions that are faster, more accurate, and fully compliant with 
                  healthcare regulations.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {[
                { value: "15+", label: "Years Experience" },
                { value: "10K+", label: "Placements Made" },
                { value: "500+", label: "Partner Facilities" },
                { value: "98%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className="p-6 rounded-2xl glass-card text-center"
                >
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Our Values
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              The principles that guide everything we do
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="p-3 rounded-xl bg-primary/10 inline-flex mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Our Journey
            </motion.h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-neon-blue to-neon-purple" />
              
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"} pl-12 md:pl-0`}>
                    <div className="p-6 rounded-2xl glass-card">
                      <span className="text-sm font-mono text-primary">{milestone.year}</span>
                      <h3 className="text-lg font-semibold mt-1">{milestone.title}</h3>
                      <p className="text-sm text-muted-foreground mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-primary border-4 border-background" />
                  
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-secondary/20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl font-bold mb-4"
            >
              Leadership Team
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground"
            >
              Meet the people driving our mission forward
            </motion.p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-colors text-center"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-neon-cyan to-neon-purple mx-auto mb-4 flex items-center justify-center text-2xl font-bold text-primary-foreground">
                  {member.name.split(" ").map(n => n[0]).join("")}
                </div>
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.role}</p>
                <p className="text-xs text-muted-foreground mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
      <Footer />
    </main>
  )
}
