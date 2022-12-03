import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import {
  answerButtonState,
  correctNum,
  currentIndex,
  incorrectNum,
  isAnswer,
  sliderMotionChange,
} from "src/atoms";
import { BackButtonWrapper } from "./style";

interface BackButtonProps {
  url: string;
  isSelfCheck?: boolean;
}

export default function BackButton({
  url,
  isSelfCheck,
}: BackButtonProps): React.ReactElement {
  const setChangeMotion = useSetRecoilState(sliderMotionChange);
  const setCurrentIndex = useSetRecoilState(currentIndex);
  const setAnswerState = useSetRecoilState(isAnswer);
  const setIncorrectNum = useSetRecoilState(incorrectNum);
  const setCorrectNum = useSetRecoilState(correctNum);
  const setButtonState = useSetRecoilState(answerButtonState);

  const moveBack = useNavigate();
  const handleBackCircleClick = () => {
    moveBack(url);
  };

  const handleSelfCheckBackCircleClick = () => {
    setChangeMotion(false);
    setCurrentIndex(0);
    setAnswerState(true);
    moveBack(url);
    setIncorrectNum(0);
    setCorrectNum(0);
    setButtonState(false);
  };

  return (
    <>
      {isSelfCheck ? (
        <BackButtonWrapper
          isSelfCheck={true}
          onClick={handleSelfCheckBackCircleClick}
        >
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo="
            alt="back"
          />
        </BackButtonWrapper>
      ) : (
        <BackButtonWrapper onClick={handleBackCircleClick}>
          <img
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo="
            alt="back"
          />
        </BackButtonWrapper>
      )}
    </>
  );
}
