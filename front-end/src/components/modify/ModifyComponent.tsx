import BackButton from "src/components/commons/BackButton";
import EmptyQuestionForm from "src/components/modify/atoms/EmptyQuestionForm";
import ModfiyQuestionForm from "src/components/modify/molecules/ModifyQuestionForm";
import { Container, Title, SubTitle } from "src/components/commons/Commons";


export default function ModifyComponent() {
    return (
        <Container style={{height : 'auto'}}>
            <BackButton url={'/create'}/>
            <Title>
                MODIFY QUESTION
            </Title>
            <SubTitle> 잘못 만든 문제들을 삭제 해보세요 :) </SubTitle>
            <ModfiyQuestionForm/>
            <EmptyQuestionForm/>
        </Container>
    )   
}