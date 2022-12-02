import useLoadAllQuestion from "src/hooks/useLoadAllQuestion"
import { ForSelfCheckComponent, ForSelfCheckSubComponent } from "src/components/commons/Commons";

export default function EmptySelfCheckForm() {
    const {questionNumber} = useLoadAllQuestion();
    return(
        <>
            {
                questionNumber === 0 ?
                <ForSelfCheckComponent>
                    <ForSelfCheckSubComponent style={{fontSize : '50px', display:'flex', justifyContent: 'center', marginTop : '200px', width: '60%', height: '60vh'}}>
                        <div>문제를 만들어주세요 :)</div>
                    </ForSelfCheckSubComponent>
                </ForSelfCheckComponent> : ''
            }
        </>
    )
}