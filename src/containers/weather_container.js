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
            this.forecast= this.data.item.forecast
        }
    }

    render() {
        debugger
        this.pageIndex = this.props.pageIndex
        if(!this.data)
            return <div className="col-md-12 alert alert-info search-message">Search for a city</div>
        const cards= this.forecast.filter((val,i)=> (i>=this.pageIndex*3  && i<(this.pageIndex+1)*3)).map((val, i)=>{
            return <div className="col-md-4"><WeatherCard {...val}/></div>
        })
        const cityName = this.data.location.city;
        const description = this.description;
        return (
            <div className="row"> 
            <div className="col-md-12">
                <span className="location"><strong>{this.data.title}</strong></span>
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