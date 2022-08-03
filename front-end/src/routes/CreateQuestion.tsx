import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState, useSetRecoilState } from "recoil";
import { Container, CommonComponent, Title, SubTitle, HeadTitle, PrimaryLargeButton, CheckSubComponent, Answer, BackCircle } from "../components/Commons";
import { CommonInput } from "../components/Input";
import { correctNum, incorrectNum, questionNum, questionSet } from "../utils/storage";

function CreateQuestion() {
    // Question 갯수는 check 페이지에서도 써야하기 때문에 useRecoilState로 관리
    const [allQuestion, setQuestionCount] = useRecoilState(questionNum);

    // 문제와 답의 state
    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const addQuestion = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    }
    const addAnswer = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(e.currentTarget.value);
    }

    // 문제-답(1세트) state
    const setSet = useSetRecoilState(questionSet);
    // 문제 생성 버튼
    const handleCreateQuestion = (question:string, answer:string) => {
        if(question === '' || answer === '') {
            alert("문제나 답을 다시 입력해주세요 :)");
            return
        }
        setSet((oldSet) => {
            const newSet = {id:Date.now(), question: question, answer: answer};
            return [newSet, ...oldSet];
        })
        // 문제 갯수 counting
        setQuestionCount((prevNum:number) => prevNum+1);
        // 생각해봐야 할 점
        // 1. 버튼을 누르면 textArea와 input의 있는 text들이 초기화 되어야 함.
    }

    const correctQuestionsNum = useSetRecoilState(correctNum);
    const incorrectQuestionsNum = useSetRecoilState(incorrectNum);

    // 리셋 버튼을 누를 시, 문제 갯수, 정답, 오답 갯수 모두 초기화
    const handleResetButton = () => {
        correctQuestionsNum(0);
        incorrectQuestionsNum(0);
        setQuestionCount(0);
        setSet((prevQuestions) => {
            return prevQuestions = [];
        })
    }

    // 자가 점검 페이지로 이동
    const selfCheckPage = useNavigate();
    const goToSelfCheck = () => {
        selfCheckPage("/self-check")
    }

    // 문제 수정 페이지로 이동
    const modifyQuestionPage = useNavigate()
    const goModifyQuestion = () => {
        modifyQuestionPage("/modify");
    }

    // 뒤로가기 버튼
    const moveBack = useNavigate();
    const handleBackCircleClick = () => {
        moveBack('/check');
    }

    return (
        <Container style={{height: '150vh'}}>
            <BackCircle
                onClick = {handleBackCircleClick}
            >
                <img style={{marginRight:'2px', width: '50%'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo=" />
            </BackCircle>
            <Title>CREATE QUESTION</Title>
            <SubTitle>체크하고 싶은 문제를 만들어 보세요 :) </SubTitle>
            <SubTitle>문제들을 다 풀었다면 문제 리셋을 한 후 "점검 하러 가기"로 이동해주세요 :) </SubTitle>
            <CommonComponent style={{padding:'0px' ,width:'75%',height: '100vh'}}>
                <HeadTitle>Create Question</HeadTitle>
                <CheckSubComponent
                >
                    <CommonInput
                        onChange={addQuestion}
                        style={{borderRadius: '10px', marginBottom:'20px'}} 
                        placeholder="문제를 생성해 보세요 :)"
                    />
                    <Answer
                        onChange={addAnswer}
                        placeholder="문제에 맞는 답을 적어 주세요 :)"/>
                    <SubTitle style={{color:'black', margin:'10px'}}> Question : {allQuestion} </SubTitle>
                    <PrimaryLargeButton
                        onClick={() => handleCreateQuestion(question, answer)}
                    >
                        문제 생성
                    </PrimaryLargeButton>
                    <PrimaryLargeButton
                        onClick={goModifyQuestion}>문제 수정
                    </PrimaryLargeButton>
                    <PrimaryLargeButton
                        onClick={handleResetButton}>문제 리셋
                    </PrimaryLargeButton>
                    <PrimaryLargeButton
                        onClick={goToSelfCheck}>점검 하러 하기
                    </PrimaryLargeButton>
                </CheckSubComponent>
            </CommonComponent>
        </Container>
    )
}

export default CreateQuestion;