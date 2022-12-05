import { motion } from "framer-motion";
import styled from "styled-components";

export const Overlay = styled(motion.div)`
  height: 160vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0px;
  left: 0px;
`;
export const ModalWrapper = styled(motion.div)`
  width: 50%;
  height: 50%;
  background-color: white;
  position: absolute;
  top: 15%;
  left: 25%;
  border-radius: 30px;
  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
  padding: 3rem;
`;

export const ModalTitleWrapper = styled.span`
  font-size: 3rem;
  font-weight: 500;
  color: black;
  margin-bottom: 2rem;
`;

export const ModalIndexWrapper = styled.span`
  font-size: 2rem;
  margin-bottom: 2rem;
  font-weight: 500;
  color: black;
`;

export const ModalTextWrapper = styled.span`
  font-size: 1.8rem;
  margin-bottom: 3rem;
  color: black;
`;
