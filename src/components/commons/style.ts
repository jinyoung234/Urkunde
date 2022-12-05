import styled from "styled-components";

export const Container = styled.div<{
  isDelete?: boolean;
  isLastCheck?: boolean;
}>`
  width: 100%;
  min-height: ${(props) => (props.isDelete ? "100vh" : "calc(100vh - 8rem)")};
  padding: 8rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.isLastCheck && "113vh"};
`;
