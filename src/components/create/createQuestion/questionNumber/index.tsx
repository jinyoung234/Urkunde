import { QuestionNumberWrapper } from "./style";

interface QuestionNumberProps {
  questionNumber: number;
}

export default function QuestionNumber({
  questionNumber,
}: QuestionNumberProps): React.ReactElement {
  return (
    <QuestionNumberWrapper>Question : {questionNumber}</QuestionNumberWrapper>
  );
}
