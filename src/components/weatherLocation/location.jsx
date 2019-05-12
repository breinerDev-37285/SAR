import React from 'react'
import PropTypes from 'prop-types'

const location = ({city}) => (
    <div className="location"> 
        <h1>{ city }</h1>
    </div>
)

location.propTypes = { city: PropTypes.string.isRequired }

export default location