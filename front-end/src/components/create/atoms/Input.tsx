import { useSetRecoilState } from "recoil";
import { questionState } from "src/utils/storage";
import styled from "styled-components";

export const CommonInput = styled.input`
    width: 70%;
    height: 10%;
    border-radius: 10px;
    text-align: center;
    border: 0px;
    background-color: #E0E3E8;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
    margin-top : 10px;
`

interface InputProps {
    changeFn : (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input ({changeFn} : InputProps) {
    return (
            <CommonInput
                onChange={changeFn}
                placeholder="문제를 생성해 보세요 :)"
            />
    )
}
