import styled from "styled-components"

export const LargeButton = styled.button`
    font-size: 20px;
    margin-top: 18px;
    width: 30%;
    border: 0px;
    height: 60px;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(50, 50, 93, 0.15), 0 1px 3px rgba(0, 0, 0, 0.08);
    background-color: #3C73CF;
    color: white;
`

interface PrimaryLargeButtonProps {
    createQuesitonFn : (question : string, answer : string) => void;
    content : string
    question : string,
    answer : string 
}

export default function CreateButton({ createQuesitonFn, content, question, answer } : PrimaryLargeButtonProps ) {
    return (
        <LargeButton
            onClick={() => createQuesitonFn(question, answer)}
        >
            {content}  
        </LargeButton>
    )
}