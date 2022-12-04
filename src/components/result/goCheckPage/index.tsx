import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { answerState } from "src/atoms";
import { GoCheckPageWrapper } from "./style";

export default function GoCheckPage() {
  const setAnswer = useSetRecoilState(answerState);

  const handleGoPage = () => {
    setAnswer("");
  };
  return (
    <GoCheckPageWrapper onClick={handleGoPage}>
      <Link to="/check">체크 페이지로 이동하기</Link>
    </GoCheckPageWrapper>
  );
}
