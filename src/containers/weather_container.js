import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherCard from './weathercard'

class WeatherCardContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.weather.length>0){
            this.data = nextProps.weather[0].query.results.channel
        }
    }

    render() {
        debugger
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

const mapStateToProps = ({weather,pageIndex}) => ({ weather,pageIndex })
export default connect(mapStateToProps,null)(WeatherCardContainer)