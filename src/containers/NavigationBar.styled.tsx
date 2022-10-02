import styled from "styled-components";

export const NavigationBarContainer = styled.div`
  background: ${({ theme }) => theme.body};
  display: flex;
  align-items: center;
  width: 100vw;
  height: 70px;
  position: fixed;

  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
`;

export const NavNameLogo = styled.div`
  margin-left: 30px;
  cursor: pointer;

  font-size: x-large;
  font-weight: bold;
`;

export const NavLinksContainer = styled.div<any>`
  box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  @media only screen and (max-width: 425px) {
    position: absolute;
    display: ${(props) => (props.showMobileNav ? "flex" : "none")};
    justify-content: center;
    right: 10px;
    top: 90px;
    width: 12rem;
    padding-block: 5px;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.body};
  }

  @media only screen and (min-width: 426px) and (max-width: 1023px) {
    position: absolute;
    display: ${(props) => (props.showMobileNav ? "flex" : "none")};
    justify-content: center;
    right: 10px;
    top: 90px;
    width: 12rem;
    padding-block: 5px;
    border-radius: 0.5rem;
    background: ${(props) => props.theme.body};
  }

  @media only screen and (min-width: 1023px) {
    display: flex;
    position: relative;
    background: transparent;
    box-shadow: none;
    width: fit-content;
    margin-inline-start: auto;
  }
`;

export const NavLinksUl = styled.ul`
  @media only screen and (max-width: 425px) {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 426px) and (max-width: 1023px) {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }

  @media only screen and (min-width: 1023px) {
    list-style: none;
    display: flex;
    flex-direction: row;
  }
`;

export const NavLinksLi = styled.li`
  font-weight: bold;
  @media only screen and (max-width: 425px) {
    width: 10rem;
    padding-block: 10px;
    margin-block: 2px;
    padding-inline-start: 10px;

    &:hover {
      border-radius: 0.375rem;
      background-color: #3ba2fc;
    }
    &:active {
      border-radius: 0.375rem;
      background-color: #3ba2fc;
    }
  }

  @media only screen and (min-width: 426px) and (max-width: 1023px) {
    width: 10rem;
    padding-block: 10px;
    margin-block: 2px;
    padding-inline-start: 10px;

    &:hover {
      border-radius: 0.375rem;
      background-color: #3ba2fc;
    }
    &:active {
      border-radius: 0.375rem;
      background-color: #3ba2fc;
    }
  }

  @media only screen and (min-width: 1024px) {
    font-size: 15px;
    margin-inline: 15px;
    padding: 10px 20px;
    cursor: pointer;

    &:hover {
      border-radius: 0.375rem;
      background-color: #3ba2fc;
    }
    &:active {
      border-radius: 0.375rem;
      background-color: #3ba2fc;
    }
  }
`;

export const NavLightButton = styled.div`
  margin-inline: auto 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media only screen and (min-width: 1024px) {
    margin-inline: 10px 40px;
  }
`;

export const NavHamburger = styled.div`
  margin-inline-end: 30px;
  cursor: pointer;

  @media only screen and (min-width: 426px) and (max-width: 1023px) {
    margin-inline-end: 30px;
    cursor: pointer;
  }

  @media only screen and (min-width: 1024px) {
    display: none;
  }
`;
