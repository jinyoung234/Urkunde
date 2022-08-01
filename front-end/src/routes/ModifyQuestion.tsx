import { useRecoilState, useSetRecoilState } from "recoil";
import { CommonSubComponent, Container, Title, SubTitle, HeadTitle, DangerButton, ModifyPageTitle } from "../components/Commons";
import { questionNum, questionSet } from "../utils/storage";

function ModifyQuestion() {
    // 생성한 문제들을 RecoilState로 관리
    const [getQuestions, setQuestions] = useRecoilState(questionSet);

    // 문제 삭제 시 삭제한 문제 수를 업데이트 하기 위한 변수
    const setAllQuestion = useSetRecoilState(questionNum);

    // 삭제하기 버튼을 누르면 해당 문제를 삭제 -> 문제 수 1 감소
    const handleDeleteQuestion = (id:number) => {
        setQuestions((oldQuestion) => {
            const index = oldQuestion.findIndex(question => question.id === id);
            return [...oldQuestion.slice(0, index), ...oldQuestion.slice(index+1)];
        })
        setAllQuestion((prev:number) => prev-1);
    }

    return (
        <Container>
            <Title>
                MODIFY QUESTION
            </Title>
            <SubTitle>잘못 만든 문제들을 삭제 해보세요 :) </SubTitle>
            {getQuestions.map(question =>
            <CommonSubComponent 
                key={question.id}
                style={{padding:'30px 0px',height: '50%', marginBottom:'20px'}}
            >
                <HeadTitle>문제</HeadTitle>
                <ModifyPageTitle>{question.question}</ModifyPageTitle>
                <HeadTitle>답</HeadTitle>
                <ModifyPageTitle>{question.answer}</ModifyPageTitle>
                <DangerButton
                    onClick={() => handleDeleteQuestion(question.id)}
                >
                    삭제하기
                </DangerButton>
            </CommonSubComponent>)}
        </Container>
    )   
}

export default ModifyQuestion;