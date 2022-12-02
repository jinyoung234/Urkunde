import { useSetRecoilState } from "recoil";
import { correctNum, incorrectNum, questionNum, questionSet } from "src/utils/storage";

export default function useReset() {

    const setQuestionNumber = useSetRecoilState(questionNum);
    const correctQuestionsNum = useSetRecoilState(correctNum);
    const incorrectQuestionsNum = useSetRecoilState(incorrectNum);
    const setSet = useSetRecoilState(questionSet);

    const handleResetButton = () => {
        correctQuestionsNum(0);
        incorrectQuestionsNum(0);
        setQuestionNumber(0);
        setSet((prevQuestions) => {
            return prevQuestions = [];
        })
    }

    return {
        handleResetButton
    }
}