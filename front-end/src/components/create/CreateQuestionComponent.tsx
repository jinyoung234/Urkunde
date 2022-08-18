import BackButton from "src/components/commons/BackButton";
import { Container, CommonComponent, Title, SubTitle, HeadTitle, CheckSubComponent } from "src/components/commons/Commons";
import Input from "src/components/create/atoms/Input";
import TextArea from "src/components/create/atoms/TextArea";
import QuestionNumber from "src/components/create/atoms/QuestionTitle";
import useLoadAllQuestion from "src/hooks/useLoadAllQuestion";
import useCreate from "src/hooks/useCreate";
import CreateButton from "src/components/create/atoms/CreateButton";
import MovePageButton from "src/components/create/atoms/MovePageButton";
import ResetButton from "src/components/create/atoms/ResetButton";
import useReset from "src/hooks/useReset";
import useQuestionSet from "src/hooks/useSetQuestion";

export default function CreateQuestionComponent() {

    const {questionNumber} = useLoadAllQuestion();

    const {handleCreateQuestion, question, answer} = useCreate();

    const {handleResetButton} = useReset();

    const {addQuestion, addAnswer} = useQuestionSet();

    return (
        <Container style={{height: '150vh'}}>
            <BackButton url={"/check"}/>
            <Title>CREATE QUESTION</Title>
            <SubTitle>체크하고 싶은 문제를 만들어 보세요 :) </SubTitle>
            <SubTitle>문제들을 다 풀었다면 문제 리셋을 한 후 "점검 하러 가기"로 이동해주세요 :) </SubTitle>
            <CommonComponent style={{padding:'0px' ,width:'75%',height: '100vh'}}>
                <HeadTitle>Create Question</HeadTitle>
                <CheckSubComponent>
                    <Input 
                        changeFn={addQuestion}
                    />
                    <TextArea 
                        changeFn={addAnswer}
                    />
                    <QuestionNumber questionNumber={questionNumber}/>
                    <CreateButton
                        createQuesitonFn = {handleCreateQuestion}
                        content = {"문제 생성"}
                        question = {question}
                        answer = {answer}
                    />
                    <MovePageButton
                        url={"/modify"}
                        content={"문제 수정"}
                    />
                    <ResetButton
                        resetFn={handleResetButton}
                        content={"문제 리셋"}
                    />
                    <MovePageButton
                        url={"/self-check"}
                        content={"점검하러 가기"}
                    />
                </CheckSubComponent>
            </CommonComponent>
        </Container>
    )
}