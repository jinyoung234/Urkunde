import { Answer } from "src/components/commons/Commons"
import useQuestionSet from "src/hooks/useSetQuestion"

export default function AnswerForm() {
    const {addAnswer} = useQuestionSet()
    return(
        <Answer
            onChange={addAnswer} 
            style={{marginTop : '20px' ,width: '76%', borderRadius:'20px'}}
            placeholder="작성한 답과 동일하게 적어주세요 :) "
        />
    )
}