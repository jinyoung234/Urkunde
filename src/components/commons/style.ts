import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled.div<{
  isDelete?: boolean;
  isLastCheck?: boolean;
}>`
  width: 100%;
  min-height: ${(props) => (props.isDelete ? "100vh" : "calc(100vh - 8rem)")};
  padding: 8rem 0 4rem 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: ${(props) => props.isLastCheck && "113vh"};
`;

/* Component */
export const CommonComponent = styled.div`
  background-color: white;
  border: 0px;
  border-radius: 40px;
  width: 70%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 40px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12);
`;

export const CommonSubComponent = styled(motion.div)`
  background-color: white;
  padding: 80px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70%;
  height: 60%;
  border: 0px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

export const CheckSubComponent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 75vh;
  border: 0;
  background-color: black;
`;

/* Title */
export const Title = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 45px;
  font-weight: 500;
  margin: 30px 0px;
  color: ${(props) => props.theme.textColor};
`;

export const ModifyPageTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  font-weight: 300;
`;

export const HeadTitle = styled.div`
  background-color: rgba(0, 0, 0, 0);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 30px;
  width: 90%;
  font-weight: 500;
  margin: 0px;
  padding: 10px 0px;
  color: black;
`;

/* Button */
export const PrimaryButton = styled.button`
  margin: 50px 0px;
  width: 18%;
  border: 0px;
  height: 35px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #3c73cf;
  color: white;
`;

export const PrimaryLargeButton = styled.button`
  font-size: 20px;
  margin-top: 18px;
  width: 30%;
  border: 0px;
  height: 60px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
  background-color: #3c73cf;
  color: white;
`;

// Circle

export const Circle = styled.div`
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

export const BackCircle = styled(Circle)`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  position: absolute;
  background-color: white;
  top: 110px;
  left: 20%;
  width: 4%;
  height: 8vh;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

// Home Component
export const WeatherContent = styled.div`
  display: flex;
  justify-content: center;
  font-size: 45px;
`;

// Check Component
export const CircleComponent = styled.div`
  background-color: white;
  width: 86%;
  height: 55%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  justify-items: center;
  align-items: center;
`;

// CreateQuestion Component
export const Answer = styled.textarea`
  width: 70%;
  height: 70px;
  border: 0px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  text-align: center;
  padding: 25px 0px;
  margin-bottom: 20px;
  resize: none;
`;

// self-Check Component
export const ForSelfCheckComponent = styled(CommonComponent)`
  background-color: rgba(255, 255, 255, 0);
  width: 70%;
  display: flex;
  flex-direction: row;
  padding: 0px;
  box-shadow: 0 0px 0px;
`;

export const ForSelfCheckSubComponent = styled(CommonSubComponent)`
  width: 90%;
  height: 100%;
  border-radius: 50px;
  justify-content: flex-start;
  position: absolute;
  padding: 37px 0px;
`;

export const SliderLeftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0);
  width: 8%;
  height: 16%;
  position: absolute;
  top: 44%;
  left: 2.2%;
  border: 0px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.2), 0 1px 3px rgba(0, 0, 0, 0.12);
  img {
    width: 100%;
    margin-right: 5px;
  }
`;

export const SliderRightButton = styled(SliderLeftButton)`
  left: 90%;
  img {
    margin-left: 8px;
  }
`;
