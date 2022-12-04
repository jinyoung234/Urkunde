import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import useLoadAllQuestion from "src/hooks/useLoadAllQuestion";
import { currentIndex } from "src/atoms";
import { GoResultLinkWrapper } from "./style";

export default function GoResultLink() {
  const curr = useRecoilValue(currentIndex);
  const { questionNumber } = useLoadAllQuestion();
  return (
    <>
      {curr + 1 === questionNumber && (
        <GoResultLinkWrapper>
          <Link to="/result">결과 확인하러 가기</Link>
        </GoResultLinkWrapper>
      )}
    </>
  );
}
