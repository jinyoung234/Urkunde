import { Title } from "src/components/commons/Commons"

interface SelfCheckTitleProps {
    date: string
}

export default function SelfCheckTitle ({date} : SelfCheckTitleProps) {
    return(
        <Title>
                {date}요일 SELF-CHECK
        </Title>
    )
}