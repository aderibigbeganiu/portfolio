import React from "react";
import AboutMeSection from "./AboutMeSection/AboutMeSection";
import ContactSection from "./ContactSection/ContactSection";
import HeroSection from "./HeroSection/HeroSection";
import { HomeContainer } from "./Home.styled";
import ProjectsSection from "./ProjectsSection/ProjectsSection";
import ServicesSection from "./ServicesSection/ServicesSection";

const Home = (props: any) => {
  const { theme } = props;
  return (
    <HomeContainer>
      <HeroSection theme={theme} />
      <AboutMeSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </HomeContainer>
  );
};

export default Home;
