import styled from "styled-components";

export const CircleWrapper = styled.div<{ isChecked?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 10rem;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.15),
    0 0.1rem 0.3rem rgba(0, 0, 0, 0.08);
  background-color: ${(props) =>
    props.isChecked ? "#3AA84C" : "rgba(0,0,0,0.1)"};
  font-size: 1.3rem;
  color: ${(props) => (props.isChecked ? "white" : "black")};
`;
