import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SocialProof } from "@/components/social-proof"
import { FeaturesSection } from "@/components/features-section"
import { BuildASetSection } from "@/components/build-a-set-section"
import { ProductShowcase } from "@/components/product-showcase"
import { ScienceSection } from "@/components/science-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { WaitlistSection } from "@/components/waitlist-section"
import { Footer } from "@/components/footer"
import { BackgroundAnimation } from "@/components/background-animation"
import { ScrollProgress } from "@/components/scroll-progress"
import { BackToTop } from "@/components/back-to-top"
import { CaseStudiesSection } from "@/components/case-studies-section"
import { LookbookSection } from "@/components/lookbook-section"

export default function Home() {
  return (
    <div className="min-h-screen relative">
      <ScrollProgress />
      <BackgroundAnimation />
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <FeaturesSection />
        <CaseStudiesSection />
        <LookbookSection />
        <BuildASetSection />
        <ProductShowcase />
        <ScienceSection />
        <TestimonialsSection />
        <WaitlistSection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
