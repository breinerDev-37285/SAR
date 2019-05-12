import React from 'react'
import WeatherIcons from 'react-weathericons';
import { SUN,RAIN,STORM,STORM_NIGHT } from '../../../constants/wheaters'
import PropTypes from 'prop-types'

const getIcons = data => {
    switch( data ){
        case RAIN:
            return <WeatherIcons name="day-rain" size="2x" />
        case SUN:
            return <WeatherIcons name="day-cloudy-high" size="2x" />
        case STORM_NIGHT:
            return <WeatherIcons name="night-alt-sleet-storm" size="2x" />
        case STORM:
            return <WeatherIcons name="thunderstorm" size="2x" />
        
        default: 
        return <WeatherIcons name="cloud" size="2x" />
    }
}

const weatherTemperature = ({temperature,state}) => (
    <div className="weatherTemperature">
        { getIcons(state) }
        <span>{temperature} Cº</span>
    </div>
)

weatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    state: PropTypes.string
}


export default weatherTemperature