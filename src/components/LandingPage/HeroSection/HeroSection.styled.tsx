import styled from "styled-components";
import cloudDark from "../../../assets/images/cloudDark.png";
import cloudBg from "../../../assets/images/cloudBg.png";

export const HeroSectionContainer = styled.div`
  height: calc(100vh - 80px);
  background-image: ${(props) =>
    props.theme === "light" ? `url(${cloudBg})` : `url(${cloudDark})`};
  background-size: cover;
`;
