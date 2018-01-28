import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherCard extends Component {
    constructor(props) {
        super(props)
        this.weatherImages = {"Sunny":"sunny.png", "Cloudy":"cloudy.png" ,"PartlyCloudy":"partlycloudy.png",  "MostlyCloudy":"mostlycloudy.png", "MostlySunny":"mostlysunny.png", "RainAndSnow":"rainandsnow.jpg", "RainAndSunny":"rainandsunny.gif", "ScatteredShowers":"scatteredshowers.gif","Showers":"showers.gif", "Rain":"rain.png"}

    }
    componentWillReceiveProps(nextProps) {
        var asd = nextProps;
        debugger
    }
    
    render() {
        let weatherImgUrl= "assets/img/unknown.png"
        if(this.weatherImages[this.props.text.replace(/\s/g, '')])
            weatherImgUrl= "assets/img/" + this.weatherImages[this.props.text.replace(/\s/g, '')]

        return (
            <div className="card">
                <span className="city">{this.props.date}, {this.props.day}</span>
                <ul className="menu">
                    <li />
                    <li />
                    <li />
                </ul>
                <br />
                <div className="sun" > <img src={weatherImgUrl} width={40} height={40} />  </div>
                <span className="temp">76°</span>
                <span>
                    <ul className="variations">
                        <li>{this.props.text}</li>
                        <li><span className="speed">9<span className="mph">mph</span></span></li>
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

const mapStateToProps = ({weather}) => ({ weather })

export default connect(mapStateToProps)(WeatherCard)