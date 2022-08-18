import { useSetRecoilState } from "recoil";
import { answerState, questionState } from "src/utils/storage";

export default function useQuestionSet() {

    const setQuestion = useSetRecoilState(questionState);
    const addQuestion = (e:React.ChangeEvent<HTMLInputElement>) => {
        setQuestion(e.currentTarget.value);
    }

    const setAnswer = useSetRecoilState(answerState); 
    const addAnswer = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(e.currentTarget.value);
    }
    
    return {
        addQuestion,
        addAnswer
    }
}