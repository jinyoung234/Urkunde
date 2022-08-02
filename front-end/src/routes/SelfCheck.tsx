import { useSetRecoilState, useRecoilValue } from "recoil"
import { questionSet, correctNum, incorrectNum } from "../utils/storage"
import { ForSelfCheckSubComponent, Container, Title, SubTitle, HeadTitle, ModifyPageTitle, ForSelfCheckComponent, PrimaryButton, Answer, Correct, Incorrect, SliderLeftButton, SliderRightButton } from "../components/Commons";
import React, { useState } from "react";

function SelfCheck() {
    // 문제-답 set 배열
    const questions = useRecoilValue(questionSet);

    // 유저 입력 값을 담기 위한 state
    const [userAnswer, setUserAnswer] = useState('');

    // 정답 확인 버튼 누를 시 보여지는 답을 위한 state
    const [answerState, setAnswerState] = useState(false);

    // 정답 갯수 카운트위한 변수
    const increaseCorrectQuestion = useSetRecoilState(correctNum);

    // 틀린 갯수 카운트위한 변수
    const increaseIncorrectQuestion = useSetRecoilState(incorrectNum);

    // 유저가 작성한 답을 setUserAnswer에 저장
    const handleWriteAnswer = (event:React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserAnswer(event.currentTarget.value);
    }

    // 맞는지 틀린지 확인하여 true일 경우 correct, false면 incorrect 컴포넌트를 보여줌
    const [isCollect, setIsCollect] = useState(false);
    // 정답 확인 버튼을 누르면 정답인 경우 맞는 갯수 1 증가 및 correct 컴포넌트, 정답을 보여줌
    // 오답인 경우 틀린 갯수 1 증가 및 incorrect 컴포넌트, 정답을 보여줌
    const handleAnswerCheck = (answer : string) => {
        if(userAnswer === '') {
            alert('답을 작성해주세요 :)');
            return
        } 
        setAnswerState(true);
        if(userAnswer === answer) {
                setIsCollect(true);
                increaseCorrectQuestion((prev: number) => prev+1);
            } else {
                setIsCollect(false);
                increaseIncorrectQuestion((prev : number) => prev+1);
            }
    }

    // 슬라이더 index를 위한 state
    const [selfCheckNum, setSelfCheckNum] = useState(0);

    return (
       <Container style={{height: '100vh'}}>
            <Title>
                SELF-CHECK
            </Title>
            <SubTitle>만든 문제들을 하나씩 풀어보며 점검해보세요 :) </SubTitle>
                <ForSelfCheckComponent 
                    style={{display: 'flex', flexDirection:'row', position:'relative'}}>
                    {questions.map(question => questions.findIndex(prevQuestion => prevQuestion.question === question.question) ===  selfCheckNum ? 
                    (<ForSelfCheckSubComponent
                        key={question.id}
                >
                        <HeadTitle>문제</HeadTitle>
                        <ModifyPageTitle style={{marginBottom:'30px'}}>{question.question}</ModifyPageTitle>
                        <SliderLeftButton> <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo=" ></img></SliderLeftButton>
                        <Answer
                            onChange={handleWriteAnswer} 
                            style={{width: '76%', borderRadius:'20px'}}
                            placeholder="작성한 답과 동일하게 적어주세요 :) "
                        />
                        <SliderRightButton><img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjc3LjAyIDYwMC45NWMtNi42Mjg5IDAtMTMuNzM0LTIuMzY3Mi0xOC45NDEtNy41NzgxLTEwLjQxOC0xMC40MTgtMTAuNDE4LTI2Ljk5MiAwLTM3LjQxNGwxNzkuNDgtMTc5Ljk2LTE3OS40OS0xNzkuNDhjLTEwLjQxOC0xMC40MTgtMTAuNDE4LTI2Ljk5MiAwLTM3LjQxNCAxMC40MjItMTAuNDE4IDI2Ljk5Ni0xMC40MTggMzcuNDE0LTAuNDcyNjZsMTk4LjQzIDE5OC40M2M1LjIxMDkgNS4yMTA5IDcuNTc4MSAxMS44NCA3LjU3ODEgMTguOTQxIDAgNy4xMDU1LTIuODM5OCAxMy43MzQtNy41NzgxIDE4Ljk0MWwtMTk4LjQzIDE5OC40M2MtNS4yMDcgNS4yMTA5LTExLjg0IDcuNTc4MS0xOC40NjkgNy41NzgxeiIvPgo8L3N2Zz4K"/></SliderRightButton>
                        <PrimaryButton 
                            onClick={() => handleAnswerCheck(question.answer)}
                            style={{margin:'0px 0px', marginTop : '20px'}}
                        >
                            정답 확인
                        </PrimaryButton>
                        {answerState &&
                        <HeadTitle>답</HeadTitle>}
                        {answerState && 
                        <ModifyPageTitle style={{display:'flex', flexDirection:'column'}}>
                            {isCollect ? <Correct>정답입니다 :)</Correct> : <Incorrect>틀렸습니다 :)</Incorrect>}
                            {question.answer}
                        </ModifyPageTitle>}
                    </ForSelfCheckSubComponent>) : '')}
                </ForSelfCheckComponent>
        </Container>
    )
}

export default SelfCheck