import { UPDATE_PAGE_INDEX } from "../actions";//,SHOW_LOADING

export default (state = 0, action) => {
    switch (action.type) {
        case UPDATE_PAGE_INDEX:
            return (state + action.payload)
        default:
            return state;
    }
};
