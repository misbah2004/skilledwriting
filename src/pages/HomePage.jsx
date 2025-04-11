import React from 'react'
import HomeHeroSection from '../components/home/HomeHeroSection'
import AboutUsSection from '../components/about/AboutUsSection'
import ServicesSection from '../components/services/ServicesSection'
import FeatureSection from '../components/feature/FeatureSection'
import ProjectSection from '../components/project/ProjectSection'
import ChouseUsSection from '../components/chouseus/ChouseUsSection'
import SecuritySection from '../components/Security/SecuritySection'
import PricingPlanSection from '../components/Pricing/PricingPlanSection'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'
import TeamSection from '../components/team/TeamSection'
import CtaboxSection from '../components/CTA/CtaboxSection'
import FaqsSection from '../components/faqs/FaqsSection'
import BlogSection from '../components/Blog/BlogSection'
const HomePage = () => {
  return (
    <div>
  {/* Preloader Start */}
  <div className="preloader">
    <div className="loading-container">
      <div className="loading" />
      <div id="loading-icon">
        <img src="images/loader.svg" alt="" />
      </div>
    </div>
  </div>
  {/* Preloader End */}
  
      <HomeHeroSection />
      <ServicesSection/>
      <ProjectSection/>
      <FaqsSection/>
      <SecuritySection/>
      <FeatureSection/>
      <AboutUsSection/>
      <ChouseUsSection/>
      <PricingPlanSection/>
      <TestimonialsSection/>
      <TeamSection/>
      <CtaboxSection/>
      <BlogSection/>
    </div>
  )
}

export default HomePage
