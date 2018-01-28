import axios from 'axios'
export const FETCH_WEATHER='FETCH_WEATHER'



export function FetchWeather(params = null) {
    var locationQuery = escape(`select * from weather.forecast where woeid in (select woeid from geo.places(1) where text="${params.city},de") and u='f'`),
    locationUrl = "http://query.yahooapis.com/v1/public/yql?q=" + locationQuery + "&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";
    const request = axios.get(locationUrl)
    //console.log("in action creater:",request)
    return {
        type:FETCH_WEATHER,
        payload:request
    }
}
