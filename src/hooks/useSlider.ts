import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  answerButtonState,
  currentIndex,
  isAnswer,
  isCorrect,
  questionSet,
  sliderMotionChange,
} from "src/atoms";

export default function useSlider() {
  const setChangeMotion = useSetRecoilState(sliderMotionChange);

  const setCurrentIndex = useSetRecoilState(currentIndex);

  const setAnswerState = useSetRecoilState(isAnswer);

  const questions = useRecoilValue(questionSet);

  const setButtonState = useSetRecoilState(answerButtonState);

  const handleLeftSlider = () => {
    setChangeMotion(true);
    setCurrentIndex((prev) => (prev === 0 ? prev : prev - 1));
    setAnswerState(false);
    setButtonState(false);
  };

  const handleRightSlider = () => {
    setChangeMotion(false);
    setCurrentIndex((prev) =>
      prev === questions.length - 1 ? prev : prev + 1
    );
    setAnswerState(false);
    setButtonState(false);
  };

  return {
    handleLeftSlider,
    handleRightSlider,
  };
}
