import ContainerTitle from "src/components/commons/containerTitle";
import Input from "./input";
import QuestionNumber from "./questionNumber";
import ResetButton from "./button/ResetButton";
import MovePageButton from "./button/MovePageButton";
import CreateButton from "./button/CreateButton";
import TextArea from "./textArea";
import useCreate from "src/hooks/useCreate";
import useLoadAllQuestion from "src/hooks/useLoadAllQuestion";
import useReset from "src/hooks/useReset";
import useQuestionSet from "src/hooks/useSetQuestion";
import { CreateQuestionSubWrapper, CreateQuestionWrapper } from "./style";

export default function CreateQuestion() {
  const { questionNumber } = useLoadAllQuestion();

  const { handleCreateQuestion, question, answer } = useCreate();

  const { handleResetButton } = useReset();

  const { addQuestion, addAnswer } = useQuestionSet();
  return (
    <CreateQuestionWrapper>
      <ContainerTitle title="Create Question" />
      <CreateQuestionSubWrapper>
        <Input changeFn={addQuestion} />
        <TextArea changeFn={addAnswer} />
        <QuestionNumber questionNumber={questionNumber} />
        <CreateButton
          createQuesitonFn={handleCreateQuestion}
          content={"문제 생성"}
          question={question}
          answer={answer}
        />
        <MovePageButton url={"/delete"} content={"문제 삭제"} />
        <ResetButton resetFn={handleResetButton} content={"문제 리셋"} />
        <MovePageButton
          url={"/self-check"}
          content={"점검하러 가기"}
          isCheck={true}
        />
      </CreateQuestionSubWrapper>
    </CreateQuestionWrapper>
  );
}
