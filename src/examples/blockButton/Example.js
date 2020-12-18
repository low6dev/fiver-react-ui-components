import React, { useState } from "react";
import { Page } from "examples/shared";
import docs from "./docs";
import { BlockButton } from "components";

const BlockButtonExample = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);

    setTimeout(() => {
      setClicked(false);
    }, 1000);
  };

  return (
    <Page docs={docs}>
      <BlockButton
        style={{ marginBottom: "1rem" }}
        isLoading={clicked}
        onClick={handleClick}
        isUppercase
        fixedWidth="300px"
        colorBackground="#D10A10"
        colorText="white"
      >
        Click Me
      </BlockButton>
      <BlockButton
        disabled
        isUppercase
        fixedWidth="300px"
        colorBackground="red"
        colorText="white"
      >
        Disabled
      </BlockButton>
    </Page>
  );
};

export default BlockButtonExample;
