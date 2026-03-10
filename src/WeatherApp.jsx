import SearchBox from './SearchBox'
import InfoBox from './InfoBox'
import { useState } from 'react';

export default function WeatherApp(){
    const [weatherInfo,setWeatherInfo] = useState({
        city:"Wanderland",
        temp:33,
        tempMin:32,
        tempMax:33,
        humidity:33,
        feels_like:32,
        weather:"clear",
        weatherInfo:"clear",
        dayOrNight:true
    });

    return(
        <div style={{textAlign:"center"}}>
            <SearchBox setWeatherInfo={setWeatherInfo} />
            <InfoBox result={weatherInfo} />
        </div>
    );
}