import { useRecoilState } from "recoil";
import { weeklyCheck } from "src/atoms";
import { CircleWrapper } from "./style";

export interface IWeekInfo {
  id: number;
  date: string;
  state: boolean;
}

export default function Circle() {
  // week state(월~일)
  const [week, setWeek] = useRecoilState<IWeekInfo[]>(weeklyCheck);

  // Weekly Check에서 원을 클릭 시 체크 된 원으로 변경
  const handleOnCircleClick = (id: number) => {
    setWeek((oldWeek) => {
      const index = oldWeek.findIndex((day) => day.id === id);
      const newDay = { id, date: week[index].date, state: !week[index].state };
      const newWeek = [
        ...oldWeek.slice(0, index),
        newDay,
        ...oldWeek.slice(index + 1),
      ];
      return newWeek;
    });
  };
  return (
    <>
      {week.map((day) =>
        day.state === true ? (
          <CircleWrapper
            isChecked
            onClick={() => handleOnCircleClick(day.id)}
            key={day.id}
          >
            <svg
              id="SvgjsSvg1012"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <defs id="SvgjsDefs1013"></defs>
              <g id="SvgjsG1014">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 256 256"
                  width="30"
                  height="30"
                >
                  <rect width="256" height="256" fill="none"></rect>
                  <polyline
                    fill="none"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="24"
                    points="216 72.005 104 184 48 128.005"
                  ></polyline>
                </svg>
              </g>
            </svg>
          </CircleWrapper>
        ) : (
          <CircleWrapper
            onClick={() => handleOnCircleClick(day.id)}
            key={day.id}
          >
            {day.date}
          </CircleWrapper>
        )
      )}
    </>
  );
}
