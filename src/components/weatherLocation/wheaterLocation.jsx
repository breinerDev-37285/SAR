import React from 'react'
import Location from './location'
import WeatherData from './weatherData/weatherData'


const weatherLocation = () => (
    <div className="mainComponent">
        <Location  city={ 'Rio de Janeiro' } />
        <WeatherData  />
    </div>
)

export default weatherLocation