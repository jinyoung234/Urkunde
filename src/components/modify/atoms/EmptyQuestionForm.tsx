import { useRecoilValue } from "recoil";
import { CommonSubComponent, Title } from "src/components/commons/Commons"
import { questionNum } from "src/utils/storage";

export default function EmptyQuestionForm() {
    const allQuestion = useRecoilValue<number>(questionNum);
    return (
        <>
        {   
            allQuestion === 0 ? 
            <CommonSubComponent style={{height:'60vh'}}>
                <Title style={{fontSize: '30px', fontWeight:'300', color:'black'}}>문제가 비어있습니다.</Title>
                <Title style={{fontSize: '30px', fontWeight:'300', color:'black'}}>문제들을 채워주세요 :) </Title>
            </CommonSubComponent> : '' 
        }
        </> 
    )
}