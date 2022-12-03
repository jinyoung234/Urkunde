import { TemperatureWrapper } from "./style";

interface TemperatureProps {
  temp: number;
}

export default function Temperature({
  temp,
}: TemperatureProps): React.ReactElement {
  return <TemperatureWrapper>{temp + "℃"}</TemperatureWrapper>;
}
