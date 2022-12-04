import useLoadAllQuestion from "src/hooks/useLoadAllQuestion";
import { EmptyQuizFormContainer } from "./style";

export default function EmptySelfCheckForm() {
  const { questionNumber } = useLoadAllQuestion();
  return (
    <>
      {questionNumber === 0 && (
        <EmptyQuizFormContainer>문제를 만들어주세요 :)</EmptyQuizFormContainer>
      )}
    </>
  );
}
