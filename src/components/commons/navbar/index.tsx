import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import { colorMode, modalState } from "src/atoms";
import Modal from "src/components/commons/modal";
import {
  ChangeModeWrapper,
  LogoWrapper,
  ModalContainer,
  NavColWrapper,
  NavContainer,
} from "./style";

function NavBar() {
  const [modal, setModal] = useRecoilState(modalState);

  const [isColorMode, setIsColorMode] = useRecoilState(colorMode);

  const handleChangeMode = () => {
    setIsColorMode(!isColorMode);
  };

  const handleModal = () => {
    setModal((prev) => !prev);
  };
  return (
    <NavContainer>
      <NavColWrapper isColorMode>
        <LogoWrapper isColorMode>
          <Link to="/">Urkunde</Link>
        </LogoWrapper>
      </NavColWrapper>
      <NavColWrapper>
        <ChangeModeWrapper>
          {isColorMode && (
            <svg
              onClick={handleChangeMode}
              fill="white"
              stroke="white"
              width="30"
              height="30"
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              x="0"
              y="0"
              version="1.1"
              viewBox="0 0 29 29"
              xmlSpace="preserve"
            >
              <path d="M19.282 17.038c-4.15-.513-7.691-3.379-9.245-7.261a11.042 11.042 0 0 1-.748-5.355.5.5 0 0 0-.772-.468C5.09 6.156 2.905 10.121 3.261 14.573c.442 5.524 4.959 10.056 10.482 10.513 5.646.468 10.522-3.148 12.01-8.213.118-.402-.274-.774-.661-.614a11.43 11.43 0 0 1-5.81.779z" />
            </svg>
          )}
          {!isColorMode && (
            <img
              onClick={handleChangeMode}
              src="https://www.svgrepo.com/show/341098/sunny.svg"
              width="30"
              height="30"
              alt="Sunny SVG Vector"
              title="Sunny SVG Vector"
            />
          )}
        </ChangeModeWrapper>
        <AnimatePresence>
          <ModalContainer layoutId="modal">
            <svg
              onClick={handleModal}
              width="35"
              height="35"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
            >
              <g fill={isColorMode ? "white" : "black"} data-name="Layer 2">
                <path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z" />
                <path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z" />
              </g>
            </svg>
          </ModalContainer>
        </AnimatePresence>
        <AnimatePresence>{modal && <Modal />}</AnimatePresence>
      </NavColWrapper>
    </NavContainer>
  );
}

export default NavBar;
