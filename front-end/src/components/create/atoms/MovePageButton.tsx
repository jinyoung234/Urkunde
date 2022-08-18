import { useNavigate } from "react-router-dom";
import { LargeButton } from "./CreateButton";

interface MovePageButtonProps {
    content : string;
    url : string;
}

export default function MovePageButton({content, url} : MovePageButtonProps) {
    const navigate = useNavigate();
    const movePage = () => {
        navigate(url)
    } 
    return(
        <LargeButton
            onClick={movePage}
        >
            {content}
        </LargeButton>
    )
} 