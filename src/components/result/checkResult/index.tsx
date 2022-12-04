import { useRecoilValue } from "recoil";
import { correctNum, questionNum } from "src/atoms";
import { ResultWrapper } from "../style";

export default function CheckResult() {
  const correctQuestion = useRecoilValue(correctNum);
  const allQuestion = useRecoilValue(questionNum);
  return (
    <ResultWrapper isResult>
      {correctQuestion} / {allQuestion}
    </ResultWrapper>
  );
}
