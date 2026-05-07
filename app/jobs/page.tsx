"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { 
  Search, 
  MapPin, 
  Briefcase, 
  Clock, 
  Building,
  Filter,
  ArrowRight,
  Heart,
  ChevronDown
} from "lucide-react"
import Link from "next/link"
import { GridBackground } from "@/components/ui/background-effects"

const jobCategories = [
  "All Categories",
  "Nursing",
  "Medical",
  "Allied Health",
  "Healthcare Support",
  "Mental Health",
  "Management",
]

const locations = [
  "All Locations",
  "London",
  "Manchester",
  "Birmingham",
  "Leeds",
  "Bristol",
  "Edinburgh",
  "Remote",
]

const jobTypes = [
  "All Types",
  "Permanent",
  "Temporary",
  "Contract",
  "Part-time",
]

const jobs = [
  {
    id: 1,
    title: "Senior Staff Nurse - ICU",
    company: "Royal Healthcare Trust",
    location: "London",
    type: "Permanent",
    salary: "35,000 - 45,000",
    category: "Nursing",
    posted: "2 days ago",
    featured: true,
  },
  {
    id: 2,
    title: "Registered Mental Health Nurse",
    company: "Metropolitan Hospital",
    location: "Manchester",
    type: "Permanent",
    salary: "32,000 - 40,000",
    category: "Mental Health",
    posted: "3 days ago",
    featured: true,
  },
  {
    id: 3,
    title: "Healthcare Assistant",
    company: "Care First Clinics",
    location: "Birmingham",
    type: "Temporary",
    salary: "12 - 15/hour",
    category: "Healthcare Support",
    posted: "1 day ago",
    featured: false,
  },
  {
    id: 4,
    title: "Physiotherapist",
    company: "Spire Healthcare",
    location: "Leeds",
    type: "Permanent",
    salary: "35,000 - 42,000",
    category: "Allied Health",
    posted: "5 days ago",
    featured: false,
  },
  {
    id: 5,
    title: "Junior Doctor - A&E",
    company: "NHS Trust",
    location: "Bristol",
    type: "Permanent",
    salary: "40,000 - 55,000",
    category: "Medical",
    posted: "1 week ago",
    featured: true,
  },
  {
    id: 6,
    title: "Ward Manager",
    company: "Bupa Healthcare",
    location: "Edinburgh",
    type: "Permanent",
    salary: "45,000 - 55,000",
    category: "Management",
    posted: "4 days ago",
    featured: false,
  },
  {
    id: 7,
    title: "Occupational Therapist",
    company: "Nuffield Health",
    location: "London",
    type: "Contract",
    salary: "38,000 - 45,000",
    category: "Allied Health",
    posted: "2 days ago",
    featured: false,
  },
  {
    id: 8,
    title: "Night Shift Nurse",
    company: "Circle Health",
    location: "Manchester",
    type: "Part-time",
    salary: "18 - 22/hour",
    category: "Nursing",
    posted: "6 days ago",
    featured: false,
  },
]

function JobCard({ job }: { job: typeof jobs[0] }) {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`relative p-6 rounded-2xl border transition-all duration-300 hover:border-primary/50 ${
        job.featured 
          ? "bg-gradient-to-br from-primary/5 to-neon-purple/5 border-primary/30" 
          : "bg-card/50 border-border/50"
      }`}
    >
      {job.featured && (
        <span className="absolute top-4 right-4 px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
          Featured
        </span>
      )}

      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground mb-1 pr-16">
            {job.title}
          </h3>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Building className="w-4 h-4" />
            <span>{job.company}</span>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap gap-3 mb-4">
        <span className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary/50 rounded-full">
          <MapPin className="w-3 h-3" />
          {job.location}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary/50 rounded-full">
          <Briefcase className="w-3 h-3" />
          {job.type}
        </span>
        <span className="flex items-center gap-1 px-3 py-1 text-xs bg-secondary/50 rounded-full">
          <Clock className="w-3 h-3" />
          {job.posted}
        </span>
      </div>

      <div className="flex items-center justify-between">
        <div className="text-lg font-semibold text-primary">
          {job.salary.includes("/") ? `${job.salary}` : `£${job.salary}`}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setIsSaved(!isSaved)}
            className={`p-2 rounded-full border transition-colors ${
              isSaved 
                ? "bg-primary/10 border-primary/50 text-primary" 
                : "border-border/50 hover:border-primary/50"
            }`}
            aria-label="Save job"
          >
            <Heart className={`w-4 h-4 ${isSaved ? "fill-current" : ""}`} />
          </button>
          <Link
            href={`/jobs/${job.id}`}
            className="flex items-center gap-1 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Apply
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  )
}

export default function JobsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All Categories")
  const [selectedLocation, setSelectedLocation] = useState("All Locations")
  const [selectedType, setSelectedType] = useState("All Types")
  const [showFilters, setShowFilters] = useState(false)

  const filteredJobs = jobs.filter((job) => {
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All Categories" || job.category === selectedCategory
    const matchesLocation = selectedLocation === "All Locations" || job.location === selectedLocation
    const matchesType = selectedType === "All Types" || job.type === selectedType
    return matchesSearch && matchesCategory && matchesLocation && matchesType
  })

  return (
    <main className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-12 overflow-hidden">
        <GridBackground />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            >
              Find Your{" "}
              <span className="gradient-text">Dream Role</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-lg text-muted-foreground"
            >
              Browse hundreds of healthcare opportunities across the UK
            </motion.p>
          </div>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search jobs by title, company, or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-card/50 border border-border/50 rounded-2xl text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Jobs */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filter toggle for mobile */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-2 mb-6 bg-card/50 border border-border/50 rounded-xl"
            >
              <Filter className="w-4 h-4" />
              Filters
              <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
            </button>

            {/* Filters */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ 
                opacity: showFilters || typeof window !== "undefined" && window.innerWidth >= 1024 ? 1 : 0,
                height: showFilters || typeof window !== "undefined" && window.innerWidth >= 1024 ? "auto" : 0
              }}
              className={`lg:!opacity-100 lg:!h-auto overflow-hidden mb-8 ${!showFilters ? "hidden lg:block" : ""}`}
            >
              <div className="flex flex-wrap gap-4">
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 bg-card/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary/50"
                >
                  {jobCategories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-2 bg-card/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary/50"
                >
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>

                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="px-4 py-2 bg-card/50 border border-border/50 rounded-xl text-foreground focus:outline-none focus:border-primary/50"
                >
                  {jobTypes.map((type) => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
            </motion.div>

            {/* Results count */}
            <div className="mb-6 text-muted-foreground">
              Showing <span className="text-foreground font-medium">{filteredJobs.length}</span> jobs
            </div>

            {/* Jobs grid */}
            <div className="grid gap-4">
              {filteredJobs.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-20">
                <p className="text-muted-foreground">No jobs found matching your criteria.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
