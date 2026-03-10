import "./SearchBox.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Alert from '@mui/material/Alert';



export default function SearchBox({setWeatherInfo}){
    const apiKey = import.meta.env.VITE_API_KEY;
    let [city,setCity] = useState("");
    let [error,setError] = useState(false);

    let URL = `https://api.openweathermap.org/data/2.5/weather`;

    function handleChange(event){
        setCity(event.target.value);
    }

    async function getWeatherInfo(){
        try{
            const response = await fetch(URL+`?q=${city}&appid=${apiKey}&units=metric`);
            const jsonResponse = await response.json();
            console.log(apiKey);
            let result = {
                city:city,
                temp:jsonResponse.main.temp,
                tempMin:jsonResponse.main.temp_min,
                tempMax:jsonResponse.main.temp_max,
                humidity:jsonResponse.main.humidity,
                feels_like:jsonResponse.main.feels_like,
                weather:jsonResponse.weather[0].description,
                weatherInfo:jsonResponse.weather[0].main,
                dayOrNight: jsonResponse.weather[0].icon.includes("d")
            }
            setError(false);
            setWeatherInfo(result);
        }catch(err){
            setError("No such place in our api");
        }
    }

    function handleSubmit(event){
        event.preventDefault();
        console.log(city);
        getWeatherInfo();
        setCity("");
    }


    return (
        <div className="searchBox">
            <h3>Search for the weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    size="small"
                    id="cityName"
                    label="City"
                    value={city}
                    onChange={handleChange}
                />
                &nbsp; &nbsp; 
                <Button variant="contained" size="medium" type="small">
                    Search
                </Button>
            </form>
            {error && <p style={{color:"red"}}>{error}</p>}
        </div>  
    );
}