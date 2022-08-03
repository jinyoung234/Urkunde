import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { CommonComponent, Container, SubTitle, Title } from "../components/Commons";
import { correctNum, questionNum } from "../utils/storage";

function SelfCheckResult() {
    const correctQuestion = useRecoilValue(correctNum);
    const allQuestion = useRecoilValue(questionNum);
    return (
        <Container style={{height: '100vh'}}>
            <Title> RESULT PAGE </Title>
            <SubTitle style={{fontWeight:'500'}}><Link to="/check">체크 페이지로 이동하기</Link></SubTitle>
            <CommonComponent>
            <Title style={{color:'black'}}> 결과 </Title>
            <Title style={{marginTop : '0px', color:'black', fontWeight:'300'}}>{correctQuestion} / {allQuestion}</Title>
            </CommonComponent>
        </Container>
    )
}

export default SelfCheckResult;