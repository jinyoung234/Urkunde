import { useRecoilState, useSetRecoilState } from "recoil";
import { answerState, questionNum, questionSet, questionState } from "src/utils/storage";

export default function useCreate() {
    // 문제와 답의 state
    const [question, setQuestion] = useRecoilState(questionState);
    const [answer, setAnswer] = useRecoilState(answerState);

    // 문제-답(1세트) state
    const setSet = useSetRecoilState(questionSet);
    const setQuestionNumber = useSetRecoilState(questionNum)

    // 문제 생성 버튼
    const handleCreateQuestion = (question : string, answer : string) => {
        if(question === '' || answer === '') {
            alert("문제나 답을 다시 입력해주세요 :)");
            return
        }
        setSet((oldSet) => {
            const newSet = {id:Date.now(), question: question, answer: answer};
            return [newSet, ...oldSet];
        })
        // 문제 갯수 counting
        setQuestionNumber((prevNum:number) => prevNum+1);
        // 생각해봐야 할 점
        // 1. 버튼을 누르면 textArea와 input의 있는 text들이 초기화 되어야 함.
        setQuestion('');
        setAnswer('');
        window.location.reload();
    }

    return {
        handleCreateQuestion,
        question,
        answer
    }
}