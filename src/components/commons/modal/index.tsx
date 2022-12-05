import { AnimatePresence, useScroll } from "framer-motion";
import { useSetRecoilState } from "recoil";
import { modalState } from "src/atoms";
import {
  ModalIndexWrapper,
  ModalTextWrapper,
  ModalTitleWrapper,
  ModalWrapper,
  Overlay,
} from "./style";

function Modal() {
  const setModal = useSetRecoilState(modalState);
  const { scrollY } = useScroll();
  const handleOnClick = () => {
    setModal((prev) => !prev);
  };
  return (
    <AnimatePresence>
      <Overlay onClick={handleOnClick}>
        <ModalWrapper style={{ top: scrollY.get() + 150 }} layoutId="modal">
          <ModalTitleWrapper>도움말</ModalTitleWrapper>
          <ModalIndexWrapper>1. Check Page</ModalIndexWrapper>
          <ModalTextWrapper>
            - 풀어본 문제들의 결과를 확인하며, 월~일까지 점검을 했다면
            체크표시를 해주세요 :)
          </ModalTextWrapper>
          <ModalIndexWrapper>2. Create Question Page</ModalIndexWrapper>
          <ModalTextWrapper>
            - 직접 문제를 만들어보세요. 문제를 초기화하고 싶다면 문제 리셋
            버튼을 눌러주세요 :)
          </ModalTextWrapper>
          <ModalIndexWrapper>3. Modify Question Page</ModalIndexWrapper>
          <ModalTextWrapper>
            - 잘못 만든 문제들은 삭제해보세요 :)
          </ModalTextWrapper>
          <ModalIndexWrapper>4. Self Check Page</ModalIndexWrapper>
          <ModalTextWrapper>
            - 만든 문제들을 직접 풀어보며 점검하고, 결과 화면에서 맞는 문제의
            갯수를 확인해보세요 :)
          </ModalTextWrapper>
        </ModalWrapper>
      </Overlay>
    </AnimatePresence>
  );
}

export default Modal;
