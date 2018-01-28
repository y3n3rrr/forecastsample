import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherCard from './weathercard'

class WeatherCardContainer extends Component {
    constructor(props) {
        super(props)

    }

    componentWillReceiveProps(nextProps) {
        this.data = nextProps.weather[0].query.results.channel
        this.forecast= this.data.item.forecast
        debugger
    }
    

    render() {
        if(!this.data)
            return <div className="col-md-12 alert alert-info search-message">Search for a city</div>
        const cards= this.forecast.filter((val,i)=> i < 3).map((val, i)=>{
            debugger
            return <div className="col-md-4"><WeatherCard {...val}/></div>
        })
        const cityName = this.data.location.city;
        const description = this.description;
        return (
            <div className="col-md-12">
                {cards}
            </div>
        )
    }
}

const mapStateToProps = ({weather}) => ({ weather })

export default connect(mapStateToProps)(WeatherCardContainer)