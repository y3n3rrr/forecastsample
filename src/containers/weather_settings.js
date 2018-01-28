import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class WeatherSettings extends Component {
    constructor(props) {
        super(props)
        this.handleOnChange=this.handleOnChange.bind(this)
        this.handleOnSubmit=this.handleOnSubmit.bind(this)
    }

    handleOnChange = (e) =>{
        this.props.ChangeWeatherTemp({temprature:'f'})
    }
    render() {
        debugger
        const cityName = this.props.name;
        return (
            <div className="col-md-12">
            <div className="col-md-3"><button type="button" className="btn btn-primary btn-arrow-left">Previous</button></div>
      <div className="col-md-6"></div>
      <div className="col-md-3"><button id="btnNext" type="button" className="btn btn-primary btn-arrow-right">Next</button></div>
      </div>
        )
    }
}

function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({FetchWeather},dispatch)
}
export default connect(
    null, mapActionCreaterToProps
)(SearchBar);