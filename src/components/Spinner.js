import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { rgba } from "polished";

const StyledSpinner = styled.span`
  display: inline-block;
  border-width: ${(props) => props.lineWidth}px;
  border-style: solid;

  border-color: ${(props) =>
    props.forDark ? rgba("white", 0.275) : rgba("black", 0.1)};

  border-top-color: ${(props) =>
    props.forDark ? "white" : props.colorPrimary};

  flex: 0 0 ${(props) => Math.floor(props.lineWidth * 7)}px;
  width: ${(props) => Math.floor(props.lineWidth * 7)}px;
  height: ${(props) => Math.floor(props.lineWidth * 7)}px;
  border-radius: 50%;
  animation: spin 1.25s infinite linear;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`;

const Spinner = ({ colorPrimary, className, lineWidth, forDark }) => (
  <StyledSpinner
    colorPrimary={colorPrimary}
    className={className}
    lineWidth={lineWidth}
    forDark={forDark}
  />
);

Spinner.defaultProps = {
  lineWidth: 7,
  forDark: false,
};

Spinner.propTypes = {
  lineWidth: PropTypes.number,
  forDark: PropTypes.bool,
  colorPrimary: PropTypes.string,
};

export default Spinner;
