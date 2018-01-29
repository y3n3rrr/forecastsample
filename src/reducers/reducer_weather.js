import { FETCH_WEATHER, UPDATE_PAGE_INDEX } from "../actions";

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state]
            break;
        default:
            return state;
    }
};