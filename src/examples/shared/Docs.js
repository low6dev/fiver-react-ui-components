import React from "react";
import styled from "styled-components";
import { rgba } from "polished";
import { Table, Thead, Tbody, Tr, Th, Td } from "./Table";

const StyledWrapper = styled.div`
  padding: 1rem 0 0;
  width: 100%;
`;

const StyledTitle = styled.div`
  font-size: 1.5rem;
  padding: 0 0 1rem;
  margin-bottom: 2rem;
  border-bottom: 1px solid ${rgba("black", 0.05)};
`;

const StyledTable = styled.table``;

const Docs = ({ docs }) => {
  console.log("the docs", docs);

  return (
    <StyledWrapper>
      <StyledTitle>{docs?.title}</StyledTitle>
      <Table>
        <Thead>
          <Tr>
            <Th style={{ width: "30%" }}>Prop</Th>
            <Th>Purpose</Th>
            <Th style={{ width: "10%" }}>Type</Th>
            <Th style={{ width: "10%" }}>Default</Th>
          </Tr>
        </Thead>
        <Tbody>
          {docs.options.map((option) => (
            <Tr key={option.name}>
              <Td>{option.name}</Td>

              <Td>{option.purpose}</Td>
              <Td>{option.type}</Td>
              <Td>{option.default}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </StyledWrapper>
  );
};

export default Docs;
