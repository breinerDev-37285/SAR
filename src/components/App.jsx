import React, { Component } from 'react'
import WeatherLocation from './weatherLocation/wheaterLocation'
import './css/App.css'

class App extends Component{

   constructor( props ){
       super( props )
       this.state = { data:null } 

       this.changeState = this.changeState.bind( this )

   }

   componentWillMount(){
       return this.changeState();
   }


   changeState = () => {
        const api_key = '6f78a9bd86b30a24cbe527784f7e1b1e'
        const location = 'ibarra'
        const api = `https://api.openweathermap.org/data/2.5/weather?q=${ location }&appid=${api_key}&units=metric`
        
        fetch( api )
            .then( data_head => data_head.json())
            .then( weather_data => {
                this.setState({
                    data:{
                        city: weather_data.name,
                        temperature: weather_data.main.temp,
                        humidity: weather_data.main.humidity,
                        wind: `${weather_data.wind.speed}m/s`,
                        estado: weather_data.weather[0].main 
                    }
                })
            })
    }
   

   render(){
       console.log('render')
       return (
           <div className="weather">
                { this.state.data ?  <WeatherLocation  city={ this.state.data.city } temperature = { this.state.data.temperature } humidity = { this.state.data.humidity } wind= { this.state.data.wind } estado={ this.state.data.estado }  / > : 'cargando'}
           </div>
       )
   }
}

export default App