import { Container } from "src/components/commons/style";
import { useEffect } from "react";
import useTimer from "src/hooks/useTimer";
import PageTitle from "src/components/commons/pageTitle";
import TodayResult from "src/components/check/todayResult";
import WeeklyCheck from "src/components/check/weeklyCheck";

export default function CheckTemplate() {
  const { seconds, dayOfWeek, setWeek, newWeek } = useTimer();

  useEffect(() => {
    seconds === "00:00:00" && dayOfWeek === 1 && setWeek([...newWeek]);
  }, [dayOfWeek, newWeek, setWeek, seconds]);

  return (
    <Container>
      <PageTitle
        url={"/"}
        title="CHECK PAGE"
        subtitle="체크한 결과를 확인 하며, 매주 체크했다면 기록해보세요 :)"
      />
      <TodayResult />
      <WeeklyCheck />
    </Container>
  );
}
