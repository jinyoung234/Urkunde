import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { SubTitle } from "src/components/commons/Commons";
import useLoadAllQuestion from "src/hooks/useLoadAllQuestion";
import { currentIndex } from "src/utils/storage";

export default function GoResultLink() {
    const curr = useRecoilValue(currentIndex);
    const {questionNumber} = useLoadAllQuestion();
    return (
        <>
            {curr + 1 === questionNumber && 
            <SubTitle style={{fontWeight:'500'}}>
                <Link to="/result">결과 확인하러 가기</Link>
            </SubTitle>}
        </>
    )
}