import { useQuery } from "@tanstack/react-query";
import { CommonComponent, CommonSubComponent, Container, SubTitle, Title, WeatherContent } from "src/components/commons/Commons"
import { weatherAPIDefault, IWeatherInfo } from "src/utils/api";
import PrimaryButton from "src/components/commons/PrimaryButton";
import WeatherState from "src/components/home/WeatherState";


export default function HomeComponent () : React.ReactElement {
    // api로 받은 데이터
    const {data} = useQuery<IWeatherInfo>(["api", "weather"], weatherAPIDefault);

    // 데이터로 받은 지역의 온도
    const temp = Math.round((data?.main.temp as number) - 273.15);
    
    // 도시의 현재 날씨 
    const weather = data?.weather[0].main;
    return (
        <Container>
            <Title>학습하러 오신 것을 환영합니다!</Title>
            <SubTitle> Urkunde에서 학습 해보세요 :) </SubTitle>
            <CommonComponent>
                <CommonSubComponent>
                    <Title style={{color:'black', marginTop:'0px', marginBottom:'10px'}}>{data?.name}</Title>
                    <WeatherContent>{temp + "℃"}</WeatherContent>
                    <WeatherState weather={weather as string}/>
                </CommonSubComponent>
                <PrimaryButton
                    goPage={"check"}
                    content={"Go to Ukkunde"}
                >
                </PrimaryButton>
            </CommonComponent>
        </Container>
    )
}