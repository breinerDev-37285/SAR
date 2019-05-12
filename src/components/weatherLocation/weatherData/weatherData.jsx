import React from 'react'
import WeatherTemperature from './wheaterTemperature'
import WeatherExtraInfo from './weatherExtraInfo'


const weatherData = ( data ) => {
    
    const { temperature,humidity,wind,estado } = data;

    return (
        <div className="weatherData">
            <WeatherTemperature temperature={ temperature } estado= { estado }  /> 
            <WeatherExtraInfo humidity={ humidity } wind={ wind } />
        </div>
    )
}

export default weatherData