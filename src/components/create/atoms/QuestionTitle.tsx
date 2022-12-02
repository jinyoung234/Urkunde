import { SubTitle } from "src/components/commons/Commons"

interface QuestionNumberProps {
    questionNumber : number
}

export default function QuestionNumber({questionNumber} : QuestionNumberProps) : React.ReactElement {
    return (
        <SubTitle style={{color:'black', margin:'10px'}}>
            Question : {questionNumber} 
        </SubTitle>
    )
}