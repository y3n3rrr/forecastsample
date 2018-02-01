import axios from 'axios'
export const FETCH_WEATHER='FETCH_WEATHER'
export const UPDATE_PAGE_INDEX='UPDATE_PAGE_INDEX'
export const IS_LOADING='IS_LOADING'



export function FetchWeather(params = null) {
    var locationQuery = escape(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${params.city},de") and u='${params.temperature}'`),
    locationUrl = "http://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    const request = axios.get(locationUrl)
    console.log("in action creater:",request)
    return {
        type:FETCH_WEATHER,
        payload: request
    }
}

export function UpdatePageIndex(params = null) {
    debugger
    return {
        type:UPDATE_PAGE_INDEX,
        payload:params
    }
}

export function isLoading(params) {
    return {
        type: IS_LOADING,
        payload: params
    }
}