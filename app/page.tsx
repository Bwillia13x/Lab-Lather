import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { BuildASetSection } from "@/components/build-a-set-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <BackgroundAnimation />
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <BuildASetSection />
        <ProductShowcase />
        <ScienceSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
    </div>
  )
}
