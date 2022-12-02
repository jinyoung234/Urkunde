import {
  CommonComponent,
  CommonSubComponent,
  Container,
  SubTitle,
  Title,
} from "src/components/commons/Commons";
import PrimaryButton from "src/components/commons/PrimaryButton";
import WeatherState from "src/components/home/atoms/WeatherState";
import Temperature from "src/components/home/atoms/Temperature";
import useWeatherData from "src/hooks/useWeatherData";

export default function HomeComponent(): React.ReactElement {
  const { name, temp, weather } = useWeatherData();
  return (
    <Container>
      <Title>학습하러 오신 것을 환영합니다</Title>
      <SubTitle> Urkunde에서 학습 해보세요 </SubTitle>
      <CommonComponent>
        <CommonSubComponent>
          <Title
            style={{ color: "black", marginTop: "0px", marginBottom: "10px" }}
          >
            {name}
          </Title>
          <Temperature temp={temp}></Temperature>
          <WeatherState weather={weather as string} />
        </CommonSubComponent>
        <PrimaryButton
          goPage={"check"}
          content={"Go to Ukkunde"}
        ></PrimaryButton>
      </CommonComponent>
    </Container>
  );
}
