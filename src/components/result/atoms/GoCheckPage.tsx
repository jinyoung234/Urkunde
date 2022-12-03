import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { SubTitle } from "src/components/commons/Commons";
import { answerState } from "src/atoms";

export default function GoCheckPage() {
  const setAnswer = useSetRecoilState(answerState);

  const handleGoPage = () => {
    setAnswer("");
  };
  return (
    <SubTitle style={{ fontWeight: "500" }} onClick={handleGoPage}>
      <Link to="/check">체크 페이지로 이동하기</Link>
    </SubTitle>
  );
}
