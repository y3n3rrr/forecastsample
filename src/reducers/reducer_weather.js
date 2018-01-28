import { FETCH_WEATHER } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
        console.log("in action creater:",action.payload)
            return [action.payload.data, ...state]
        default:
            return state;
    }
};