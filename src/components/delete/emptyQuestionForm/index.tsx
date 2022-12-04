import { useRecoilValue } from "recoil";
import { questionNum } from "src/atoms";
import {
  EmptyQuestionFormTextWrapper,
  EmptyQuestionFormWrapper,
} from "./style";

export default function EmptyQuestionForm() {
  const allQuestion = useRecoilValue<number>(questionNum);
  return (
    <>
      {allQuestion === 0 ? (
        <EmptyQuestionFormWrapper>
          <EmptyQuestionFormTextWrapper>
            문제가 비어있습니다.
          </EmptyQuestionFormTextWrapper>
          <EmptyQuestionFormTextWrapper>
            문제들을 채워주세요 :){" "}
          </EmptyQuestionFormTextWrapper>
        </EmptyQuestionFormWrapper>
      ) : (
        ""
      )}
    </>
  );
}
