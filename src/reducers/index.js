import { combineReducers } from 'redux'
import reducer_weather from './reducer_weather'
import reducer_pageIndex from './reducer_page_index'
import reducer_loader from './reducer_loader'
const rootReducer = combineReducers({
    weather:reducer_weather,
    pageIndex:reducer_pageIndex,
    showLoading:reducer_loader,
});
export default rootReducer;