import useQuestionSet from "src/hooks/useSetQuestion";
import { AnswerFormWrapper } from "./style";

export default function AnswerForm() {
  const { addAnswer } = useQuestionSet();
  return (
    <AnswerFormWrapper
      onChange={addAnswer}
      placeholder="작성한 답과 동일하게 적어주세요 :) "
    />
  );
}
