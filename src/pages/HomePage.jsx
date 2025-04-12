import React from 'react'
import HomeHeroSection from '../components/home/HomeHeroSection'
import CtaboxSection from '../components/CTA/CtaboxSection'
import AboutUsSection from '../components/about/AboutUsSection'
import BlogSection from '../components/Blog/BlogSection'
import ChouseUsSection from '../components/chouseus/ChouseUsSection'
import FaqsSection from '../components/faqs/FaqsSection'
import FeatureSection from '../components/feature/FeatureSection'
import PricingPlanSection from '../components/Pricing/PricingPlanSection'
import ProjectSection from '../components/project/ProjectSection'
import SecuritySection from '../components/Security/SecuritySection'
import ServicesSection from '../components/services/ServicesSection'
import TeamSection from '../components/team/TeamSection'
import TestimonialsSection from '../components/testimonials/TestimonialsSection'
const HomePage = () => {
  return (
    <><>
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
  </>
  


      <HomeHeroSection/>
      <ServicesSection/>
      <ProjectSection/>
      <FaqsSection/>
      <SecuritySection/>
      <FeatureSection/>
      <BlogSection/>
      <PricingPlanSection/>
      <TeamSection/>
      <AboutUsSection/>

    </>
  )
}

export default HomePage
