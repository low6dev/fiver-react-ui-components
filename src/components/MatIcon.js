import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const StyledIcon = styled.span`
  font-size: ${(props) => props.size};
  margin: ${(props) => props.margin};
  color: ${(props) => props.color};
`;

const MatIcon = ({ children, size, margin, color, className }) => (
  <StyledIcon
    size={size}
    margin={margin}
    color={color}
    className={`${className} material-icons`}
  >
    {children}
  </StyledIcon>
);

MatIcon.defaultProps = {
  size: "24px",
  margin: "0",
  color: "inherit",
};

MatIcon.propTypes = {
  size: PropTypes.string,
  margin: PropTypes.string,
  color: PropTypes.string,
};

export default MatIcon;
