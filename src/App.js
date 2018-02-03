import React, { Component } from 'react';
import SearchBar from './containers/searchbar'
import WeatherContainer from './containers/weather_container'
import WeatherSettings from './containers/weather_settings'

export default class App extends Component {
  render() {
    return (
      <div className="container container-fluid">
      <SearchBar />
      <WeatherSettings />
      <WeatherContainer />
      </div>
    );
  }
}