import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const Button = styled.button`
  margin: 50px 0px;
  width: 18%;
  border: 0px;
  height: 35px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #3c73cf;
  color: white;
`;

export interface ButtonProps {
  goPage: string;
  content: string;
}

export default function PrimaryButton({
  goPage,
  content,
}: ButtonProps): React.ReactElement {
  const movePage = useNavigate();
  const goPages = () => {
    movePage(goPage);
  };

  return <Button onClick={goPages}>{content}</Button>;
}
