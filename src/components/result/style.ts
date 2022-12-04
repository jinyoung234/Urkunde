import styled from "styled-components";

export const ResultWrapper = styled.span<{
  isTitle?: boolean;
  isResult?: boolean;
}>`
  text-align: center;
  font-size: 4.5rem;
  font-weight: ${(props) => (props.isResult ? "300" : "500")};
  margin: 3rem 0px;
  margin-top: ${(props) => (props.isResult ? "0" : "3rem")};
  color: ${(props) =>
    props.isTitle || props.isResult ? "black" : props.theme.textColor};
`;

export const ResultFormContainer = styled.div`
  background-color: white;
  border: 0px;
  border-radius: 4rem;
  width: 60%;
  height: 60%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12);
`;
