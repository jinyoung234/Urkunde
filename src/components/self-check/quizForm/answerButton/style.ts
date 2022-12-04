import styled from "styled-components";

export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 2.5rem;
  font-weight: 300;
`;

export const CorrectWrapper = styled.span`
  font-size: 2rem;
  margin-bottom: 0.5rem;
  color: green;
`;

export const IncorrectWrapper = styled(CorrectWrapper)`
  color: red;
`;
