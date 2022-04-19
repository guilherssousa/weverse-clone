import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { Wrapper } from "./styled";

import NavBar from "../NavBar";

const darkTheme = {
  dark: true,
  backgroundColor: "#121212",
  textColor: "#fff",
  helperColor: "#1e1e1e",
  backgroundSection: "#202020",
  lowContrastText: "#878e96",
};

const lightTheme = {
  dark: false,
  backgroundColor: "#fff",
  textColor: "#000",
  helperColor: "#ebebeb",
  backgroundSection: "#fff",
  lowContrastText: "#878e96",
};

const Layout = ({ children, artists }) => {
  const [isDarkTheme, setDarkTheme] = useState(true);

  const theme = isDarkTheme ? darkTheme : lightTheme;

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Wrapper>
          <NavBar
            artists={artists}
            toggleTheme={setDarkTheme}
            theme={isDarkTheme}
          />
          {children}
        </Wrapper>
      </ThemeProvider>
    </>
  );
};

export default Layout;
