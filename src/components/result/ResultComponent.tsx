import CheckResult from "src/components/result/atoms/CheckResult";
import GoCheckPage from "src/components/result/atoms/GoCheckPage";
import { CommonComponent, Container, Title } from "src/components/commons/Commons";

export default function ResultComponent() {
    return(
        <Container style={{height: '100vh'}}>
            <Title> RESULT PAGE </Title>
            <GoCheckPage/>
            <CommonComponent>
                <Title style={{color:'black'}}> 결과 </Title>
                <CheckResult/>
            </CommonComponent>
        </Container>
    )
}