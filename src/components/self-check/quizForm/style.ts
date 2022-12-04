import { motion } from "framer-motion";
import styled from "styled-components";

export const QuizFormContainer = styled.div`
  background-color: rgba(255, 255, 255, 0);
  border: 0;
  border-radius: 2rem;
  width: 70%;
  height: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const QuizFormSubContainer = styled(motion.div)`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  height: 100%;
  border: 0;
  border-radius: 5rem;
  box-shadow: 0 0.4rem 0.6rem rgba(50, 50, 93, 0.15),
    0 0.1rem 0.3rem rgba(0, 0, 0, 0.08);
  position: absolute;
  padding: 3.6rem 0px;
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  width: 90%;
`;

export const questionVariants = {
  start: (isSliderMotionChange: boolean) => {
    return {
      opacity: 0,
      scale: 0,
      x: isSliderMotionChange ? -window.innerWidth : window.innerWidth,
      y: -100,
    };
  },
  end: {
    opacity: 1,
    scale: 1,
    x: 0,
    y: -0,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
  exit: (isSliderMotionChange: boolean) => {
    return {
      opacity: 0,
      scale: 0,
      x: isSliderMotionChange ? window.innerWidth : -window.innerWidth,
      y: -100,
      transition: {
        type: "tween",
        duration: 0.8,
      },
    };
  },
};
