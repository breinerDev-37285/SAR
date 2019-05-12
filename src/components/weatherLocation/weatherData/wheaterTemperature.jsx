import React from 'react'
import { FontAwesomeIcon }  from '@fortawesome/react-fontawesome'

const getIcon = ( data ) => {
    switch( data ){
        case 'lluvia':
            return <FontAwesomeIcon icon="cloud-showers-heavy"  className="icon"  />
        case 'sol':
            return <FontAwesomeIcon icon="cloud-sun"  className="icon"  />
        case 'Clouds':
            return <FontAwesomeIcon icon="cloud"  className="icon"  />
        case 'dia_lluvia':
            return <FontAwesomeIcon icon="cloud-moon-rain"  className="icon"  />
        case 'noche_lluvia':
            return <FontAwesomeIcon icon="cloud-sun-rain"  className="icon"  />
        default: 
            return <FontAwesomeIcon icon="cloud"  className="icon"  />
    }
}


const weatherTemperature = ({ temperature, estado }) => (
    <div className="weatherTemperature">
        { getIcon( estado ) }
        <span>{temperature} Cº</span>
    </div>
)


export default weatherTemperature