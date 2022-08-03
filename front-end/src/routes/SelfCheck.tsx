import { useSetRecoilState, useRecoilValue } from "recoil"
import { questionSet, correctNum, incorrectNum, questionNum } from "../utils/storage"
import { ForSelfCheckSubComponent, Container, Title, SubTitle, HeadTitle, ModifyPageTitle, ForSelfCheckComponent, PrimaryButton, Answer, Correct, Incorrect, SliderLeftButton, SliderRightButton, BackCircle } from "../components/Commons";
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

// slider Animation
export const questionVariants = {
    start:((isSliderMotionChange : boolean) => {
        return ({
            opacity:0,
            scale:0,
            x: isSliderMotionChange ? -window.innerWidth : window.innerWidth,
            y: -100,
        })
    }),
    end: {
        opacity:1,
        scale:1,
        x:0,
        y:-0,
        transition:{
            type:'tween',
            duration:0.8
        }
    },
    exit:((isSliderMotionChange : boolean) => {
        return ({
            opacity:0,
            scale:0,
            x: isSliderMotionChange ? window.innerWidth : -window.innerWidth,
            y: -100,
            transition:{
                type:'tween',
                duration:0.8
            }
        })
    })
}

function SelfCheck() {
    // 전체 문제 갯수 state
    const quesionNumber = useRecoilValue(questionNum);
    
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

    // 왼쪽 슬라이더, 오른쪽 슬라이더 버튼 클릭 시 event
    const handleLeftSlider = () => {
        setsliderMotionChange(true);
        setSelfCheckNum((prev) => prev === 0 ? prev : prev - 1);
        setAnswerState(false);
    }

    const handleRightSlider = () => {
        setsliderMotionChange(false);
        setSelfCheckNum((prev) => prev === questions.length-1 ? prev : prev + 1);
        setAnswerState(false);
    }

    // 왼쪽 슬라이더 state
    const [sliderMotionChange, setsliderMotionChange] = useState(false);

    // 뒤로가기 버튼
    const moveBack = useNavigate();
    const handleBackCircleClick = () => {
        moveBack('/create');
    }
    
    return (
       <Container style={{height: selfCheckNum + 1 === quesionNumber ? '111vh' : '104vh'}}>
            <BackCircle
                style={{left:'25%'}}
                onClick = {handleBackCircleClick}
            >
                <img style={{marginRight:'2px', width: '50%'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo=" />
            </BackCircle>
            <Title>
                SELF-CHECK
            </Title>
            <SubTitle>{quesionNumber === 0 ? selfCheckNum : selfCheckNum + 1} / {quesionNumber} </SubTitle>
            {
                quesionNumber === 0 ?
                <ForSelfCheckComponent>
                    <ForSelfCheckSubComponent style={{fontSize : '50px', display:'flex', justifyContent: 'center', marginTop : '200px', width: '60%', height: '60vh'}}>
                        <div>문제를 만들어주세요 :)</div>
                    </ForSelfCheckSubComponent>
                </ForSelfCheckComponent> : ''
            }
            {selfCheckNum + 1 === quesionNumber && <SubTitle style={{fontWeight:'500'}}><Link to="/result">결과 확인하러 가기</Link></SubTitle>}
                <ForSelfCheckComponent 
                        style={{display: 'flex', flexDirection:'row', position:'relative', padding: '0px 0px'}}
                >
                <AnimatePresence
                    custom = {sliderMotionChange}    
                >
                        {questions.map(question => questions.findIndex(prevQuestion => prevQuestion.question === question.question) ===  selfCheckNum ? 
                        (<ForSelfCheckSubComponent
                            custom={sliderMotionChange}
                            variants={questionVariants}
                            initial = {"start"}
                            animate = {"end"}
                            exit={"exit"}
                            key={question.id}
                         >
                        <HeadTitle>문제</HeadTitle>
                        <ModifyPageTitle style={{marginBottom:'30px'}}>{question.question}</ModifyPageTitle>
                        <SliderLeftButton
                            onClick = {handleLeftSlider}
                        > 
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo=" />
                        </SliderLeftButton>
                        <Answer
                            onChange={handleWriteAnswer} 
                            style={{marginTop : '20px' ,width: '76%', borderRadius:'20px'}}
                            placeholder="작성한 답과 동일하게 적어주세요 :) "
                        />
                        <SliderRightButton
                            onClick = {handleRightSlider}
                        >
                            <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8cGF0aCBkPSJtMjc3LjAyIDYwMC45NWMtNi42Mjg5IDAtMTMuNzM0LTIuMzY3Mi0xOC45NDEtNy41NzgxLTEwLjQxOC0xMC40MTgtMTAuNDE4LTI2Ljk5MiAwLTM3LjQxNGwxNzkuNDgtMTc5Ljk2LTE3OS40OS0xNzkuNDhjLTEwLjQxOC0xMC40MTgtMTAuNDE4LTI2Ljk5MiAwLTM3LjQxNCAxMC40MjItMTAuNDE4IDI2Ljk5Ni0xMC40MTggMzcuNDE0LTAuNDcyNjZsMTk4LjQzIDE5OC40M2M1LjIxMDkgNS4yMTA5IDcuNTc4MSAxMS44NCA3LjU3ODEgMTguOTQxIDAgNy4xMDU1LTIuODM5OCAxMy43MzQtNy41NzgxIDE4Ljk0MWwtMTk4LjQzIDE5OC40M2MtNS4yMDcgNS4yMTA5LTExLjg0IDcuNTc4MS0xOC40NjkgNy41NzgxeiIvPgo8L3N2Zz4K"/>
                        </SliderRightButton>
                        {!answerState && <PrimaryButton 
                            onClick={() => handleAnswerCheck(question.answer)}
                            style={{margin:'0px 0px', marginTop : '20px'}}
                        >
                            정답 확인
                        </PrimaryButton>}
                        {answerState && 
                        <ModifyPageTitle style={{marginTop: '15px', display:'flex', flexDirection:'column'}}>
                            {isCollect ? <Correct>정답입니다 :)</Correct> : <Incorrect>틀렸습니다 :)</Incorrect>}
                            {question.answer}
                        </ModifyPageTitle>}
                    </ForSelfCheckSubComponent>) : '')}
                    </AnimatePresence>
                </ForSelfCheckComponent>
                
        </Container>
    )
}

export default SelfCheck