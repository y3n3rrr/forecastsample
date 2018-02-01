import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import SearchBar from './containers/searchbar'
import WeatherContainer from './containers/weather_container'
import WeatherSettings from './containers/weather_settings'

export default class App extends Component {
  constructor(props){
    super(props)
  }
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