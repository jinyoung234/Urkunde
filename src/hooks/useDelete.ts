import { useSetRecoilState } from "recoil";
import { questionNum, questionSet } from "src/utils/storage";

export default function useDelete() {
  // 생성한 문제들을 RecoilState로 관리
  const setQuiz = useSetRecoilState(questionSet);

  // 문제 삭제 시 삭제한 문제 수를 업데이트 하기 위한 변수
  const setAllQuestion = useSetRecoilState<number>(questionNum);

  const handleDeleteQuestion = (id: number) => {
    setQuiz((oldQuiz) => {
      const index = oldQuiz.findIndex((question) => question.id === id);
      return [...oldQuiz.slice(0, index), ...oldQuiz.slice(index + 1)];
    });
    setAllQuestion((prev: number) => prev - 1);
  };

  return {
    handleDeleteQuestion,
  };
}
