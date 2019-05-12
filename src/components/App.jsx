import React, { Component } from 'react'
import WeatherLocation from './weatherLocation/wheaterLocation'
import './css/App.css'

class App extends Component{


   constructor( props ){
       super( props )
       this.setState = {}
   }

   render(){
       return (
           <div >
               <WeatherLocation  / >
           </div>
       )
   }
}

export default App