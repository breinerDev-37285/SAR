import React from 'react'
import PropTypes from 'prop-types'

const location = ({city}) => (
    <div className="weatherLocation"> 
        <p>{ city }</p>
    </div>
)

location.propTypes = { city: PropTypes.string.isRequired }

export default location