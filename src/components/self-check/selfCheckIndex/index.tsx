import { useRecoilValue } from "recoil";
import useLoadAllQuestion from "src/hooks/useLoadAllQuestion";
import { currentIndex } from "src/atoms";
import { SelfCheckIndexWrapper } from "./style";

export default function SelfCheckIndex() {
  const { questionNumber } = useLoadAllQuestion();
  const currIndex = useRecoilValue(currentIndex);
  console.log(questionNumber, currIndex);

  return (
    <SelfCheckIndexWrapper>
      {questionNumber === 0 ? currIndex : currIndex + 1} / {questionNumber}
    </SelfCheckIndexWrapper>
  );
}
