import React from "react";
import { Page } from "examples/shared";
import { NavbarSimple } from "components";
import docs from "./docs";

const NavbarSimpleExample = () => (
  <Page docs={docs}>
    <NavbarSimple
      navbarWidth="500px"
      position="absolute"
      colorLink="#999999"
      colorLinkActive="#D10A10"
      colorBackground="#F8F8F9"
      items={[
        {
          to: "/scores",
          text: "Scores",
          icon: "emoji_events",
        },
        {
          to: "/trending",
          text: "Trending",
          icon: "grade",
        },
        { to: "/wallet", text: "Wallet", icon: "account_balance_wallet" },
        { to: "/profile", text: "Profile", icon: "account_circle" },
      ]}
    />
  </Page>
);

export default NavbarSimpleExample;
