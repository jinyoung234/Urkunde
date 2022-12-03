import { useRecoilState } from "recoil";
import { weeklyCheck } from "src/atoms";
import styled from "styled-components";

export const CircleComponent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75%;
  height: 75%;
  border-radius: 50%;
  background-color: white;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: rgba(0, 0, 0, 0.1);
`;

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
      // 기존 week의 id과 인자로 받은 요일의 id가 같으면 oldWeek 해당 요일의 인덱스를 반환
      const index = oldWeek.findIndex((day) => day.id === id);
      // 해당 요일에 대해 state가 변한 새로운 object 생성
      const newDay = { id, date: week[index].date, state: !week[index].state };
      // 새로운 Week를 리턴
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
          <CircleComponent
            style={{ color: "white", backgroundColor: "#3AA84C" }}
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
          </CircleComponent>
        ) : (
          <CircleComponent
            onClick={() => handleOnCircleClick(day.id)}
            key={day.id}
          >
            {day.date}
          </CircleComponent>
        )
      )}
    </>
  );
}
