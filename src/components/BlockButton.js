import React from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import { Spinner, MatIcon } from "./";

const sharedStyles = css`
  position: relative;
  display: block;
  width: ${(p) => p.fixedWidth || "100%"};
  line-height: 1;
  ${(p) => p.isUppercase && "text-transform: uppercase"};
  text-align: center;
  border: 0;
  border-radius: 0.5rem;
  white-space: nowrap;
  background: ${(p) => p.colorBackground};
  color: ${(p) => p.colorText};
  transition: background 0.25s;
`;

const extraSmallButton = css`
  height: 34px;
  padding: 0 0.75rem;
  font-size: 0.75rem;
`;

const smallButton = css`
  height: 50px;
  padding: 0 1rem;
  font-size: 0.875rem;
`;

const mediumButton = css`
  height: 60px;
  padding: 0 1.5rem;
  font-size: 1rem;
`;

const disabledStyles = css`
  background: ${(p) => p.colorBackgroundDisabled || "#c8ccd1"};
  color: ${(p) => p.colorTextDisabled || "#a4acb6"};
  cursor: not-allowed;
`;

const loadingStyles = css`
  cursor: not-allowed;
`;

const StyledButton = styled.button`
  ${sharedStyles};
  ${mediumButton}
  ${(p) => p.size === "sm" && smallButton};
  ${(p) => p.size === "xs" && extraSmallButton};

  &:disabled {
    ${(p) => !p.isLoading && p.disabled && disabledStyles};
    ${(p) => p.isLoading && loadingStyles};
  }
`;

const StyledLink = styled(Link)`
  ${sharedStyles};

  ${mediumButton}
  ${(p) => p.size === "sm" && smallButton};
  ${(p) => p.size === "xs" && extraSmallButton};

  display: flex;
  align-items: center;
  justify-content: center;
`;

const BlockButton = ({
  fixedWidth,
  colorBackground,
  colorBackgroundDisabled,
  colorText,
  colorTextDisabled,
  children,
  to,
  onClick,
  size,
  isDarkButton,
  isLoading,
  isUppercase,
  ...rest
}) => {
  return to ? (
    <StyledLink
      isUppercase={isUppercase}
      fixedWidth={fixedWidth}
      colorBackground={colorBackground}
      colorBackgroundDisabled={colorBackgroundDisabled}
      colorText={colorText}
      colorTextDisabled={colorTextDisabled}
      to={to}
      size={size}
      {...rest}
    >
      {children}
    </StyledLink>
  ) : (
    <StyledButton
      isUppercase={isUppercase}
      fixedWidth={fixedWidth}
      colorBackground={colorBackground}
      colorBackgroundDisabled={colorBackgroundDisabled}
      colorText={colorText}
      colorTextDisabled={colorTextDisabled}
      onClick={onClick}
      size={size}
      disabled={isLoading}
      isLoading={isLoading}
      {...rest}
    >
      {!isLoading ? (
        children
      ) : (
        <Spinner
          forDark={isDarkButton || true}
          lineWidth={size === "sm" ? 4 : 5}
        />
      )}
    </StyledButton>
  );
};

export default BlockButton;
