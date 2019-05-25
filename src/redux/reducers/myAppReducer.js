import constants from '../constants';
const { types, initialState } = constants;

export default function (state = initialState, action) {
    switch (action.type) {

        case types.FETCH_LATEST_WAIT_LIST:
            return { ...state, waitList: action.payload };

        case types.FETCH_LATEST_RESULTS:
            return { ...state, results: action.payload };

        default:
            return state;
    }
}
