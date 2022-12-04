import { QuestionWrapper } from "./style";

interface QuestionProps {
  question: string;
}

export default function Question({ question }: QuestionProps) {
  return <QuestionWrapper>{question}</QuestionWrapper>;
}
