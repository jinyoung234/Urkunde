import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { CommonSubComponent, Container, Title, SubTitle, HeadTitle, DangerButton, ModifyPageTitle, BackCircle } from "../components/Commons";
import { questionNum, questionSet } from "../utils/storage";

function ModifyQuestion() {
    // 생성한 문제들을 RecoilState로 관리
    const [getQuestions, setQuestions] = useRecoilState(questionSet);

    // 문제 삭제 시 삭제한 문제 수를 업데이트 하기 위한 변수
    const [allQuestion, setAllQuestion] = useRecoilState(questionNum);

    // 삭제하기 버튼을 누르면 해당 문제를 삭제 -> 문제 수 1 감소
    const handleDeleteQuestion = (id:number) => {
        setQuestions((oldQuestion) => {
            const index = oldQuestion.findIndex(question => question.id === id);
            return [...oldQuestion.slice(0, index), ...oldQuestion.slice(index+1)];
        })
        setAllQuestion((prev:number) => prev-1);
    }

    // 뒤로가기 버튼
    const moveBack = useNavigate();
    const handleBackCircleClick = () => {
        moveBack('/create');
    }

    return (
        <Container style={{height : 'auto'}}>
            <BackCircle
                onClick = {handleBackCircleClick}
            >
                <img style={{marginRight:'2px', width: '50%'}} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iNzUycHQiIGhlaWdodD0iNzUycHQiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDc1MiA3NTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiA8ZGVmcz4KICA8Y2xpcFBhdGggaWQ9ImEiPgogICA8cGF0aCBkPSJtMjQzIDEzOS4yMWgyNjZ2NDczLjU4aC0yNjZ6Ii8+CiAgPC9jbGlwUGF0aD4KIDwvZGVmcz4KIDxnIGNsaXAtcGF0aD0idXJsKCNhKSI+CiAgPHBhdGggZD0ibTI1MS41OCAzNTQuNzMgMjA3LjAyLTIwNy4wMmMxMi4wNTEtMTEuMzQ0IDMwLjQ4NC0xMS4zNDQgNDEuODI4IDBzMTEuMzQ0IDI5Ljc3NyAwIDQxLjgyOGwtMTg2LjQ1IDE4Ni40NSAxODYuNDUgMTg2LjQ1YzExLjM0NCAxMS4zNDQgMTEuMzQ0IDMwLjQ4NCAwIDQxLjgyOHMtMjkuNzc3IDExLjM0NC00MS44MjggMGwtMjA3LjAyLTIwNy43MmMtMTEuMzQ0LTExLjM0NC0xMS4zNDQtMjkuNzc3IDAtNDEuODI4eiIgZmlsbC1ydWxlPSJldmVub2RkIi8+CiA8L2c+Cjwvc3ZnPgo=" />
            </BackCircle>
            <Title>
                MODIFY QUESTION
            </Title>
            <SubTitle>잘못 만든 문제들을 삭제 해보세요 :) </SubTitle>
            {getQuestions.map(question =>
            <CommonSubComponent 
                key={question.id}
                style={{padding:'60px 0px', height: '50%', marginBottom:'20px'}}
            >
                <HeadTitle>문제</HeadTitle>
                <ModifyPageTitle>{question.question}</ModifyPageTitle>
                <HeadTitle>답</HeadTitle>
                <ModifyPageTitle>{question.answer}</ModifyPageTitle>
                <DangerButton
                    onClick={() => handleDeleteQuestion(question.id)}
                >
                    삭제하기
                </DangerButton>
            </CommonSubComponent>)}
            { allQuestion === 0 ? 
                <CommonSubComponent style={{height:'60vh'}}>
                    <Title style={{fontSize: '30px', fontWeight:'300', color:'black'}}>문제가 비어있습니다.</Title>
                    <Title style={{fontSize: '30px', fontWeight:'300', color:'black'}}>문제들을 채워주세요 :) </Title>
                </CommonSubComponent> : '' }
        </Container>
    )   
}

export default ModifyQuestion;