import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import WeatherCard from './weathercard'
import {ShowLoading} from '../actions'

class WeatherCardContainer extends Component {
    constructor(props) {
        super(props)
    }
    componentWillReceiveProps(nextProps) {
        if(nextProps.weather.length>0){
            this.data = nextProps.weather[0].query.results.channel
            this.forecast= this.data.item.forecast
            this.props.ShowLoading(false)
        }
    }

    render() {
        if(this.props.showLoading)
            return <div className="col-md-12 alert alert-warning search-message">Loading..</div>
        if(!this.data)
            return <div className="col-md-12 alert alert-info search-message">Search for a city</div>
        const cards= this.forecast.filter((val,i)=> i < 3).map((val, i)=>{
            return <div className="col-md-4"><WeatherCard {...val}/></div>
        })
        const cityName = this.data.location.city;
        const description = this.description;
        return (
            <div className="row"> 
            <div className="col-md-12">
                {cards}
            </div>
            </div>
        )
    }
}
function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({ShowLoading},dispatch)
}

const mapStateToProps = ({weather,showLoading}) => ({ weather,showLoading })
export default connect(mapStateToProps,mapActionCreaterToProps)(WeatherCardContainer)