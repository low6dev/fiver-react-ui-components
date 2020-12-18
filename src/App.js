import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { theme } from "theme";
import {
  NavbarExample,
  NavbarSimpleExample,
  BlockButtonExample,
  StepperExample,
} from "examples";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <NavbarExample />
        <NavbarSimpleExample />
        <BlockButtonExample />
        <StepperExample />
      </ThemeProvider>
    </Router>
  );
}

export default App;
