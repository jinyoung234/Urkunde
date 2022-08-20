import { CommonSubComponent, HeadTitle, ModifyPageTitle } from "src/components/commons/Commons"
import { questionSet } from "src/utils/storage"
import DangerButton from "src/components/modify/atoms/DangerButton"
import { useRecoilValue } from "recoil";

export default function ModfiyQuestionForm() {
    // 생성한 문제들을 RecoilState로 관리
    const quiz = useRecoilValue(questionSet);
    return (
        <>
        {
            quiz.map(question =>
            <CommonSubComponent 
                key={question.id}
                style={{padding:'60px 0px', height: '50%', marginBottom:'20px'}}
            >
                <HeadTitle>문제</HeadTitle>
                <ModifyPageTitle>{question.question}</ModifyPageTitle>
                <HeadTitle>답</HeadTitle>
                <ModifyPageTitle>{question.answer}</ModifyPageTitle>
                <DangerButton id={question.id}/>
            </CommonSubComponent>)
        }
        </> 
    )
}