import React from 'react';
import Header from './components/header';
import Search from './components/search';
import './App.css';
import WeatherCard from './components/weatherCard';
import LocationText from './components/location-text';

function App() {
  return (
    <div className="App">
      <Header/>
      <Search/>
      <LocationText/>
      <WeatherCard/>
    </div>
  );
}

export default App;
