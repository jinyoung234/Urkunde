import { AnimatePresence, motion, useScroll } from "framer-motion";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { modalState } from "../utils/storage";
import { HeadTitle, SubTitle } from "./Commons";

const Overlay = styled(motion.div)`
    height: 160vh;
    width: 100%;
    background-color: rgba(0,0,0,0.5);
    position: absolute;
    top:0px;
    left:0px;
`;
const Item = styled(motion.div)`
    width: 50%;
    height: 50%;
    background-color: white;
    position: absolute;
    top: 15%;
    left: 25%;
    border-radius: 30px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);
`;

function Modal() {
    const setModal = useSetRecoilState(modalState);
    const {scrollY} = useScroll();
    const handleOnClick = () => {
        setModal(prev => !prev);
    }
    return (
        <AnimatePresence>
            <Overlay onClick={handleOnClick}>
                <Item
                    style={{top : scrollY.get() + 150, padding: '30px 30px'}}
                    layoutId="modal"
                >
                    <HeadTitle style={{paddingLeft: '9%' , display:'flex', justifyContent: 'center', marginBottom : '20px'}}>도움말</HeadTitle>
                    <SubTitle style={{marginBottom : '20px', fontWeight: '500', color: 'black'}}>1. Check Page</SubTitle>
                    <SubTitle style={{color: 'black', fontSize: '18px'}}>
                        -  풀어본 문제들의 결과를 확인하며, 월~일까지 점검을 했다면 체크표시를 해주세요 :)
                    </SubTitle>
                    <SubTitle style={{marginBottom : '20px', fontWeight: '500', color: 'black'}}>2. Create Question Page</SubTitle>
                    <SubTitle style={{color: 'black', fontSize: '18px'}}>
                        -  직접 문제를 만들어보세요. 문제를 초기화하고 싶다면 문제 리셋 버튼을 눌러주세요 :)
                    </SubTitle>
                    <SubTitle style={{marginBottom : '20px', fontWeight: '500', color: 'black'}}>3. Modify Question Page</SubTitle>
                    <SubTitle style={{color: 'black', fontSize: '18px'}}>
                        -  잘못 만든 문제들은 삭제해보세요 :)
                    </SubTitle>
                    <SubTitle style={{marginBottom : '20px', fontWeight: '500', color: 'black'}}>4. Self Check Page</SubTitle>
                    <SubTitle style={{color: 'black', fontSize: '18px'}}>
                        -  만든 문제들을 직접 풀어보며 점검하고, 결과 화면에서 맞는 문제의 갯수를 확인해보세요 :)
                    </SubTitle>
                </Item>
            </Overlay>
        </AnimatePresence>
    )
}

export default Modal;