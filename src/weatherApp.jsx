
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
export default function WeatherApp() {
    const [weatherInfo,setWeatherInfo]=useState({
       
            city:"delhi",
            feels_like:26.05,
            humidity:65,
            temp:26.05,
            tempMax:26.05,
            tempMin:26.05,
            weather:"haze",
        });

        let updateInfo=(newInfo)=>{
           setWeatherInfo(newInfo); 
        }
    return(
        <div style={{textAlign:"center"}}>
            <h2>
                weather app made by sudhir singh
            </h2>
            <SearchBox  updateInfo={updateInfo}/>
            <InfoBox  info={weatherInfo}/>
        </div>
    );
}