import ContainerTitle from "src/components/commons/containerTitle";
import Circle from "../dayCircle";
import { CircleContainer, WeeklyCheckWrapper } from "./style";

export default function WeeklyCheck() {
  return (
    <WeeklyCheckWrapper>
      <ContainerTitle title="Weekly Check" />
      <CircleContainer>
        <Circle />
      </CircleContainer>
    </WeeklyCheckWrapper>
  );
}
