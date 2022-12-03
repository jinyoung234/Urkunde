import { useQuery } from "@tanstack/react-query";

import { weatherAPIDefault, IWeatherInfo } from "src/api";

export default function useWeatherData() {
  // api로 받은 데이터
  const { data } = useQuery<IWeatherInfo>(
    ["api", "weather"],
    weatherAPIDefault
  );
  // 데이터로 받은 지역의 온도
  const temp = Math.round((data?.main.temp as number) - 273.15);
  // 도시의 현재 날씨
  const weather = data?.weather[0].main as string;
  const name = data?.name as string;
  return {
    name,
    temp,
    weather,
  };
}
