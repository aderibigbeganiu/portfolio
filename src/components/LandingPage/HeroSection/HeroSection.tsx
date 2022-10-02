import React from "react";
import { HeroSectionContainer } from "./HeroSection.styled";

const HeroSection = (props: any) => {
  const { theme } = props;
  return (
    <HeroSectionContainer theme={theme} id="home">
      <div>Hi</div>
      <div>Hello</div>
    </HeroSectionContainer>
  );
};

export default HeroSection;
