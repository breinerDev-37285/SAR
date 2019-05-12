import React from 'react'
import WeatherTemperature from './wheaterTemperature'
import WeatherExtraInfo from './weatherExtraInfo'


const weatherData = () => (
    <div className="weatherData">
        
        <WeatherTemperature temperature={ 20 } state={ 'sun' } /> 
        <WeatherExtraInfo humidity={ 8 } wind={ '10m/s' } />
    </div>
)

export default weatherData