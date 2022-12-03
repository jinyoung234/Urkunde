import React from "react";
import { WeatherStateWrapper } from "./style";

interface WeatherProps {
  weather: string;
}

export default function WeatherState({
  weather,
}: WeatherProps): React.ReactElement {
  return (
    <WeatherStateWrapper>
      {weather === "Clouds" && (
        <svg id="cloud" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
          <path d="M40.996 23.2a6.008 6.008 0 0 0-5.35-6.165A12.94 12.94 0 0 0 23 7c-7.168 0-13 5.832-13 13 0 .384.02.775.06 1.18C4.902 22.106 1 26.669 1 32c0 6.065 4.935 11 11 11h27c5.514 0 10-4.486 10-10a9.956 9.956 0 0 0-8.004-9.8zM39 41H12c-4.963 0-9-4.038-9-9 0-4.651 3.631-8.588 8.267-8.962l1.091-.088-.186-1.078A11.068 11.068 0 0 1 12 20c0-6.065 4.935-11 11-11 5.393 0 9.95 3.862 10.836 9.182l.145.871.882-.036A.503.503 0 0 0 35 19c2.206 0 4 1.794 4 4 0 .272-.03.553-.091.835l-.235 1.096 1.115.109A7.965 7.965 0 0 1 47 33c0 4.411-3.589 8-8 8z" />
        </svg>
      )}
      {weather === "Clear" && (
        <img
          src="https://www.svgrepo.com/show/67337/sunny-day.svg"
          id="clear"
          alt="Sunny Day SVG Vector"
          title="Sunny Day SVG Vector"
        />
      )}
      {weather === "Rain" && (
        <img
          src="https://www.svgrepo.com/show/140526/raining.svg"
          alt="Raining SVG Vector"
          title="Raining SVG Vector"
        />
      )}
    </WeatherStateWrapper>
  );
}
