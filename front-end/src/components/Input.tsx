import { useState } from "react";
import styled from "styled-components";

export const CommonInput = styled.input`
    margin : 10px 0px;
    width: 70%;
    height: 10%;
    border-radius: 20px;
    text-align: center;
    border: 0px;
    background-color: #E0E3E8;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.1), 0 1px 3px rgba(0, 0, 0, 0.05);
`

function Input () {
    const [inputState, setInputState] = useState(false);

    // 사용자의 도시를 확인하는 state
    const [city, setCityState] = useState('');

    // inputState and cityState 변경 함수
    const handleOnKeyDown = (e:React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === 'Enter') {
            setCityState(e.currentTarget.value);
            setInputState(false);
        }
    }
    return (
        <div>
            {inputState &&
            <CommonInput 
                placeholder="도시명을 입력해주세요 :) (ex) Busan, Seoul)"
                onKeyDown={handleOnKeyDown}
            />
        }
        </div>
    )
}

export default Input;