"use client"

import { motion } from "framer-motion"
import { ArrowUpRight, Calendar, User } from "lucide-react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const resources = [
  {
    title: "The Complete Guide to Healthcare Website Design",
    category: "Guide",
    date: "May 2024",
    author: "Sarah Mitchell",
    description: "Everything healthcare practices need to know about building a modern, conversion-optimized website that attracts and retains patients.",
    image: "gradient-cyan",
    readTime: "12 min",
  },
  {
    title: "AI Receptionists: Reducing No-Shows by 70%",
    category: "Case Study",
    date: "April 2024",
    author: "James Chen",
    description: "How a 40-provider practice network reduced appointment no-shows and improved patient communication with AI-powered receptionists.",
    image: "gradient-purple",
    readTime: "8 min",
  },
  {
    title: "Patient Portal Best Practices in 2024",
    category: "Article",
    date: "March 2024",
    author: "Emily Roberts",
    description: "Modern patient portals should be intuitive, secure, and integrated with clinical workflows. Learn the best practices from leading healthcare tech experts.",
    image: "gradient-blue",
    readTime: "10 min",
  },
  {
    title: "HIPAA Compliance in Healthcare Software Development",
    category: "Guide",
    date: "February 2024",
    author: "Michael Chen",
    description: "A comprehensive guide to ensuring your healthcare software meets HIPAA requirements without compromising on user experience.",
    image: "gradient-teal",
    readTime: "15 min",
  },
  {
    title: "Telehealth Trends: What's Ahead for 2024-2025",
    category: "Trends",
    date: "January 2024",
    author: "David Brown",
    description: "Explore the future of telemedicine, including AI integration, remote monitoring, and the role of emerging technologies in patient care.",
    image: "gradient-magenta",
    readTime: "9 min",
  },
  {
    title: "Automating Practice Management: ROI Analysis",
    category: "Whitepaper",
    date: "December 2023",
    author: "Lisa Anderson",
    description: "Detailed ROI analysis of automating common practice management tasks like scheduling, billing, and patient follow-ups.",
    image: "gradient-orange",
    readTime: "14 min",
  },
]

function ResourceCard({ resource, index }: { resource: typeof resources[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group glass rounded-2xl overflow-hidden hover:bg-card/50 transition-all duration-300"
    >
      <Link href="#" className="block">
        {/* Image background */}
        <div className={`h-48 bg-gradient-to-br ${
          resource.image === "gradient-cyan" ? "from-neon-cyan/30 to-neon-blue/30" :
          resource.image === "gradient-purple" ? "from-neon-purple/30 to-neon-cyan/30" :
          resource.image === "gradient-blue" ? "from-neon-blue/30 to-neon-purple/30" :
          resource.image === "gradient-teal" ? "from-neon-cyan/30 to-neon-purple/30" :
          resource.image === "gradient-magenta" ? "from-neon-purple/30 to-neon-cyan/30" :
          "from-neon-cyan/20 via-neon-blue/20 to-neon-purple/20"
        } relative overflow-hidden`}>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card/60" />
          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/40">
            <div className="text-6xl font-bold">{resource.category[0]}</div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full">
              {resource.category}
            </span>
            <span className="text-xs text-muted-foreground">{resource.readTime}</span>
          </div>

          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
            {resource.title}
          </h3>

          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {resource.description}
          </p>

          <div className="flex items-center justify-between pt-4 border-t border-border/30">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <User className="w-3.5 h-3.5" />
                {resource.author}
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {resource.date}
              </div>
            </div>
            <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
          </div>
        </div>
      </Link>
    </motion.div>
  )
}

export default function ResourcesPage() {
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
              <span className="block text-foreground mb-2">Resources &</span>
              <span className="gradient-text">Insights</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Learn from industry experts. Explore guides, case studies, and insights on 
              healthcare technology, digital transformation, and best practices.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            {/* Filter tabs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap gap-2 mb-12"
            >
              {["All", "Guide", "Case Study", "Article", "Trends", "Whitepaper"].map((filter) => (
                <button
                  key={filter}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    filter === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary hover:bg-primary/20"
                  }`}
                >
                  {filter}
                </button>
              ))}
            </motion.div>

            {/* Resources grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => (
                <ResourceCard key={resource.title} resource={resource} index={index} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-purple/10 via-transparent to-background pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto glass rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest healthcare technology trends and insights delivered to your inbox.
            </p>

            <form className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all"
              >
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
