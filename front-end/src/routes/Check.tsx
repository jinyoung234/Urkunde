import { 
    HeadTitle, CommonComponent, Container, PrimaryButton, SubTitle, Title, CircleComponent, Circle, BackCircle 
} from "../components/Commons";
import ApexChart from "react-apexcharts";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { correctNum, incorrectNum } from "../utils/storage";
import { useRecoilValue } from "recoil";

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

    // 그래프에 표시되는 맞는 갯수, 틀린 갯수 표시
    const correctQuestion = useRecoilValue(correctNum);
    const incorrectQuestion = useRecoilValue(incorrectNum);

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
    
    // 뒤로가기 버튼
    const moveBack = useNavigate();
    const handleBackCircleClick = () => {
        moveBack('/');
    }
    return (
        <Container>
            <BackCircle
                onClick = {handleBackCircleClick}
            >
                <img style={{marginRight:'2px', width: '50%'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo=" />
            </BackCircle>
            <Title>CHECK PAGE</Title>
            <SubTitle>체크한 결과를 확인 하며, 매주 체크했다면 기록해보세요 :) </SubTitle>
            <CommonComponent style={{paddingTop: '20px'}}>
                <HeadTitle>Today Result</HeadTitle>
                <ApexChart
                    style={{marginLeft: '50px', marginTop : '40px'}}
                    type="donut"
                    width="100%"
                    series={[correctQuestion,incorrectQuestion]}
                    options={{
                        colors : ['#3D6FF3', '#F20000'],
                        series: [incorrectQuestion,incorrectQuestion],
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
                                style={{color:'white', backgroundColor:'#3AA84C'}} 
                                onClick={() => handleOnCircleClick(day.id)}
                                key={day.id}>
                                    <svg id="SvgjsSvg1012" width="30" height="30" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink"><defs id="SvgjsDefs1013"></defs><g id="SvgjsG1014"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" width="30" height="30"><rect width="256" height="256" fill="none"></rect><polyline fill="none" stroke="white" stroke-linecap="round" stroke-linejoin="round" stroke-width="24" points="216 72.005 104 184 48 128.005"></polyline></svg></g></svg>
                                    </Circle>) : 
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