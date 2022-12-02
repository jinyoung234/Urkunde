import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { answerButtonState, answerState, correctNum, currentIndex, incorrectNum } from "src/utils/storage";
import { LargeButton } from "./CreateButton";

interface MovePageButtonProps {
    content : string;
    url : string;
    isCheck ?: boolean 
}

export default function MovePageButton({content, url, isCheck} : MovePageButtonProps) {
    const navigate = useNavigate();
    const movePage = () => {
        navigate(url)
    }

    const setButtonState = useSetRecoilState(answerButtonState);
    const setCorrectNum = useSetRecoilState(correctNum);
    const setIncorrectNum = useSetRecoilState(incorrectNum);
    const setCurrentIndex = useSetRecoilState(currentIndex);
    const setAnswer = useSetRecoilState(answerState);

    const moveCheckPage = () => {
        setButtonState(false);
        setCorrectNum(0);
        setIncorrectNum(0);
        setCurrentIndex(0);
        setAnswer('');
        navigate(url)
    }  
    return(
        <>
        {(isCheck && (isCheck !== undefined)) &&
            <LargeButton
                onClick={moveCheckPage}
        >
            {content}
            </LargeButton>
        }
        { isCheck === undefined &&
            <LargeButton
                onClick={movePage}
            >
                {content}
            </LargeButton>
        }
        </>
    )
} 