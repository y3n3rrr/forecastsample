import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getAverage } from '../utility'
import { weather_images } from '../config'

class WeatherCard extends Component {
    constructor(props) {
        super(props)
        this.weatherImages = weather_images;
        this.weatherImgUrl = "assets/img/unknown.png"
        if (this.weatherImages[this.props.text])
            this.weatherImgUrl = "assets/img/" + this.weatherImages[this.props.text]
    }

    render() {
        const avgTemp = getAverage(this.props.high, this.props.low)
        return (
            <div className="card">
                <span className="city">{this.props.date}, {this.props.day}</span>
                <ul className="menu">
                    <li />
                    <li />
                    <li />
                </ul>
                <br />
                <div className="sun" > <img title={this.weatherText} src={this.weatherImgUrl} width={40} height={40} alt={this.weatherText} />  </div>
                <span className="temp">{avgTemp}</span>
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

const mapStateToProps = ({ pageIndex }) => ({ pageIndex })

export default connect(mapStateToProps)(WeatherCard)