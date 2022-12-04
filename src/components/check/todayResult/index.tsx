import PrimaryButton from "src/components/commons/button/PrimaryButton";
import ContainerTitle from "src/components/commons/containerTitle";
import Chart from "./chart";
import { TodayResultWrapper } from "./style";

export default function TodayResult() {
  return (
    <TodayResultWrapper>
      <ContainerTitle title="Today Result" />
      <Chart />
      <PrimaryButton size="sm" goPage="/create" content="문제 만들기" />
    </TodayResultWrapper>
  );
}
