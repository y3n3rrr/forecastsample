import { FETCH_WEATHER, UPDATE_PAGE_INDEX } from "../actions";

export default (state=null, action) => {
    switch (action.type) {
        case FETCH_WEATHER:
        console.log("in action creater:",action.payload)
            return action.payload.data
        default:
            return state;
    }
};