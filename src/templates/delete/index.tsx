import PageTitle from "src/components/commons/pageTitle";
import { Container } from "src/components/commons/style";
import DeleteQuestionForm from "src/components/delete/deleteQuestionForm";
import EmptyQuestionForm from "src/components/delete/emptyQuestionForm";

export default function DeleteTemplate() {
  return (
    <Container isDelete>
      <PageTitle
        title="DELETE QUESTION"
        subtitle="잘못 만든 문제들을 삭제 해보세요 :)"
        url="/create"
      />
      <DeleteQuestionForm />
      <EmptyQuestionForm />
    </Container>
  );
}
