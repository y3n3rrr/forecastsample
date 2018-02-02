import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherCard from './weathercard'
import { isLoading } from '../actions'

import AmCharts from "@amcharts/amcharts3-react";
import weather_config from '../config/'

class WeatherCardContainer extends Component {
    constructor(props) {
        super(props)
        this.showNotFoundLocationMessage = true;
        this.chartConfig = weather_config;
        this.forecast = []
    }
    componentWillReceiveProps(nextProps) {
        if (this.showNotFoundLocationMessage = (nextProps.weather && nextProps.weather.query.results)) {
            this.data = nextProps.weather.query.results.channel
            this.forecast = this.data.item.forecast;
            this.chartConfig.dataProvider = [];
            debugger
            this.forecast.map((val, i) => {
                this.chartConfig.dataProvider.push({ visits: val.high, country: val.date + ", " + val.day, color: '#' + ((1 << 24) * Math.random() | 0).toString(16), temp: this.data.units.temperature })
            })
        }
    }

    render() {
        if (this.props.showLoading)
            return <div className="col-md-12 alert alert-warning search-message">Loading..</div>
        if (!this.showNotFoundLocationMessage)
            return <div className="col-md-12 alert alert-danger search-message">location cant found..</div>
        if (!this.data)
            return <div className="col-md-12 alert alert-info search-message">Search for a city</div>

        const { pageIndex } = this.props
        const cards = this.forecast.filter((val, i) => (i >= pageIndex * 3 && i < (pageIndex + 1) * 3)).map((val, i) => {
            return <div key={i} className="col-md-4"><WeatherCard atmosphere={this.data.atmosphere} {...val} /></div>
        })
        const { city, country } = this.data.location;
        const { temperature } = this.data.units;
        return (
            <div className="row">
                <div className="col-md-12">
                    <span className="location"><strong>{city}, {country}</strong></span>
                    <div className="variations temperature">Temperature:({temperature})</div>
                </div>
                <div className="col-md-12">
                    {cards}
                </div>
                <div className="col-md-12">
                    <AmCharts.React
                        style={{
                            width: "100%",
                            height: "500px"
                        }}
                        options={this.chartConfig} />
                </div>
            </div>
        )
    }
}
function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({ isLoading }, dispatch)
}
const mapStateToProps = ({ weather, pageIndex, showLoading }) => ({ weather, pageIndex, showLoading })
export default connect(mapStateToProps, mapActionCreaterToProps)(WeatherCardContainer)