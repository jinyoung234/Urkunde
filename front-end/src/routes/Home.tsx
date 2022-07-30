import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { weatherAPI, weatherAPIDefault ,IWeatherInfo } from "../utils/api";

const Container = styled.div`
    padding: 80px 80px;
    height: 120vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.div`
    background-color: rgba(0,0,0,0);
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 45px;
    font-weight: 500;
    margin : 30px 0px;
    color: ${props => props.theme.textColor};
`;

const SubTitle =styled.div`
    font-size: 20px;
    margin-bottom: 30px;
    color: ${props => props.theme.textColor};
`;


/* weather styled-components */
const WeatherContainter = styled.div`
    background-color: white;
    border: 0px;
    border-radius: 40px;
    width: 60%;
    height: 90%;
    display : flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12);

`

const WeatherC = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 70%;
    height: 60%;
    border: 0px;
    border-radius: 20px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
`
const Button = styled.button`
    margin : 50px 0px;
    width: 18%;
    border: 0px;
    height: 8%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #3C73CF;
    color: white;
`

const WeatherContent = styled.div`
    display: flex;
    justify-content: center;
    font-size: 45px;
`
/* end weather styled-components */


function Home() {

    // 사용자로 부터 입력을 받는 input state 
    const [inputState, setInputState] = useState(true);

    // 사용자의 도시를 확인하는 state
    const [city, setCityState] = useState('');

    // inputState and cityState 변경 함수
    const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            setCityState(e.currentTarget.value);
            setInputState(false);
        }
    }

    // api로 받은 데이터
    const {data:data} = useQuery<IWeatherInfo>(["api", "weather"], weatherAPIDefault);
    
    // 데이터로 받은 지역의 온도
    const temp = Math.round((data?.main.temp as number) - 273.15);
    
    // 도시의 현재 날씨 
    const weather = data?.weather[0].main;

    const page = useNavigate();
    const goToPage = () => {
        page("/check");
    }

    return (
        <Container>
            <Title>학습하러 오신 것을 환영합니다!</Title>
            <SubTitle> Urkunde에서 학습 해보세요 :) </SubTitle>
            <WeatherContainter>
                <WeatherC>
                    <Title style={{color:'black', marginTop:'0px', marginBottom:'10px'}}>{data?.name}</Title>
                    <WeatherContent>{temp + "℃"}</WeatherContent>
                    { weather === "Clouds" && <svg style={{width: '100px', height:'100px'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50"><path d="M40.996 23.2a6.008 6.008 0 0 0-5.35-6.165A12.94 12.94 0 0 0 23 7c-7.168 0-13 5.832-13 13 0 .384.02.775.06 1.18C4.902 22.106 1 26.669 1 32c0 6.065 4.935 11 11 11h27c5.514 0 10-4.486 10-10a9.956 9.956 0 0 0-8.004-9.8zM39 41H12c-4.963 0-9-4.038-9-9 0-4.651 3.631-8.588 8.267-8.962l1.091-.088-.186-1.078A11.068 11.068 0 0 1 12 20c0-6.065 4.935-11 11-11 5.393 0 9.95 3.862 10.836 9.182l.145.871.882-.036A.503.503 0 0 0 35 19c2.206 0 4 1.794 4 4 0 .272-.03.553-.091.835l-.235 1.096 1.115.109A7.965 7.965 0 0 1 47 33c0 4.411-3.589 8-8 8z"/></svg>
                    }
                    { weather === "Clear" &&
                        <img style={{marginTop : '10px'}} src="https://www.svgrepo.com/show/67337/sunny-day.svg" width="70" height="70" alt="Sunny Day SVG Vector" title="Sunny Day SVG Vector"></img>
                    }
                    {
                        weather === 'Rain' &&
                        <img style={{marginTop : '20px'}} src="https://www.svgrepo.com/show/140526/raining.svg" width="70" height="70" alt="Raining SVG Vector" title="Raining SVG Vector"></img>
                    }
                </WeatherC>
                <Button
                    onClick={goToPage}
                >
                    Go to Ukkunde
                </Button>
            </WeatherContainter>
        </Container>
    )
}

export default Home;