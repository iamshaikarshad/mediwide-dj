"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ArrowRight, Clock, Tag } from "lucide-react"
import Link from "next/link"
import { GridBackground } from "@/components/ui/background-effects"

const featuredPost = {
  id: 1,
  title: "The Future of Healthcare Staffing: AI and Automation",
  excerpt: "Explore how artificial intelligence is transforming the healthcare recruitment landscape and what it means for both employers and candidates.",
  category: "Industry Trends",
  readTime: "8 min read",
  date: "May 2, 2026",
  featured: true,
}

const posts = [
  {
    id: 2,
    title: "5 Tips for Healthcare Professionals Starting a New Role",
    excerpt: "Starting a new healthcare position can be challenging. Here are our top tips for making a smooth transition.",
    category: "Career Advice",
    readTime: "5 min read",
    date: "April 28, 2026",
  },
  {
    id: 3,
    title: "Understanding Compliance Requirements in Healthcare",
    excerpt: "A comprehensive guide to staying compliant as a healthcare professional in the UK.",
    category: "Compliance",
    readTime: "6 min read",
    date: "April 25, 2026",
  },
  {
    id: 4,
    title: "The Rise of Flexible Working in Healthcare",
    excerpt: "How the pandemic changed expectations around flexible working in the healthcare sector.",
    category: "Industry Trends",
    readTime: "4 min read",
    date: "April 20, 2026",
  },
  {
    id: 5,
    title: "Mental Health Support for Healthcare Workers",
    excerpt: "Resources and strategies for maintaining mental wellbeing in demanding healthcare roles.",
    category: "Wellbeing",
    readTime: "7 min read",
    date: "April 15, 2026",
  },
  {
    id: 6,
    title: "International Recruitment: What You Need to Know",
    excerpt: "Everything international healthcare professionals need to know about working in the UK.",
    category: "Career Advice",
    readTime: "10 min read",
    date: "April 10, 2026",
  },
  {
    id: 7,
    title: "Building a Strong Healthcare Team",
    excerpt: "Best practices for healthcare employers looking to build and retain high-performing teams.",
    category: "For Employers",
    readTime: "6 min read",
    date: "April 5, 2026",
  },
]

const categories = [
  "All",
  "Industry Trends",
  "Career Advice",
  "Compliance",
  "Wellbeing",
  "For Employers",
]

function PostCard({ post }: { post: typeof posts[0] }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blog/${post.id}`}>
        <div className="p-6 rounded-2xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 h-full">
          <div className="flex items-center gap-3 mb-4">
            <span className="flex items-center gap-1 px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          
          <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {post.title}
          </h3>
          
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">{post.date}</span>
            <span className="flex items-center gap-1 text-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity">
              Read more
              <ArrowRight className="w-4 h-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}

export default function BlogPage() {
  const heroRef = useRef<HTMLElement>(null)
  const isHeroInView = useInView(heroRef, { once: true })

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <GridBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-4 py-2 text-sm font-medium text-primary bg-primary/10 rounded-full mb-6"
            >
              Insights & News
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 text-balance"
            >
              Healthcare{" "}
              <span className="gradient-text">Insights</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto"
            >
              Stay informed with the latest trends, advice, and news from the healthcare staffing industry.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <Link href={`/blog/${featuredPost.id}`}>
                <div className="p-8 md:p-12 rounded-2xl bg-gradient-to-br from-primary/10 to-neon-purple/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <span className="inline-flex items-center gap-2 px-3 py-1 text-xs bg-primary/20 text-primary rounded-full mb-6">
                    Featured Article
                  </span>
                  
                  <h2 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  
                  <p className="text-muted-foreground mb-6 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                  
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Tag className="w-4 h-4" />
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                    <span>{featuredPost.date}</span>
                  </div>
                </div>
              </Link>
            </motion.article>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-card/50 border border-border/50 hover:border-primary/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="py-12 relative">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-neon-purple/10" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Stay Updated
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground mb-8"
            >
              Subscribe to our newsletter for the latest healthcare staffing insights
            </motion.p>
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex flex-col sm:flex-row gap-4"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 bg-background/50 border border-border/50 rounded-xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </motion.form>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
