import Header from "./components/header"
import HeroSection from "./components/hero-section"
import AboutSection from "./components/about-section"
import ServicesSection from "./components/services-section"
import ContactSection from "./components/contact-section"
import Footer from "./components/footer"
import ScrollToTop from "./components/scroll-to-top"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </div>
  )
}
