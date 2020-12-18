import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  position: ${(p) => p.position || "fixed"};
  z-index: 2;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: space-between;
  justify-content: space-between;
  pointer-events: none;
  background: ${(p) => p.background || "black"};

  @media (min-width: ${(props) => props.theme.screenWidthMd}) {
    left: 50%;
    width: ${(props) => props.navbarWidth};
    margin: 0 auto;
    transform: translateX(-50%);
  }
`;

const StyledNavLink = styled(NavLink)`
  flex: 1 1 50%;
  display: flex;
  height: 80px;
  padding-top: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  transition: transform 0.25s;
  pointer-events: all;
  text-decoration: none;
  color: ${(p) => p.color || rgba("white", 0.5)};

  &.active {
    color: ${(p) => p.colorActive || "white"};
  }
`;

const StyledNavLinkIcon = styled.span`
  margin-bottom: 0.325rem;
`;

const StyledNavLinkText = styled.span`
  font-size: 0.675rem;
`;

const NavbarSimple = ({
  items,
  position,
  colorBackground,
  colorLink,
  colorLinkActive,
  navbarWidth,
}) => (
  <StyledNav
    position={position}
    background={colorBackground}
    navbarWidth={navbarWidth}
  >
    {items.map((item) => (
      <StyledNavLink
        color={colorLink}
        colorActive={colorLinkActive}
        to={item.to}
      >
        <StyledNavLinkIcon className="material-icons">
          {item.icon}
        </StyledNavLinkIcon>
        <StyledNavLinkText>{item.text}</StyledNavLinkText>
      </StyledNavLink>
    ))}
  </StyledNav>
);

export default NavbarSimple;
