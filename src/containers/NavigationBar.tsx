import React, { useLayoutEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import {
  NavLightButton,
  NavHamburger,
  NavigationBarContainer,
  NavNameLogo,
  NavLinksContainer,
  NavLinksUl,
  NavLinksLi,
} from "./NavigationBar.styled";

// Hooks
// Restrict value to be between the range [0, value]
const clamp = (value: number) => Math.max(0, value);

// Check if number is between two values
const isBetween = (value: number, floor: number, ceil: number) =>
  value >= floor && value <= ceil;

// hooks
const useScrollspy = (ids: string[], offset: number = 0) => {
  const [activeId, setActiveId] = useState("");

  useLayoutEffect(() => {
    const listener = () => {
      const scroll = window.pageYOffset;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);

          if (!element) return { id, top: -1, bottom: -1 };

          const rect = element.getBoundingClientRect();
          const top = clamp(rect.top + scroll - offset);
          const bottom = clamp(rect.bottom + scroll - offset);

          return { id, top, bottom };
        })
        .find(({ top, bottom }) => isBetween(scroll, top, bottom));

      setActiveId(position?.id || "");
    };

    listener();

    window.addEventListener("resize", listener);
    window.addEventListener("scroll", listener);

    return () => {
      window.removeEventListener("resize", listener);
      window.removeEventListener("scroll", listener);
    };
  }, [ids, offset]);

  return activeId;
};

const NavigationBar = (props: any) => {
  const navIds = ["home", "about", "services", "projects", "contact"];
  const activeId = useScrollspy(navIds, 80); // 54 is navigation height
  const { themeToggler, theme } = props;
  const [showMobileNav, setShowMobileNav] = useState(false);

  console.log(activeId);

  return (
    <NavigationBarContainer>
      <NavNameLogo onClick={() => (window.location.href = "#home")}>
        {"<𝒢𝒶𝓃𝒾𝓊𝒜𝒹𝑒𝓇𝒾𝒷𝒾𝑔𝒷𝑒 />"}
      </NavNameLogo>
      <NavLinksContainer showMobileNav={showMobileNav}>
        <NavLinksUl>
          {navIds.map((id, index) => (
            <NavLinksLi
              style={{
                backgroundColor: `${id === activeId ? "#3ba2fc" : ""}`,
                borderRadius: "0.375rem",
              }}
              onClick={() => {
                window.location.href = `#${id}`;
                setShowMobileNav(false);
              }}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </NavLinksLi>
          ))}
        </NavLinksUl>
      </NavLinksContainer>
      <NavLightButton>
        {theme === "dark" ? (
          <img
            src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
            className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
            height={24}
            width={24}
            onClick={themeToggler}
            alt=""
          />
        ) : (
          <img
            src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
            className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
            height={24}
            width={24}
            onClick={themeToggler}
            alt=""
          />
        )}
      </NavLightButton>
      <NavHamburger onClick={() => setShowMobileNav(!showMobileNav)}>
        <FontAwesomeIcon
          icon={faBars}
          size="lg"
          style={{ fontSize: "1.5em" }}
        />
      </NavHamburger>
    </NavigationBarContainer>
  );
};

export default NavigationBar;
