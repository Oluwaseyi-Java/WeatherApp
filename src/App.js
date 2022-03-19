import React from 'react';
import axios from 'axios';
import Header from './components/header';
import Search from './components/search';
import './App.css';
import WeatherCard from './components/weatherCard';
import LocationText from './components/location-text';


function App() {

  let [responseData, setResponseData] = React.useState('')
  let [message, setMessage] = React.useState('')
  let [country, setCountry]=React.useState("")
  let [main, setMain]=React.useState("")
  let [weather, setWeather]=React.useState("")
  let [wind, setWind]=React.useState("")

  const onAdd = (value) => {

    let ID = "75d4d68ab258bd16c2defa27bb9c5a7c"
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${ID}`
      setMessage('Loading...')
    axios(url)
      .then((response)=>{
        setResponseData(response.data)
        setCountry(response.data.sys)
        setMain(response.data.main)
        setWeather(response.data.weather[0])
        setWind(response.data.wind)
        setMessage('')
        console.log(response.data)
      })
      .catch((error) => {
        setMessage('Not found')
        console.log(error)
      })
  }

  // fetch('https://api.ipregistry.co/?key=tryout')
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (payload) {
  //     console.log(payload.location.country.name + ', ' + payload.location.city);
  //   });

  return (
    <div className="App">
      <Header/>
      <Search onPressed={onAdd} />
      <LocationText />
      <WeatherCard 
        wind={wind}
        weather={weather}
        main={main}
        country={country}
        messageSent={message} 
        data={responseData}
        
      />
    </div>
  );
}

export default App;
