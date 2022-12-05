import { motion } from "framer-motion";
import styled from "styled-components";

export const NavContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0);
  width: 100%;
  height: 8rem;
  position: fixed;
  z-index: 99;
  top: 0;
  position: absolute;
`;

export const NavColWrapper = styled.div<{ isColorMode?: boolean }>`
  display: flex;
  align-items: center;
  width: 45%;
  height: 100%;
  padding: 0 10rem;
  color: ${(props) => (props.isColorMode ? "white" : "black")};
  :last-child {
    justify-content: flex-end;
  }
`;

export const LogoWrapper = styled.span<{ isColorMode: boolean }>`
  color: ${(props) => (props.isColorMode ? "white" : "black")};
  font-size: 3rem;
`;

export const ChangeModeWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
export const ModalContainer = styled(motion.div)`
  svg {
    margin-left: 0.5rem;
    margin-top: 0.4rem;
  }
`;
