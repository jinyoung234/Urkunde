import { useRecoilValue } from "recoil";
import { Title } from "src/components/commons/Commons";
import { correctNum, questionNum } from "src/atoms";

export default function CheckResult() {
  const correctQuestion = useRecoilValue(correctNum);
  const allQuestion = useRecoilValue(questionNum);
  return (
    <Title style={{ marginTop: "0px", color: "black", fontWeight: "300" }}>
      {correctQuestion} / {allQuestion}
    </Title>
  );
}
