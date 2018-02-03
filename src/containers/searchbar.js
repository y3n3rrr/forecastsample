import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { FetchWeather, isLoading } from '../actions'

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = { term: '' }
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleOnSubmit = this.handleOnSubmit.bind(this)
    }
    handleOnChange = (e) => {
        this.setState({ term: e.target.value })
    }
    handleOnSubmit = (e) => {
        e.preventDefault();
        var location = this.refs.location.value;
        if (location.length === 0)
            return;
        this.props.isLoading(true)
        this.props.FetchWeather({ city: this.state.term, countrycode: 'de', temperature: 'C' }) //default search settings 
    }

    render() {
        return (
            <div className="jumbotron search-form">
            <div className="row">
                <form className="form-horizontal" onSubmit={this.handleOnSubmit}>
                    <div className="col-md-10">
                        <input type="search" ref="location" onChange={this.handleOnChange} value={this.state.term} className="form-control" placeholder="get a five day forecast for your city" />
                    </div>
                    <div className="col-md-2">
                        <button type="submit" className="btn input-block-level btn-info form-control" title="Search for city" >
                            <i className='fa fa-search'></i> Search 
                        </button>
                    </div>
                </form>
            </div>
            </div>
        );
    }
}

function mapActionCreaterToProps(dispatch) {
    return bindActionCreators({ FetchWeather, isLoading }, dispatch)
}

export default connect(
    null, mapActionCreaterToProps
)(SearchBar);