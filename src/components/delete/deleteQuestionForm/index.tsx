import { questionSet } from "src/atoms";
import DangerButton from "src/components/delete/deleteQuestionForm/button/DangerButton";
import { useRecoilValue } from "recoil";
import ContainerTitle from "src/components/commons/containerTitle";
import { DeleteFormWrapper, DeleteTitleWrapper } from "./style";

export default function DeleteQuestionForm() {
  // 생성한 문제들을 RecoilState로 관리
  const quiz = useRecoilValue(questionSet);
  return (
    <>
      {quiz.map((question) => (
        <DeleteFormWrapper key={question.id}>
          <ContainerTitle title="문제" />
          <DeleteTitleWrapper>{question.question}</DeleteTitleWrapper>
          <ContainerTitle title="답" />
          <DeleteTitleWrapper>{question.answer}</DeleteTitleWrapper>
          <DangerButton id={question.id} />
        </DeleteFormWrapper>
      ))}
    </>
  );
}
