import { ButtonWrapper } from "src/components/commons/button/style";
import { AnswerWrapper, CorrectWrapper, IncorrectWrapper } from "./style";
import { useRecoilValue } from "recoil";
import useAnswerCheck from "src/hooks/useAnswerCheck";
import { answerButtonState, isCorrect } from "src/atoms";

interface AnswerButtonProps {
  answer: string;
}

export default function AnswerButton({ answer }: AnswerButtonProps) {
  const isWriteAnswer = useRecoilValue(answerButtonState);
  const { handleAnswerCheck } = useAnswerCheck();
  const isCorrectAnswer = useRecoilValue(isCorrect);

  return (
    <>
      {!isWriteAnswer && (
        <ButtonWrapper
          size="sm"
          onClick={() => handleAnswerCheck(answer)}
          isAnswer
        >
          정답 확인
        </ButtonWrapper>
      )}
      {isWriteAnswer && (
        <AnswerWrapper>
          {isCorrectAnswer ? (
            <CorrectWrapper>정답입니다 :)</CorrectWrapper>
          ) : (
            <IncorrectWrapper>틀렸습니다 :)</IncorrectWrapper>
          )}
          {answer}
        </AnswerWrapper>
      )}
    </>
  );
}
