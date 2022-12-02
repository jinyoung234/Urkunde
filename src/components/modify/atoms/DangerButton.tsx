import { Button } from "src/components/commons/PrimaryButton";
import useDelete from "src/hooks/useDelete";
import styled from "styled-components";

export const RedButton = styled(Button)`
    margin-top: 40px;
    margin-bottom: 0px;
    width: 12%;
    background-color: #C82333;
`;

interface DangerButtonProps {
    id : number
}

export default function DangerButton ({id} : DangerButtonProps) {
    const {handleDeleteQuestion} = useDelete()
    return (
        <RedButton
            onClick={() => handleDeleteQuestion(id)}
        >
            삭제하기
        </RedButton>
    )
}