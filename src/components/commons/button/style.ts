import styled from "styled-components";

export const ButtonWrapper = styled.button<{ size: string }>`
  margin: 50px 0px;
  width: ${(props) => (props.size === "sm" ? "12rem" : "")};
  border: 0px;
  height: ${(props) => (props.size === "sm" ? "5rem" : "")};
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #3c73cf;
  color: white;
`;
