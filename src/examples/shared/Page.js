import React from "react";
import styled from "styled-components";
import { Docs } from "examples/shared";

const StyledPage = styled.div`
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.screenWidthLg}) {
    flex-direction: column;
  }
`;

const StyledDocs = styled.div`
  flex: 1 1 50%;
  width: 50%;
  align-self: stretch;
  display: flex;
  align-items: center;
  background: #fafafa;
  padding: 4rem;

  @media (max-width: ${(props) => props.theme.screenWidthLg}) {
    flex: 1 1 100%;
    width: 100%;
  }
`;

const StyledComponent = styled.div`
  position: relative;
  flex: 1 1 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: ${(props) => props.theme.screenWidthLg}) {
    flex: 1 1 100%;
    width: 100%;
    min-height: 200px;
  }
`;

const Page = ({ children, docs }) => {
  return (
    <StyledPage>
      <StyledDocs>
        <Docs docs={docs} />
      </StyledDocs>
      <StyledComponent>{children}</StyledComponent>
    </StyledPage>
  );
};

export default Page;
