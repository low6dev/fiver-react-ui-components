import React from "react";
import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledStepBadge = styled.span`
  position: relative;
  z-index: 2;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 0.875rem;
  color: ${(props) =>
    props.isActive ? props.colorTextActive : props.colorTextDefault};
  background: ${(props) =>
    props.isActive
      ? props.colorBackgroundActive
      : props.colorBackgroundDefault};
`;

const sharedLineStyles = css`
  content: "";
  position: absolute;
  z-index: 1;
  top: 50%;
  width: 50%;
  height: 3px;
  background: ${(p) => p.colorBackgroundDefault};
`;

const StyledStep = styled.button`
  padding: 0;
  position: relative;
  width: 25%;
  text-align: center;

  &::before {
    ${sharedLineStyles};
    left: 0;
    ${(props) =>
      props.isCurrentStep && `background:${props.colorBackgroundDefault}`};
    ${(props) =>
      props.isActive && `background: ${props.colorBackgroundActive}`};
  }

  &::after {
    ${sharedLineStyles};
    left: 50%;
    ${(props) =>
      props.isActive && `background: ${props.colorBackgroundActive}`};
    ${(props) =>
      props.isCurrentStep && `background:${props.colorBackgroundDefault}`};
  }

  &:first-child::before,
  &:last-child::after {
    display: none;
  }
`;

const Stepper = ({
  steps,
  activeStep,
  onStepClicked,
  colorTextActive,
  colorTextDefault,
  colorTextDisabled,
  colorBackgroundDefault,
  colorBackgroundActive,
  colorBackgroundDisabled,
}) => {
  const isActive = (step) => step <= activeStep;
  const isCurrentStep = (step) => step === activeStep;

  return (
    <StyledWrapper>
      {steps.map((step, index) => (
        <StyledStep
          colorTextActive={colorTextActive}
          colorTextDefault={colorTextDefault}
          colorTextDisabled={colorTextDisabled}
          colorBackgroundActive={colorBackgroundActive}
          colorBackgroundDefault={colorBackgroundDefault}
          colorBackgroundDisabled={colorBackgroundDisabled}
          disabled={!step.isValid}
          onClick={() => onStepClicked(index)}
          isCurrentStep={isCurrentStep(index)}
          isActive={isActive(index)}
        >
          <StyledStepBadge
            isActive={isActive(index) || step.isValid}
            colorTextActive={colorTextActive}
            colorTextDefault={colorTextDefault}
            colorTextDisabled={colorTextDisabled}
            colorBackgroundActive={colorBackgroundActive}
            colorBackgroundDefault={colorBackgroundDefault}
            colorBackgroundDisabled={colorBackgroundDisabled}
          >
            {index + 1}
          </StyledStepBadge>
        </StyledStep>
      ))}
    </StyledWrapper>
  );
};

Stepper.defaultProps = {
  colorTextActive: "#1b1a1a",
  colorTextDefault: "grey",
  colorTextDisabled: "white",
  colorBackgroundActive: "red",
  colorBackgroundDefault: "#f1f1ff",
  colorBackgroundDisabled: "grey",
};

Stepper.propTypes = {
  activeStep: PropTypes.number,
  colorTextActive: PropTypes.string,
  colorTextActive: PropTypes.string,
  colorTextActive: PropTypes.string,
  colorBackgroundDefault: PropTypes.string,
  colorBackgroundActive: PropTypes.string,
  colorBackgroundDisabled: PropTypes.string,
};

export default Stepper;
