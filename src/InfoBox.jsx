import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import CloudySnowingIcon from '@mui/icons-material/CloudySnowing';
import CloudIcon from '@mui/icons-material/Cloud';
import BedtimeIcon from '@mui/icons-material/Bedtime';
import "./InfoBox.css";
import { useState , useEffect} from 'react';

export default function InfoBox({result}){
    const DEFAULT_IMG = "https://images.unsplash.com/photo-1601134467661-3d775b999c8b?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    const HOT_IMG = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const COLD_IMG = "https://images.unsplash.com/photo-1674407866481-a39b2239f771?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const CLOUD_IMG = "https://images.unsplash.com/photo-1534088568595-a066f410bcda?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const RAIN_IMG = "https://images.unsplash.com/photo-1507027682794-35e6c12ad5b4?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const DRIZZLE_IMG = "https://images.unsplash.com/photo-1600415684478-744cf4f8f8d7?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const MIST_IMG = "https://images.unsplash.com/photo-1543968996-ee822b8176ba?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Night_IMG = "https://images.unsplash.com/photo-1590418606746-018840f9cd0f?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const Night_IMG2 = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1494&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const [IMG_URL,set_IMG_URL] = useState(DEFAULT_IMG);
    const [ICON,set_ICON] = useState(<SunnyIcon/>);

    useEffect(() => {
        if(result.weatherInfo === "Rain" || result.weatherInfo === "Thunderstorm"){
            set_IMG_URL(RAIN_IMG);
            set_ICON(<CloudySnowingIcon />);
        }else if(result.weatherInfo === "Snow"){
            set_IMG_URL(COLD_IMG);
            set_ICON(<AcUnitIcon />);
        }else if(result.weatherInfo === "Clear"){
            if(!result.dayOrNight){
                set_IMG_URL(Night_IMG);
                set_ICON(<BedtimeIcon />)
            }else{
                set_IMG_URL(HOT_IMG);
                set_ICON(<SunnyIcon />);
            }
            
        }else if(result.weatherInfo === "Clouds"){
            set_IMG_URL(CLOUD_IMG);
            set_ICON(<CloudIcon />);
        }else if(result.weatherInfo === "Drizzle"){
            set_IMG_URL(DRIZZLE_IMG);
            set_ICON(<CloudySnowingIcon />);
        }else if(result.weatherInfo === "Mist"){
            set_IMG_URL(MIST_IMG);
            set_ICON(<CloudIcon />);
        }else{
            if(!result.dayOrNight){
                set_ICON(Night_IMG2);
                set_ICON(<BedtimeIcon />)
            }else{
                set_IMG_URL(DEFAULT_IMG);
                set_ICON(<SunnyIcon />);
            }
            
        }

        
    },[result.weatherInfo]);

    return(
        <div className='infoBox'>
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    sx={{ height: 140 }}
                    image={IMG_URL}
                    title={result.weatherInfo}
                />
                <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {result.city} {ICON}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                    <p>Temperature: {result.temp}&deg;C</p>
                    <p>Humidity: {result.humidity}</p>
                    <p>Min temp: {result.tempMin}&deg;C</p>
                    <p>Max temp: {result.tempMax}&deg;C</p>
                    <p>The weather can be described as {result.weather} and feels like {result.feels_like}&deg;C</p>
                </Typography>
                </CardContent>
                </Card>
            </div>
        </div>
    );
}