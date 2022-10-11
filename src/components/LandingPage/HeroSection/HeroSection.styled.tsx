import styled from "styled-components";
import cloudDark from "../../../assets/images/cloudDark.png";
import cloudBg from "../../../assets/images/cloudBg.png";

export const HeroSectionContainer = styled.div`
  display: flex;
  height: calc(100vh);
  padding-top: 80px;
  background-image: ${(props) =>
    props.theme === "light" ? `url(${cloudBg})` : `url(${cloudDark})`};
  background-size: cover;
`;

export const HeroSectionLeft = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  margin-block: 10%;
  margin-inline: 10%;

  @media only screen and (max-width: 425px) {
    width: 100%;
  }

  @media only screen and (min-width: 1024px) {
  }
`;

export const HeroSectionRight = styled.div`
  width: 50%;
  @media only screen and (max-width: 425px) {
    display: none;
  }
`;
