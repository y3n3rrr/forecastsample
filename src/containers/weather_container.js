import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherCard from './weathercard'
import {isLoading} from '../actions'
class WeatherCardContainer extends Component {
    constructor(props) {
        super(props)
        this.showNotFoundLocationMessage=false;
    }
    componentWillReceiveProps(nextProps) {
        debugger
        if(nextProps.weather && nextProps.weather.query.results){
            this.data = nextProps.weather.query.results.channel
            this.showNotFoundLocationMessage=false;
        }
        else
            this.showNotFoundLocationMessage=true;
    }

    render() {
        debugger
        if(this.props.showLoading)
            return <div className="col-md-12 alert alert-warning search-message">Loading..</div>
        if(this.showNotFoundLocationMessage)
            return <div className="col-md-12 alert alert-danger search-message">location cant found..</div>

        if(!this.data)
        return <div className="col-md-12 alert alert-info search-message">Search for a city</div>
        
        const {pageIndex} = this.props
        const {forecast}= this.data.item
        const cards= forecast.filter((val,i)=> (i>=pageIndex*3  && i<(pageIndex+1)*3)).map((val, i)=>{
            return <div className="col-md-4"><WeatherCard {...val}/></div>
        })
        const {city, country} = this.data.location;
        const temperature = this.data.units.temperature;
        return (
            <div className="row"> 
            <div className="col-md-12">
                <span className="location"><strong>{city}, {country}</strong></span>
                <div className="variations temperature">Temperature:({temperature})</div>
            </div>
            <div className="col-md-12">
                {cards}
            </div>
            </div>
        )
    }
}
function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({isLoading}, dispatch)
}
const mapStateToProps = ({weather,pageIndex,showLoading}) => ({ weather,pageIndex,showLoading })
export default connect(mapStateToProps,mapActionCreaterToProps)(WeatherCardContainer)