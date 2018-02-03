import { FETCH_WEATHER } from "../actions";

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return action.payload.data
        default:
            return state;
    }
};