import { useNavigate } from "react-router-dom";
import { ButtonWrapper } from "./style";

export interface ButtonProps {
  goPage: string;
  content: string;
  size: string;
}

export default function PrimaryButton({
  goPage,
  content,
  size,
}: ButtonProps): React.ReactElement {
  const movePage = useNavigate();
  const goPages = () => {
    movePage(goPage);
  };

  return (
    <ButtonWrapper size={size} onClick={goPages}>
      {content}
    </ButtonWrapper>
  );
}
