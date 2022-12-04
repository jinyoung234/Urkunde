import { LargeButtonWrapper } from "./style";

interface PrimaryLargeButtonProps {
  createQuesitonFn: (question: string, answer: string) => void;
  content: string;
  question: string;
  answer: string;
}

export default function CreateButton({
  createQuesitonFn,
  content,
  question,
  answer,
}: PrimaryLargeButtonProps) {
  return (
    <LargeButtonWrapper onClick={() => createQuesitonFn(question, answer)}>
      {content}
    </LargeButtonWrapper>
  );
}
