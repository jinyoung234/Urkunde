import { useRecoilValue } from "recoil";
import { questionNum, weeklyCheck, currentIndex, answerState } from "src/atoms";
import { Container } from "src/components/commons/style";
import { useEffect } from "react";
import EmptySelfCheckForm from "src/components/self-check/emptyQuizForm";
import useTimer from "src/hooks/useTimer";
import PageTitle from "src/components/commons/pageTitle";
import GoResultLink from "src/components/self-check/goResultLink";
import QuizForm from "src/components/self-check/quizForm";

export default function SelfCheckTemplate() {
  const week = useRecoilValue(weeklyCheck);
  const quesionNumber = useRecoilValue(questionNum);
  const answer = useRecoilValue(answerState);
  const curr = useRecoilValue(currentIndex);

  let { dayOfWeek } = useTimer();

  useEffect(() => {}, [answer]);
  return (
    <Container isLastCheck={curr + 1 === quesionNumber}>
      <PageTitle
        title={`${week[dayOfWeek].date}요일 SELF-CHECK`}
        url="/create"
        isSelfCheck
      />
      <GoResultLink />
      <EmptySelfCheckForm />
      <QuizForm />
    </Container>
  );
}
