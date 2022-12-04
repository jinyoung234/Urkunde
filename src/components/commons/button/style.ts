import styled from "styled-components";

export const ButtonWrapper = styled.button<{ size: string }>`
  margin: 4rem 0px;
  width: ${(props) => (props.size === "sm" ? "10rem" : "")};
  border: 0px;
  height: ${(props) => (props.size === "sm" ? "3rem" : "")};
  border-radius: 1rem;
  box-shadow: 0 4rem 6rem rgba(50, 50, 93, 0.15),
    0 1rem 3rem rgba(0, 0, 0, 0.08);
  background-color: #3c73cf;
  color: white;
`;

export const BackButtonWrapper = styled.div<{ isSelfCheck?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: white;
  width: 6rem;
  height: 6rem;
  position: absolute;
  left: ${(props) => (props.isSelfCheck ? "25%" : "18%")};
  box-shadow: 0 4rem 6rem rgba(50, 50, 93, 0.15),
    0 1rem 3rem rgba(0, 0, 0, 0.08);
  img {
    width: 3rem;
  }
`;
