import CheckResult from "src/components/result/checkResult";
import GoCheckPage from "src/components/result/goCheckPage";
import { Container } from "src/components/commons/style";
import {
  ResultFormContainer,
  ResultWrapper,
} from "src/components/result/style";

export default function ResultTemplate() {
  return (
    <Container>
      <ResultWrapper> RESULT PAGE </ResultWrapper>
      <GoCheckPage />
      <ResultFormContainer>
        <ResultWrapper isTitle> 결과 </ResultWrapper>
        <CheckResult />
      </ResultFormContainer>
    </Container>
  );
}
