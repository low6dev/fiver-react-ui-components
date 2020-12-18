import React, { useState } from "react";
import { Page } from "examples/shared";
import { Stepper } from "components";
import docs from "./docs";

const NavbarSimpleExample = () => {
  const [activeStep, setActive] = useState(0);

  return (
    <Page docs={docs}>
      <Stepper
        steps={[
          {
            isValid: true,
          },
          {
            isValid: true,
          },
          {
            isValid: true,
          },
          {
            isValid: false,
          },
        ]}
        activeStep={activeStep}
        onStepClicked={setActive}
      />
    </Page>
  );
};

export default NavbarSimpleExample;
