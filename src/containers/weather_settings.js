import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { isLoading, FetchWeather, UpdatePageIndex } from '../actions'

class WeatherSettings extends Component {
    constructor(props) {
        super(props)
        this.appData = {}
    }
    componentWillReceiveProps(nextProps) {
        this.appData = nextProps.weather != null ? nextProps.weather.query.results : nextProps.weather;
    }


    handleOnPageChange = (val) => {
        this.props.UpdatePageIndex(val)
    }

    handleOnTemperatureChange = (e) => {
        const { city } = this.appData.channel.location
        this.props.isLoading(true)
        this.props.FetchWeather({ city: city, countrycode: 'de', temperature: e.target.value })
    }

    prevButton() {
        return this.props.pageIndex > 0 ? <button type="button" onClick={() => this.handleOnPageChange(-1)} className="btn btn-primary btn-arrow-left pull-right">Previous</button> : null
    }
    nextButton() {
        return this.props.pageIndex < 3 ? <button type="button" onClick={() => this.handleOnPageChange(1)} className="btn btn-primary btn-arrow-right pull-left">Next</button> : null
    }
    render() {
        if (this.props.showLoading || !this.appData || !this.appData.channel)
            return null;
        return (
            <div className="row">
                <div className="weather-settings">
                    <div className="col-md-3">{this.prevButton()}</div>
                    <div className="col-md-6">
                        <div className="well well-sm text-center">
                            <h5>You can change temperature 'C' to 'F' using these buttons</h5>
                            <div className="dlk-radio btn-group">
                                <label className="btn btn-info">
                                    <input name="choices[1]" onChange={(e) => this.handleOnTemperatureChange(e)} className="form-control" type="radio" value="C" defaultChecked={this.appData.channel.units.temperature === 'C'} />
                                    ℃
                                </label>
                                <label className="btn btn-warning"> <i className="fa fa-thermometer-empty"></i> </label>
                                <label className="btn btn-success">
                                    <input name="choices[1]" onChange={(e) => this.handleOnTemperatureChange(e)} className="form-control" type="radio" value="F" defaultChecked={this.appData.channel.units.temperature === 'F'} />
                                    °F
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">{this.nextButton()}</div>
                </div>
            </div>
        )
    }
}

function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({ isLoading, FetchWeather, UpdatePageIndex }, dispatch)
}
const mapStateToProps = ({ pageIndex, weather, showLoading }) => ({ pageIndex, weather, showLoading })

export default connect(
    mapStateToProps, mapActionCreaterToProps
)(WeatherSettings);