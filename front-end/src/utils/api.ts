import axios from "axios";
import { useEffect } from "react";

const appId = "33ecce6d5932603d3d9fd8b1e51d2f1d";



type Weather = {
    id : number,
    main : string,
    description : string
}

export interface IWeatherInfo {
    weather: Weather[];
    main : { temp : number }
    name : string
}

export const weatherAPI = async (city:string) => {
    try {
        const res = await axios.get(city === '' ?  `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${appId}` :  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appId}`);
        return res.data;
    } catch(error) {
        console.log(error);
    }
}

export const weatherAPIDefault = async () => {
    try {
        const res = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${appId}`);
        return res.data;
    } catch(error) {
        console.log(error);
    }
}

export default weatherAPI