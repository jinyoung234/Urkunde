import { useSetRecoilState } from "recoil";
import moment from "moment";
import { useInterval } from "react-use";
import { useState } from "react";
import { IWeekInfo } from "src/components/check/atoms/Circle";
import { weeklyCheck } from "src/atoms";

// Weekly check Circle 들을 초기화 하기 위한 custom hook
export default function useTimer() {
  // 현재 시간을 위한 seconds, 1초마다 바뀌는 시간을 저장하기 위한 setSeconds
  const [seconds, setSeconds] = useState(moment().format("HH:mm:ss"));

  // 현재 날짜의 요일을 반환하기 위한 변수
  const dayOfWeek = new Date(moment().format("YYYY-MM-DD")).getDay();

  // 초기화 되기 전 weekState
  const setWeek = useSetRecoilState<IWeekInfo[]>(weeklyCheck);

  // 실시간으로 seconds를 업데이트 하기위한 useInterval 함수
  useInterval(() => {
    setSeconds(moment().format("HH:mm:ss"));
  }, 1000);

  // 일 -> 월로 바뀌면 새로운 weekState를 저장하기 위한 배열
  let newWeek = [
    { id: 0, date: "일", state: false },
    { id: 1, date: "월", state: false },
    { id: 2, date: "화", state: false },
    { id: 3, date: "수", state: false },
    { id: 4, date: "목", state: false },
    { id: 5, date: "금", state: false },
    { id: 6, date: "토", state: false },
  ];

  return {
    seconds,
    dayOfWeek,
    setWeek,
    newWeek,
  };
}
