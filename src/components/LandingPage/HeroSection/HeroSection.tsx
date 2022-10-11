import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  HeroSectionContainer,
  HeroSectionLeft,
  HeroSectionRight,
} from "./HeroSection.styled";

const HeroSection = (props: any) => {
  const style = {
    fontSize: "3.75rem",
    fontWeight: "bolder",
    lineHeight: 1,
  };
  const { theme } = props;
  return (
    <HeroSectionContainer theme={theme} id="home">
      <HeroSectionLeft>
        <div style={style}>Hi, I'm Ganiu</div>
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1000,
            "Backend Developer",
            1000,
            "Full Stack Developer",
            1000,
            () => {
              console.log("Done typing!"); // Place optional callbacks anywhere in the array
            },
          ]}
          wrapper="div"
          speed={50}
          cursor={true}
          repeat={Infinity}
          style={{ color: "#3ba2fc", ...style }}
        />
        <p style={{ fontSize: "1.3rem" }}>
          I am a Front-End / Full-Stack Developer. I am currently working at
          AppClick Technologies as a Full-Stack Developer
        </p>
        <ul
          style={{
            listStyleType: "none",
            margin: 0,
            padding: 0,
            display: "flex",
          }}
        >
          <li style={{ marginInlineEnd: "15px", cursor: "pointer" }}>
            <img
              src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/40/000000/external-stack-overflow-is-a-question-and-answer-site-for-professional-logo-color-tal-revivo.png"
              alt="stackoverflow"
            />
          </li>
          <li style={{ marginInlineEnd: "15px", cursor: "pointer" }}>
            <img
              src="https://img.icons8.com/doodle/40/000000/instagram-new--v2.png"
              alt="stackoverflow"
            />
          </li>
          <li style={{ marginInlineEnd: "15px", cursor: "pointer" }}>
            <img
              src="https://img.icons8.com/doodle/40/000000/github--v1.png"
              alt="stackoverflow"
            />
          </li>
          <li style={{ marginInlineEnd: "15px", cursor: "pointer" }}>
            <img
              src="https://img.icons8.com/doodle/40/000000/linkedin--v2.png"
              alt="stackoverflow"
            />
          </li>
        </ul>
        <button
          style={{
            width: "250px",
            height: "60px",
            marginBlockStart: "20px",
            cursor: "pointer",
            border: "none",
            borderRadius: "8px",
            backgroundColor: "#3ba2fc",
            color: "#fff",
            fontSize: "1.5em",
          }}
        >
          Resume
        </button>
      </HeroSectionLeft>
      <HeroSectionRight>Hello</HeroSectionRight>
    </HeroSectionContainer>
  );
};

export default HeroSection;
