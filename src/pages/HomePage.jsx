import React, { useEffect, useState } from 'react';
import HomeHeroSection from '../components/home/HomeHeroSection';
import AboutUsSection from '../components/about/AboutUsSection';
import BenefitsSection from '../components/Benefit/BenefitsSection'
import FaqsSection from '../components/faqs/FaqsSection';
import FeatureSection from '../components/feature/FeatureSection';
import PricingPlanSection from '../components/Pricing/PricingPlanSection';
import ProjectSection from '../components/project/ProjectSection';
import SecuritySection from '../components/Security/SecuritySection';
import ServicesSection from '../components/services/ServicesSection';
import TeamSection from '../components/team/TeamSection';


const HomePage = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="preloader1">
        <div className="loading-container">
          <div className="loading" />
          <div id="loading-icon">
            <img src="/assets/images/icon.png" alt="Loading..." />
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <HomeHeroSection />
      <ServicesSection />
      <ProjectSection />
      <FaqsSection />
      <SecuritySection />
      <FeatureSection />
      <BenefitsSection/>
      <PricingPlanSection />
      <TeamSection />
      <AboutUsSection />
    </>
  );
};

export default HomePage;
