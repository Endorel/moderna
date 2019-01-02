import axios from 'axios';

export function fetchData() {
    return function (dispatch) {
        axios.get("https://modernacodechallenge.azurewebsites.net/api/insurances")
            .then((response) => {
                dispatch({ type: "FETCH_DATA_FULFILLED", payload: response.data });
            })
            .catch((err) => {
                dispatch({ type: "FETCH_DATA_REJECTED" });
            });
    }
}

export function toggleDisplay() {
    return {
        type: "SET_LIMITEDRANGE"
    }
}

