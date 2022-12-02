import { ModifyPageTitle } from "src/components/commons/Commons";

interface QuizQuestionProps {
    question : string
}

export default function QuizQuestion({question} : QuizQuestionProps) {
    return(
        <ModifyPageTitle style={{marginBottom:'30px'}}>
            {question}
        </ModifyPageTitle>
    )
}