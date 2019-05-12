import React from 'react'
import Location from './location'
import WeatherData from './weatherData/weatherData'
import PropTypes from 'prop-types'


const weatherLocation = ( data ) => {
    
    const { city,temperature,humidity,wind,estado } = data;
    
    return(
        <div >
            <Location  city = { city } />
            <hr/>
            <WeatherData temperature = { temperature } humidity = { humidity } wind = { wind } estado={estado} />
        </div>
    )
}

weatherLocation.propTypes = {
    data: PropTypes.shape({
        city: PropTypes.string.isRequired,
        temperature: PropTypes.number.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired,
        estado: PropTypes.string.isRequired
    })
}




export default weatherLocation