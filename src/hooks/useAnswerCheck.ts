import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  answerButtonState,
  answerState,
  correctNum,
  incorrectNum,
  isCorrect,
} from "src/atoms";

export default function useAnswerCheck() {
  const userAnswer = useRecoilValue(answerState);
  const setButtonState = useSetRecoilState(answerButtonState);
  const increaseCorrectQuestion = useSetRecoilState(correctNum);
  const increaseIncorrectQuestion = useSetRecoilState(incorrectNum);
  const setIsCollect = useSetRecoilState(isCorrect);

  const handleAnswerCheck = (answer: string) => {
    if (userAnswer === "") {
      alert("답을 작성해주세요 :)");
      return;
    }
    setButtonState(true);
    if (userAnswer === answer) {
      setIsCollect(true);
      increaseCorrectQuestion((prev: number) => prev + 1);
    } else {
      setIsCollect(false);
      increaseIncorrectQuestion((prev: number) => prev + 1);
    }
  };

  return {
    handleAnswerCheck,
  };
}
