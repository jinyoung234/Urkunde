import styled from "styled-components";

export const LeftSliderWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  width: 6rem;
  height: 6rem;
  border: 0px;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.2),
    0 0.1rem 0.3rem rgba(0, 0, 0, 0.12);
  img {
    width: 80%;
    margin-right: 0.5rem;
  }
`;

export const RightSliderWrapper = styled(LeftSliderWrapper)`
  left: 90%;
  img {
    margin-left: 0.8rem;
  }
`;
