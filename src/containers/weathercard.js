import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherCard extends Component {
    constructor(props) {
        super(props)
        this.weatherImages = {"Sunny":"Sunny.png", "Cloudy":"Cloudy.png" ,"PartlyCloudy":"Partly Cloudy.png",  "MostlyCloudy":"Mostly Cloudy.png", "MostlySunny":"Mostly Sunny.png", "RainAndSnow":"Rain And Snow.png", "RainAndSunny":"Rain And Sunny.gif", "ScatteredShowers":"Scattered Showers.gif","Showers":"Showers.gif", "Rain":"Rain.png"}
        this.avgTemp=parseInt((parseInt(this.props.high)  + parseInt(this.props.low))/2);
        this.weatherImgUrl= "assets/img/unknown.png"
        if(this.weatherImages[this.props.text])
        this.weatherImgUrl= "assets/img/" + this.weatherImages[this.props.text]
    }
    
    render() {
        return (
            <div className="card">
                <span className="city">{this.props.date}, {this.props.day}</span>
                <ul className="menu">
                    <li />
                    <li />
                    <li />
                </ul>
                <br />
                <div className="sun" > <img title={this.weatherText} src={this.weatherImgUrl} width={40} height={40} />  </div>
                <span className="temp">{this.avgTemp}</span>
                <span>
                    <ul className="variations">
                        <li>{this.props.text}</li>
                        <li><span className="speed">High:<span className="mph">{this.props.high}</span></span></li>
                        <li><span className="speed">Low:<span className="mph">{this.props.low}</span></span></li>
                    </ul>
                </span>
                <div className="forecast clear">
                    <div className="form-group">
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ pageIndex}) => ({ pageIndex })

export default connect(mapStateToProps)(WeatherCard)