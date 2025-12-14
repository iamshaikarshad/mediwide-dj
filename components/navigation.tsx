"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
    setIsMobileMenuOpen(false)
  }

  return (
    <>
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}

      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-background/95 backdrop-blur-md border-b border-border/50 shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
              <Image src="/mediwide-logo.png" alt="MediWide Logo" width={40} height={40} className="w-10 h-10" />
              <span className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                MediWide
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-foreground/80 hover:text-foreground transition-colors"
              >
                Portfolio
              </button>
              <Button onClick={() => scrollToSection("contact")} className="bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {isMobileMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-background/98 backdrop-blur-lg border-b border-border/50 shadow-2xl">
              <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => scrollToSection("services")}
                    className="text-left text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
                  >
                    Services
                  </button>
                  <button
                    onClick={() => scrollToSection("about")}
                    className="text-left text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
                  >
                    About
                  </button>
                  <button
                    onClick={() => scrollToSection("portfolio")}
                    className="text-left text-foreground/80 hover:text-primary transition-colors py-3 px-4 rounded-lg hover:bg-primary/10"
                  >
                    Portfolio
                  </button>
                  <Button
                    onClick={() => scrollToSection("contact")}
                    className="bg-primary hover:bg-primary/90 w-full mt-2"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  )
}
