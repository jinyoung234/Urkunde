import Spinner from "src/components/commons/spinner";
import useWeatherData from "src/hooks/useWeatherData";
import Location from "./location";
import { WeatherWrapper } from "./style";
import Temperature from "./temperature";
import WeatherState from "./weatherState";

export default function Weather() {
  const { name, temp, weather, isLoading, isError } = useWeatherData();
  return (
    <WeatherWrapper>
      {isLoading || isError ? (
        <Spinner />
      ) : (
        <>
          <Location location={name} />
          <Temperature temp={temp} />
          <WeatherState weather={weather as string} />
        </>
      )}
    </WeatherWrapper>
  );
}
