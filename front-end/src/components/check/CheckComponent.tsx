import { 
    HeadTitle, CommonComponent, Container, SubTitle, Title, CircleComponent 
} from "src/components/commons/Commons";
import { useEffect } from "react";
import Chart from "src/components/check/atoms/Chart";
import PrimaryButton from "src/components/commons/PrimaryButton";
import BackButton from "src/components/commons/BackButton";
import Circle from "src/components/check/atoms/Circle";
import useTimer from "src/hooks/useTimer";

export default function CheckComponent() {
    // 현재 시간, 현재 날짜, 초기화 되기 전 week, state가 모두 false인 newWeek를 저장해놓은 customHook
    const {seconds, dayOfWeek, setWeek, newWeek} = useTimer();

    // 브라우저가 mount 됬을 때 일 -> 월로 넘어가는 00:00:00이면 모든 Circle State 초기화
    useEffect(() => {
        (seconds === '00:00:00' && dayOfWeek === 1) && setWeek(
            (week) => {
                return newWeek;
            }
        );
    },[seconds]);

    return (
        <Container>
            <BackButton url={"/"} />
            <Title>CHECK PAGE</Title>
            <SubTitle>체크한 결과를 확인 하며, 매주 체크했다면 기록해보세요 :) </SubTitle>
            <CommonComponent style={{paddingTop: '20px'}}>
                <HeadTitle>Today Result</HeadTitle>
                <Chart/>
                <PrimaryButton
                    goPage={"/create"}
                    content={"문제 만들기"}
                >
                </PrimaryButton>
            </CommonComponent>
            <CommonComponent style={{padding:'5px 0px',borderRadius:'28px', marginTop:'30px', height: '200px'}}>
                <HeadTitle>Weekly Check</HeadTitle>
                <CircleComponent>
                    <Circle/>
                </CircleComponent>
            </CommonComponent>
        </Container>
    )
}