import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { BrowserRouter as Router } from "react-router-dom";
import { Navbar } from "components";
import { theme } from "theme";

const components = [Navbar];

const StyledBlock = styled.div`
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StyledBlock>
          <Navbar
            navbarIcon="https://cdn.jsdelivr.net/gh/low6dev/fiver-react-assets@main/AFTV-App-Nav-Icon.png"
            navbarWidth="500px"
            background="black"
            colorPrimary="red"
            items={[
              {
                to: "/my-picks",
                text: "My Picks",
                icon: "format_list_numbered",
              },
              { to: "/leaderboard", text: "Leaderboard", icon: "emoji_events" },
              { to: "/wallet", text: "Wallet", icon: "account_balance_wallet" },
              { to: "/profile", text: "Profile", icon: "person" },
            ]}
          />
        </StyledBlock>
      </ThemeProvider>
    </Router>
  );
}

export default App;
