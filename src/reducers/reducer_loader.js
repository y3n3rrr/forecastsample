import { IS_LOADING, FETCH_WEATHER } from "../actions";//,SHOW_LOADING

export default (state = false, action) => {
    switch (action.type) {
        case IS_LOADING:
        return true;
        case FETCH_WEATHER:
        return false;
        default:
            return state;
    }
};
