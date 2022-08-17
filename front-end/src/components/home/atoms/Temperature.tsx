import styled from "styled-components"

export const WeatherContent = styled.div`
    display: flex;
    justify-content: center;
    font-size: 45px;
`

interface TemperatureProps {
    temp : number;
}

export default function Temperature ({ temp } : TemperatureProps) : React.ReactElement {
    return(
        <WeatherContent>{temp + "℃"}</WeatherContent>
    )
}