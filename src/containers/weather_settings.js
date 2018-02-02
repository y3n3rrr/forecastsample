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
        if(this.props.showLoading)
            return <div></div>;
        return (
            <div className="row">
                <div className="col-md-12">
                    <div className="col-md-3">{this.prevButton()}</div>
                    <div className="col-md-6"> 


                    <div className="well well-sm text-center">
	    <h3>Radio:</h3>
      <div className="dlk-radio btn-group">

	   <label className="btn btn-info">
	       <input name="choices[1]" className="form-control" type="radio" value="3" defaultChecked="checked" />
	       <i className="fa fa-check glyphicon glyphicon-ok"></i>
       </label>
	   <label className="btn btn-warning">
	       can be labeled
       </label>
       	   <label className="btn btn-danger">
	       <input name="choices[1]" className="form-control" type="radio" value="0" defaultChecked="checked" />
	       <i className="fa fa-check glyphicon glyphicon-remove"></i>
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
    return bindActionCreators({ FetchWeather, UpdatePageIndex }, dispatch)
}
const mapStateToProps = ({ pageIndex }) => ({ pageIndex })

export default connect(
    mapStateToProps, mapActionCreaterToProps
)(WeatherSettings);