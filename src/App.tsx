import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./components/globalStyles";
import { lightTheme, darkTheme } from "./components/Theme";
import Home from "./components/LandingPage/Home";
import NavigationBar from "./containers/NavigationBar";

const App = () => {
  const [theme, setTheme] = useState("");
  const savedTheme = localStorage.getItem("theme");

  const themeToggler = () => {
    if (savedTheme === "light") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
    } else {
      setTheme("light");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <ThemeProvider theme={savedTheme === "light" ? lightTheme : darkTheme}>
      <GlobalStyle />
      <NavigationBar themeToggler={themeToggler} theme={savedTheme} />
      <Home theme={savedTheme} />
    </ThemeProvider>
  );
};

export default App;
