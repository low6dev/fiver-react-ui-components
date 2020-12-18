import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import { NavLink } from "react-router-dom";
const StyledWrapper = styled.div`
  position: ${p => p.position || "fixed"};
  z-index: 5;
  bottom: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  pointer-events: none;

  @media (min-width: ${props => props.theme.screenWidthMd}) {
    left: 50%;
    width: ${props => props.navbarWidth};
    margin: 0 auto;
    transform: translateX(-50%);
  }
`;
const StyledSvg = styled.svg`
  pointer-events: none;
`;
const StyledPath = styled.path``;
const columnStyles = css`
  flex: 0 1 auto;
  max-width: 50%;
  width: 50%;
  display: flex;
  align-items: center;
  background: ${p => p.background};
`;
const StyledColumnLeft = styled.div`
  ${columnStyles};
  margin-right: 12px;
  border-top-right-radius: 20px;
`;
const StyledColumnRight = styled.div`
  ${columnStyles};
  margin-left: 12px;
  border-top-left-radius: 20px;
`;
const StyledButton = styled(NavLink)`
  flex: 1 1 50%;
  display: flex;
  height: 80px;
  padding-top: 12px;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;
  color: ${rgba("white", 0.5)};
  transition: transform 0.25s;
  pointer-events: all;
  text-decoration: none;

  &.active {
    color: white;
  }
`;
const StyledButtonText = styled.div`
  font-size: 0.675rem;
  white-space: nowrap;
`;
const StyledBgWrapper = styled.div`
  position: absolute;
  z-index: -1;
  bottom: -2px;
  left: 50%;
  transform: translateX(-50%);
`;
const StyledNavbarIcon = styled.div`
  flex: 0 0 64px;
  padding: 2px;
  width: 64px;
  height: 64px;
  transform: translateY(-12px);
  border-radius: 50%;
  background: ${p => p.background};
`;
const StyledIconImage = styled.img`
  width: 60px;
  height: 60px;
`;
const StyledIcon = styled.span`
  margin: 0 0 0.325rem;
`;

const Navbar = ({
  position,
  colorBackground,
  colorIcon,
  colorLink,
  colorLinkActive,
  items,
  navbarIcon,
  navbarWidth
}) => {
  const itemsLeft = [items[0], items[1]];
  const itemsRight = [items[2], items[3]];
  return /*#__PURE__*/React.createElement(StyledWrapper, {
    position: position,
    navbarWidth: navbarWidth
  }, /*#__PURE__*/React.createElement(StyledBgWrapper, null, /*#__PURE__*/React.createElement(StyledSvg, {
    height: "80",
    viewBox: "0 0 376 90",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement(StyledPath, {
    d: "M0 0V90H376V0H260C243.984 0 231 12.9837 231 29V27.75V27H230.992C230.997 27.2494 231 27.4994 231 27.75C231 49.3965 211.972 66.9444 188.5 66.9444C165.028 66.9444 146 49.3965 146 27.75C146 27.4994 146.003 27.2494 146.008 27H146V27.75V29C146 12.9837 133.016 0 117 0H0Z",
    fill: colorBackground
  }))), /*#__PURE__*/React.createElement(StyledColumnLeft, {
    background: colorBackground
  }, itemsLeft.map((item, index) => /*#__PURE__*/React.createElement(StyledButton, {
    to: item.to
  }, /*#__PURE__*/React.createElement(StyledIcon, {
    className: "material-icons"
  }, item.icon), /*#__PURE__*/React.createElement(StyledButtonText, null, item.text)))), /*#__PURE__*/React.createElement(StyledNavbarIcon, {
    background: colorIcon
  }, /*#__PURE__*/React.createElement(StyledIconImage, {
    src: navbarIcon
  })), /*#__PURE__*/React.createElement(StyledColumnRight, {
    background: colorBackground
  }, itemsRight.map((item, index) => /*#__PURE__*/React.createElement(StyledButton, {
    to: item.to
  }, /*#__PURE__*/React.createElement(StyledIcon, {
    className: "material-icons"
  }, item.icon), /*#__PURE__*/React.createElement(StyledButtonText, null, item.text)))));
};

export default Navbar;