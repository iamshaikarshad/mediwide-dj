import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { TrustedBy } from "@/components/trusted-by"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Stats } from "@/components/stats"
import { Testimonials } from "@/components/testimonials"
import { CTABanner } from "@/components/cta-banner"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navigation />
      <Hero />
      <TrustedBy />
      <Services />
      <About />
      <Stats />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
