import { LargeButtonWrapper } from "./style";

interface ResetButtonProps {
  resetFn: () => void;
  content: string;
}

export default function ResetButton({ resetFn, content }: ResetButtonProps) {
  return <LargeButtonWrapper onClick={resetFn}>{content}</LargeButtonWrapper>;
}
