import React from 'react';
import axios from 'axios';
import Header from './components/header';
import Search from './components/search';
import './App.css';
import WeatherCard from './components/weatherCard';
import LocationText from './components/location-text';


function App() {

  // let [responseData, setResponseData] = React.useState('')
  // let [message, setMessage] = React.useState('')

  

  const onAdd = (value) => {


    // let ID = "75d4d68ab258bd16c2defa27bb9c5a7c"
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${value}&APPID=${ID}`
    //   setMessage('Loading...')
    // axios(url)
    //   .then((response)=>{
    //     setResponseData(response.data)
    //     setMessage('')
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     setMessage('Error')
    //     console.log(error)
    //   })
  }

  return (
    <div className="App">
      <Header/>
      <Search onPressed={onAdd} />
      <LocationText/>
      <WeatherCard/>
    </div>
  );
}

export default App;
