import {
    FETCH_SESSION_TOKEN_LOADING,
    FETCH_SESSION_TOKEN_SUCCESS,
    FETCH_SESSION_TOKEN_FAILURE,
} from '../../redux/constants';

const initialState = {
    [FETCH_SESSION_TOKEN_LOADING.paramName]: false,
    [FETCH_SESSION_TOKEN_SUCCESS.paramName]: {},
    [FETCH_SESSION_TOKEN_FAILURE.paramName]: null
};

const stateUpdate = (state, load, success, failure) => {
    return {
        ...state,
        [FETCH_SESSION_TOKEN_LOADING.paramName]: load,
        [FETCH_SESSION_TOKEN_SUCCESS.paramName]: success || {},
        [FETCH_SESSION_TOKEN_FAILURE.paramName]: failure
    }
};

export const fetchSessionToken = (state = initialState, action) => {
    switch(action.type) {
        case FETCH_SESSION_TOKEN_LOADING.name:
            return stateUpdate(state, true, {}, null);
        case FETCH_SESSION_TOKEN_SUCCESS.name:
            return stateUpdate(state, false, action.payload, null);
        case FETCH_SESSION_TOKEN_FAILURE:
            return stateUpdate(state, false, {}, action.payload);
        default:
            return state;
    }
}
