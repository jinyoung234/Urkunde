import { useRecoilValue } from "recoil";
import { questionNum } from "src/utils/storage";

export default function useLoadAllQuestion() {
    // Question 갯수는 check 페이지에서도 써야하기 때문에 useRecoilState로 관리
    const questionNumber = useRecoilValue(questionNum);
    return {
        questionNumber,
    }
}