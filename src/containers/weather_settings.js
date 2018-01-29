import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { FetchWeather, UpdatePageIndex } from '../actions'

class WeatherSettings extends Component {
    constructor(props) {
        super(props)
    }

    handleOnChange = (val) => {
        debugger
        this.props.UpdatePageIndex(val)
    }
    prevButton(){
        return this.props.pageIndex > 0 ?
            <button type="button" onClick={()=>this.handleOnChange(-1)} className="btn btn-primary btn-arrow-left">Previous</button>
        : null
    }
    nextButton(){
        return this.props.pageIndex < 3 ?
            <button type="button" onClick={()=>this.handleOnChange(1)} className="btn btn-primary btn-arrow-right">Next</button>
        : null
    }
    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-3">{this.prevButton()}</div>
                    <div className="col-md-6"> </div>
                    <div className="col-md-3">{this.nextButton()}</div>
                </div>
            </div>
        )
    }
}

function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({ FetchWeather, UpdatePageIndex }, dispatch)
}
const mapStateToProps = ({ pageIndex }) => ({ pageIndex })

export default connect(
    mapStateToProps, mapActionCreaterToProps
)(WeatherSettings);