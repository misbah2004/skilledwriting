import React from "react";
import Services from "../components/ServicesPage/Services";
import { useParams } from "react-router";
import ServicesSection from "../components/services/ServicesSection";
import ProjectSection from "../components/project/ProjectSection";
import FaqsSection from "../components/faqs/FaqsSection";
import SecuritySection from "../components/Security/SecuritySection";
import FeatureSection from "../components/feature/FeatureSection";
import BenefitsSection from '../components/Benefit/BenefitsSection';
import PricingPlanSection from "../components/Pricing/PricingPlanSection";
import TeamSection from '../components/team/TeamSection';
import AboutUsSection from "../components/about/AboutUsSection";
import { servicesData } from "../../public/assets/js/servicesdata";
import HomeHeroSection from "../components/home/HomeHeroSection";


const ServicesPage = () => {
    const { title } = useParams();

    const decodedTitle = decodeURIComponent(title);

    const service = servicesData[decodedTitle];
  
    if (!service) {
      return <h2>Service not found</h2>;
    }
  return (
    <>
      <HomeHeroSection service={service}/>
      {/* <ServicesSection />
      <ProjectSection />
      <FaqsSection />
      <SecuritySection />
      <FeatureSection />
      <BenefitsSection/>
      <PricingPlanSection />
      <TeamSection /> */}
      <AboutUsSection service={service} />
    </>
  );
};

export default ServicesPage;
