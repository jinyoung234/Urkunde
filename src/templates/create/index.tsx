import PageTitle from "src/components/commons/pageTitle";
import { Container } from "src/components/commons/style";
import CreateQuestion from "src/components/create/createQuestion";

export default function CreateTemplate() {
  return (
    <Container>
      <PageTitle
        title="CREATE QUESTION"
        subtitle="체크하고 싶은 문제를 만들어 보세요 :)"
        url="/check"
      />
      <CreateQuestion />
    </Container>
  );
}
