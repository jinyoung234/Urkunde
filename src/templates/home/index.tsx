import { Container } from "src/components/commons/style";
import PrimaryButton from "src/components/commons/button/PrimaryButton";
import PageTitle from "src/components/commons/pageTitle";
import Weather from "src/components/home/weather";

export default function HomeTemplate(): React.ReactElement {
  return (
    <Container>
      <PageTitle
        url={""}
        title="학습하러 오신 것을 환영합니다"
        subtitle="Urkunde에서 학습 해보세요"
      />
      <Weather />
      <PrimaryButton size="sm" goPage={"check"} content={"이동 하기"} />
    </Container>
  );
}
