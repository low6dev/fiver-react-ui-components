import React from "react";
import styled from "styled-components";
import { Page } from "examples/shared";
import { Navbar } from "components";
import docs from "./docs";

const NavbarExample = () => (
  <Page docs={docs}>
    <Navbar
      position="absolute"
      navbarIcon="https://cdn.jsdelivr.net/gh/low6dev/fiver-react-assets@main/AFTV-App-Nav-Icon.png"
      navbarWidth="500px"
      colorBackground="black"
      colorIcon="red"
      items={[
        {
          to: "/scores",
          text: "Scores",
          icon: "score",
        },
        {
          to: "/trending",
          text: "Trending",
          icon: "local_fire_department",
        },
        { to: "/wallet", text: "Wallet", icon: "account_balance_wallet" },
        { to: "/profile", text: "Profile", icon: "account_circle" },
      ]}
    />
  </Page>
);

export default NavbarExample;
