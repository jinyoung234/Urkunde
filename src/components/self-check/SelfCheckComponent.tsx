import { useRecoilValue } from "recoil";
import { questionNum, weeklyCheck, currentIndex, answerState } from "src/atoms";
import { Container } from "src/components/commons/Commons";
import { useEffect } from "react";
import BackButton from "src/components/commons/BackButton";
import SelfCheckTitle from "src/components/self-check/atoms/SelfCheckTitle";
import SelfCheckIndex from "src/components/self-check/atoms/SelfCheckIndex";
import EmptySelfCheckForm from "src/components/self-check/molecules/EmptySelfCheckForm";
import GoResultLink from "src/components/self-check/atoms/GoResultLink";
import useTimer from "src/hooks/useTimer";
import QuizForm from "src/components/self-check/molecules/QuizForm";

export default function SelfCheckComponent() {
  const week = useRecoilValue(weeklyCheck);

  let { dayOfWeek } = useTimer();

  const quesionNumber = useRecoilValue(questionNum);

  const answer = useRecoilValue(answerState);

  useEffect(() => {}, [answer]);

  const curr = useRecoilValue(currentIndex);
  return (
    <Container
      style={{ height: curr + 1 === quesionNumber ? "113vh" : "106vh" }}
    >
      <BackButton url={"/create"} isSelfCheck={true} />
      <SelfCheckTitle date={week[dayOfWeek].date} />
      <SelfCheckIndex />
      <GoResultLink />
      <EmptySelfCheckForm />
      <QuizForm />
    </Container>
  );
}
