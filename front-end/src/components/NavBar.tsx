import { AnimatePresence, motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { modalState, colorMode } from "../utils/storage";
import Modal from "./Modal";

const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgba(0,0,0,0);
    width: 100%;
    height: 80px;
    position: fixed;
    z-index: 99;
    top:0;
    position: absolute;
`;

const Col = styled.div`
    display: flex;
    align-items: center;
    width: 45%;
    height: 100%;
    padding : 0px 100px;
    :last-child {
        justify-content: flex-end;
    }
`;

const Logo = styled.span`
    font-size: 30px;
`;

const ChangeMode = styled.div`
    display: flex;
    justify-content: flex-end;
`
const Info = styled(motion.div)`
`;

function NavBar() {

    const [modal, setModal] = useRecoilState(modalState);

    const [onColorMode, setLightMode] = useRecoilState(colorMode);

    const handleChangeMode = () => {
        setLightMode((prev) => !prev)
    }

    const handleModal = () => {
        setModal(prev => !prev);
    }
    return (
        <Nav>
            <Col>
                <Logo style={{color: onColorMode ? "white" : "black"}}>
                    <Link to="/">Urkunde</Link>
                </Logo>
            </Col>
            <Col>
                <ChangeMode>
                    {onColorMode &&
                        <svg
                            onClick={handleChangeMode}
                            fill="white"
                            stroke='white'
                            width="30"
                            height="30" 
                            xmlns="http://www.w3.org/2000/svg" id="Layer_1" x="0" y="0" version="1.1" viewBox="0 0 29 29" xmlSpace="preserve"><path d="M19.282 17.038c-4.15-.513-7.691-3.379-9.245-7.261a11.042 11.042 0 0 1-.748-5.355.5.5 0 0 0-.772-.468C5.09 6.156 2.905 10.121 3.261 14.573c.442 5.524 4.959 10.056 10.482 10.513 5.646.468 10.522-3.148 12.01-8.213.118-.402-.274-.774-.661-.614a11.43 11.43 0 0 1-5.81.779z"/></svg>
                    }
                    {!onColorMode &&
                            <img
                            onClick={handleChangeMode}  
                            src="https://www.svgrepo.com/show/341098/sunny.svg" width="30" height="30" alt="Sunny SVG Vector" title="Sunny SVG Vector"/>
                    }
                </ChangeMode>
                <AnimatePresence>
                    <Info
                        layoutId="modal"
                    >
                        <svg
                            onClick={handleModal}
                            style={{marginLeft:'5px',marginTop:'4'}} 
                            width="35"
                            height="35"
                            xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g fill={onColorMode ? 'white' : 'black'} data-name="Layer 2"><path d="M8 2a6 6 0 1 0 6 6 6 6 0 0 0-6-6Zm0 11a5 5 0 1 1 5-5 5 5 0 0 1-5 5Z"/><path d="M8 6.85a.5.5 0 0 0-.5.5v3.4a.5.5 0 0 0 1 0v-3.4a.5.5 0 0 0-.5-.5zM8 4.8a.53.53 0 0 0-.51.52v.08a.47.47 0 0 0 .51.47.52.52 0 0 0 .5-.5v-.12A.45.45 0 0 0 8 4.8z"/></g> 
                        </svg>
                    </Info>
                </AnimatePresence>
                <AnimatePresence>
                    { modal && <Modal/>}
                </AnimatePresence>
            </Col>
        </Nav>
    )
}

export default NavBar;