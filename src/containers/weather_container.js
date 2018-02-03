import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherCard from './weathercard'
import { isLoading } from '../actions'

import AmCharts from "@amcharts/amcharts3-react";
import weather_config from '../config/'
import { getAverage } from '../utility'

class WeatherCardContainer extends Component {
    constructor(props) {
        super(props)
        this.showNotFoundLocationMessage = true;
        this.chartConfig = weather_config;
        this.forecast = []
    }
    componentWillReceiveProps(nextProps) {
        this.showNotFoundLocationMessage = (nextProps.weather && nextProps.weather.query.results)
        if (nextProps.weather && nextProps.weather.query.results) {
            this.data = nextProps.weather.query.results.channel
            this.forecast = this.data.item.forecast;
            this.chartConfig.dataProvider = [];
            this.forecast.map((val, i) => {
                this.chartConfig.dataProvider.push({
                    visits: getAverage(val.high, val.low), // using 'high' value of forecast object in chart
                    country: val.date + ", " + val.day, // setting axis labels of chart
                    color: '#' + ((1 << 24) * Math.random() | 0).toString(16), // setting random colors for columns of the chart 
                    temp: this.data.units.temperature
                })
                return null;
            })
        }
    }

    render() {
        debugger
        if (this.props.showLoading)
            return <div className="alert alert-warning search-message"><div className="loader"></div> Loading... </div>
        if (!this.showNotFoundLocationMessage)
            return <div className="alert alert-danger search-message"> <i className="fa fa-times"></i> No location found for this entry...</div>
        if (!this.data)
            return <div className="alert alert-info search-message">Search for a city</div>

        // if application state got required data, list weather card items
        const { pageIndex } = this.props
        const cards = this.forecast.filter((val, i) => (i >= pageIndex * 3 && i < (pageIndex + 1) * 3)).map((val, i) => {
            return <div key={i} className="col-md-4"><WeatherCard atmosphere={this.data.atmosphere} {...val} /></div>
        })
        const { city, country } = this.data.location;
        const { temperature } = this.data.units;
        return (
            <div className="row">
                <span className="location"><strong>{city}, {country}</strong></span>
                <div className="variations temperature">Temperature:(&deg;{temperature})</div>
                <div className="row">
                    {cards}
                </div>
                <div className="row">
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