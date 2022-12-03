import { useRecoilValue } from "recoil";
import {
  Correct,
  Incorrect,
  ModifyPageTitle,
} from "src/components/commons/Commons";
import { Button } from "src/components/commons/PrimaryButton";
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
        <Button
          onClick={() => handleAnswerCheck(answer)}
          style={{ margin: "0px 0px", marginTop: "20px" }}
        >
          정답 확인
        </Button>
      )}
      {isWriteAnswer && (
        <ModifyPageTitle
          style={{
            marginTop: "15px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {isCorrectAnswer ? (
            <Correct>정답입니다 :)</Correct>
          ) : (
            <Incorrect>틀렸습니다 :)</Incorrect>
          )}
          {answer}
        </ModifyPageTitle>
      )}
    </>
  );
}
