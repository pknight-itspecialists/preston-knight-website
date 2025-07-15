
import Header from '@/components/header'
import HeroSection from '@/components/hero-section'
import AboutSection from '@/components/about-section'
import ExpertiseSection from '@/components/expertise-section'
import ServicesSection from '@/components/services-section'
import ExperienceSection from '@/components/experience-section'
import IndustrySection from '@/components/industry-section'
import ResourcesSection from '@/components/resources-section'
import ContactSection from '@/components/contact-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      <ServicesSection />
      <ExperienceSection />
      <IndustrySection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
