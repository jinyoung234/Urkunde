import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { Container, CommonComponent, Title, SubTitle, HeadTitle, PrimaryLargeButton, CheckSubComponent, Answer } from "../components/Commons";
import { CommonInput } from "../components/Input";
import { questionNum, questionSet } from "../utils/storage";

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
    console.log(question, answer);

    // 문제-답(1세트) state
    const [set, setSet] = useRecoilState(questionSet);
    console.log(set);
    // 문제 생성 버튼
    const handleCreateQuestion = (question:string, answer:string) => {
        setSet((oldSet) => {
            const newSet = {id:Date.now(), question: question, answer: answer};
            return [newSet, ...oldSet];
        })
        // 문제 갯수 counting
        setQuestionCount((prevNum:number) => prevNum+1);
        // 생각해봐야 할 점
        // 1. 버튼을 누르면 textArea와 input의 있는 text들이 초기화 되어야 함.
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


    return (
        <Container style={{height: '130vh'}}>
            <Title>CREATE QUESTION</Title>
            <SubTitle>체크하고 싶은 문제를 만들어 보세요 :) </SubTitle>
            <CommonComponent style={{padding:'0px' ,height: '80vh'}}>
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
                        onClick={goModifyQuestion}>문제 수정</PrimaryLargeButton>
                    <PrimaryLargeButton
                        onClick={goToSelfCheck}>점검 하러 하기</PrimaryLargeButton>
                </CheckSubComponent>
            </CommonComponent>
        </Container>
    )
}

export default CreateQuestion;