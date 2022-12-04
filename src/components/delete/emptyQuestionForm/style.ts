import styled from "styled-components";

export const EmptyQuestionFormWrapper = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 50vh;
  border: 0;
  border-radius: 2rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.15),
    0 0.1rem 0.3rem rgba(0, 0, 0, 0.08);
`;

export const EmptyQuestionFormTextWrapper = styled.span`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  font-weight: 300;
  margin: 3rem 0px;
  color: black;
`;
