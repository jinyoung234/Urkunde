import styled from "styled-components";

export const Title = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 500;
  margin: 30px 0px;
  color: ${(props) => props.theme.textColor};
`;

export const SubTitle = styled.div`
  font-size: 20px;
  margin-bottom: 30px;
  color: ${(props) => props.theme.textColor};
`;
