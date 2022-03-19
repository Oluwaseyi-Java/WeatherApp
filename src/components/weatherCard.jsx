import React from 'react'

const WeatherCard = (props) => {

  const temp=()=>{
    return Math.floor(`${(props.main.temp) -273.15}`)
  }
  const temp_min=()=>{
    return Math.floor(`${(props.main.temp_min) -273.15}`)
  }
  const temp_max=()=>{
    return Math.floor(`${(props.main.temp_max) -273.15}`)
  }
 


  return (
    <>
      {props.data.id ?<div className='weatherCard'>
        <div className='cardHeader'>
          <span id='count'>{props.country.country}</span> 
          <p id='state'>{props.data.name}</p> 
        </div>
        <div className='temp-con'>
          <h1 id='temp'>{props.main.temp ? temp() : ""}<sup>o</sup>C</h1>
          <div className='values'>
            <div className='temp'>
              <span>Min-temperature</span><br/>
              <span>{props.main.temp_min ? temp_min() : ""}<sup>o</sup>C</span><br/><br/>
              <span>Max-temperature</span><br/>
              <span>{props.main.temp_max ? temp_max() : ""}<sup>o</sup>C</span> 
              </div>
            <div className='physics'>
              <span>Pressure</span><br/>
              <span>{props.main.pressure}</span><br/><br/>
              <span>Humidity</span><br/>
              <span>{props.main.humidity}</span>
            
            </div>
          </div>
          
        
        </div>
        <div className='dataDescription'>
            <div className='weather'>
              <span>Weather Description</span><br/>
          <span id='Weather-Description'>{props.weather.main}: {props.weather.description}</span>

            </div>
            <div className='speed'>
            <span>Wind speed</span><br/>
              <span>{props.wind.speed}</span>
            </div>
          </div>
      </div>:<p className='message'>{props.messageSent}</p> }

      </>
  )
}

export default WeatherCard