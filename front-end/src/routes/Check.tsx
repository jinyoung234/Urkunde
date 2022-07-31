import { HeadTitle, CommonComponent, Container, PrimaryButton, SubTitle, Title, CircleComponent, Circle } from "../components/Commons";
import ApexChart from "react-apexcharts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface IWeekInfo {
    id : number
    date : string,
    state : boolean
}

function Check() {

    // week state
    const [week, setWeek] = useState<IWeekInfo[]>([
        {id: 0, date: '월', state: false},
        {id: 1, date: '화', state: false}, 
        {id: 2, date: '수', state: false}, 
        {id: 3, date: '목', state: false}, 
        {id: 4, date: '금', state: false}, 
        {id: 5, date: '토', state: false}, 
        {id: 6, date: '일', state: false}
    ]);

    // Weekly Check에서 원을 클릭 시 체크 된 원으로 변경
    const handleOnCircleClick = (id : number) => {     
        setWeek((oldWeek) => {
            // 기존 week의 id과 인자로 받은 요일의 id가 같으면 oldWeek 해당 요일의 인덱스를 반환
            const index = oldWeek.findIndex(day => day.id === id);
            // 해당 요일에 대해 state가 변한 새로운 object 생성
            const newDay = {id, date: week[index].date, state: !week[index].state};
            // 새로운 Week를 리턴
            const newWeek = [...oldWeek.slice(0, index), newDay, ...oldWeek.slice(index+1)];
            /* 생각해 봐야할 점 */
            // id 0~6의 state가 모두 true라면 모든 week의 state를 초기화
            return newWeek;
        })
    }

    // 문제 만들기 페이지로 이동
    const createQuestion = useNavigate();
    const handleCreateQuestion = () => {
        createQuestion('/create');
    }

    return (
        <Container>
            <Title>CHECK PAGE</Title>
            <SubTitle>체크한 결과를 확인 하며, 매주 체크했다면 기록해보세요 :) </SubTitle>
            <CommonComponent style={{paddingTop: '20px'}}>
                <HeadTitle>Today Result</HeadTitle>
                <ApexChart
                    type="donut"
                    width="100%"
                    heihgt="100px"
                    series={[0,0]}
                    options={{
                        series: [0,0],
                        labels: ['O', 'X'],
                        plotOptions:{
                            pie:{
                                donut:{
                                    labels:{
                                        show: true,
                                        total:{
                                            show:true,
                                            showAlways:true,
                                            fontSize:"24px",
                                            color:"#2787AB"
                                        }
                                    }
                                }
                            }
                        }
                    }}
                />
                <PrimaryButton
                    onClick={handleCreateQuestion}
                >
                    문제 만들기
                </PrimaryButton>
            </CommonComponent>
            <CommonComponent style={{padding:'5px 0px',borderRadius:'28px', marginTop:'30px', height: '200px'}}>
                    <HeadTitle>Weekly Check</HeadTitle>
                    <CircleComponent>
                        {week.map(day => 
                          day.state === true ? 
                            (<Circle 
                                onClick={() => handleOnCircleClick(day.id)}
                                key={day.id}>v</Circle>) : 
                            ( 
                                <Circle
                                    onClick={() => handleOnCircleClick(day.id)} 
                                    key={day.id}
                                >
                                    {day.date}
                                </Circle>
                            )
                        )}
                    </CircleComponent>
            </CommonComponent>
        </Container>
    )
}

export default Check