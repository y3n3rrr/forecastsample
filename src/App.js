import React, { Component } from 'react';
import './App.css';
import SearchBar from './containers/searchbar'
import WeatherCard from './containers/weathercard'
import WeatherContainer from './containers/weather_container'

class App extends Component {
  render() {
    return (
      <div className="container container-fluid">
      <SearchBar />
      <div className="row">
      <WeatherContainer />
      </div>
      </div>
    );
  }
}

export default App;
