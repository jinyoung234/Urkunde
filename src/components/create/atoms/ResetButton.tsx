import { LargeButton } from "./CreateButton";

interface ResetButtonProps {
    resetFn : () => void;
    content : string
}

export default function ResetButton({ resetFn, content } : ResetButtonProps ) {
    return (
        <LargeButton
            onClick={resetFn}
        >
            {content}  
        </LargeButton>
    )
}