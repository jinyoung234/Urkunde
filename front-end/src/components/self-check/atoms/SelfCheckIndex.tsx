import { useRecoilValue } from "recoil";
import { SubTitle } from "src/components/commons/Commons"
import useLoadAllQuestion from "src/hooks/useLoadAllQuestion"
import { currentIndex } from "src/utils/storage";

export default function SelfCheckIndex() {
    const {questionNumber} = useLoadAllQuestion();
    const currIndex = useRecoilValue(currentIndex);
    return(
        <SubTitle> 
            {questionNumber === 0 ? currIndex : currIndex + 1} / {questionNumber} 
        </SubTitle>
    )
}