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
import styled from "styled-components";

export const BackCircle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  top: 110px;
  left: 20%;
  width: 4%;
  height: 8vh;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

interface UrlProps {
  url: string;
  isSelfCheck?: boolean;
}

export default function BackButton({
  url,
  isSelfCheck,
}: UrlProps): React.ReactElement {
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
        <BackCircle
          style={{ left: "25%" }}
          onClick={handleSelfCheckBackCircleClick}
        >
          <img
            style={{ marginRight: "2px", width: "50%" }}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo="
          />
        </BackCircle>
      ) : (
        <BackCircle onClick={handleBackCircleClick}>
          <img
            style={{ marginRight: "2px", width: "50%" }}
            src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo="
          />
        </BackCircle>
      )}
    </>
  );
}
