import HeroSection from './HeroSection'
import GallerySection from './GallerySection'
import AboutSection from "./AboutSection"
import PendingSection from "./PendingSection"
import PortfolioSection from './PortfolioSection'

import './home.css'
import ContactSection from './ContactSection'
import BlogSection from './BlogSection'
import EventWorks from '../../components/EventWorks'

const Home = () => {


  return (
    <div className="wrapper">
      <div className="container">
        <HeroSection />
        <GallerySection />
      </div>
      <AboutSection />
      <div className="container">
        <PendingSection />
        <PortfolioSection />
        <ContactSection />
        <BlogSection />
      </div>
      <EventWorks />
    </div>
  )
}

export default Home