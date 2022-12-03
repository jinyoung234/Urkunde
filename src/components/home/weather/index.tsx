import useWeatherData from "src/hooks/useWeatherData";
import Location from "./location";
import { WeatherWrapper } from "./style";
import Temperature from "./temperature";
import WeatherState from "./weatherState";

export default function Weather() {
  const { name, temp, weather } = useWeatherData();
  return (
    <WeatherWrapper>
      <Location location={name} />
      <Temperature temp={temp} />
      <WeatherState weather={weather as string} />
    </WeatherWrapper>
  );
}
