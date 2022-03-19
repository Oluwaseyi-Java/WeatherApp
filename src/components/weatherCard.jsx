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
 
  
      // <p>{props.messageSent}</p>    
      

  return (
      <div className='weatherCard'>
        <div className='cardHeader'>
          <span id='count'>{props.country.country}</span> 
          <p id='state'>{props.data.name}</p> 
        </div>
        <div className='temp-con'>
          <h1 id='temp'>{props.main.temp ? temp() : ""}<sup>o</sup>C</h1>
          <div className='values'>
            <div className='temp'>
            <p>{props.main.temp_min ? temp_min() : ""}<sup>o</sup>C</p>
            <p>{props.main.temp_max ? temp_max() : ""}<sup>o</sup>C</p> 
              </div>
            <div className='physics'>
            <p>{props.main.pressure}</p>
            <p>{props.main.humidity}</p>
            </div>
          </div>
          
        
        </div>
        <div className='dataDescription'>
            <div className='weather'>
              <p>{props.weather.main}</p>  
              <p>{props.weather.description}</p>

            </div>
            <div className='speed'>
              <p>{props.wind.speed}</p>
            </div>
          </div>
      </div>

  )
}

export default WeatherCard