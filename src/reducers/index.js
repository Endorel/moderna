export default function reducer(state = {
    insurances: [],
    limitedRange: true,
    fetching: false,
    fetched: false,
    error: null,
}, action) {
    switch (action.type) {
        case "FETCH_DATA": {
            return { ...state, fetching: true }
        }
        case "FETCH_DATA_REJECTED": {
            return {
                ...state,
                fetching: false,
                error: action.payload
            }
        }
        case "FETCH_DATA_FULFILLED": {
            return {
                ...state,
                fetching: false,
                fetched: true,
                insurances: action.payload
            }
        }
        case "SET_LIMITEDRANGE": {
            return { ...state, limitedRange: !state.limitedRange }
        }
        case "SET_LIMITEDRANGE_TRUE": {
            return { ...state, limitedRange: true }
        }
        default:
            return state;
    }
};