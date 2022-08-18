import { useSetRecoilState } from "recoil";
import { answerState } from "src/utils/storage";
import styled from "styled-components";


export const Answer = styled.textarea`
    width: 70%;
    height: 70px;
    border : 0px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
    border-radius: 10px;
    text-align: center;
    padding: 25px 0px;
    margin-bottom: 20px;
    resize : none;
`;

export default function TextArea() {
    const setAnswer = useSetRecoilState(answerState); 
    const addAnswer = (e:React.ChangeEvent<HTMLTextAreaElement>) => {
        setAnswer(e.currentTarget.value);
    }
    return (
        <Answer
            onChange={addAnswer}
            placeholder="문제에 맞는 답을 적어 주세요 :)"
        />
    )
}