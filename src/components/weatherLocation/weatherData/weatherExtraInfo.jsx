import React from 'react'
import PropTypes from 'prop-types'

const weatherExtraInfo = ({ humidity,wind }) => (
    <div className="weatherInfo"> 
        <span>{ `${humidity} % h ` } </span>
        <span>{ `${wind} w` }</span>
    </div>
)

weatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired
}

export default weatherExtraInfo