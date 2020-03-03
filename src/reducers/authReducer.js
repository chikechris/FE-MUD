import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    LOGIN_FAIL,
    LOGIN_SUCCESS,
    AUTH_ERROR,
    LOGOUT
} from '../actions/types';

const initialState = {
    user: '',
    loggingIn: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case REGISTER_SUCCESS:
            return {
                ...state,
                loggingIn: false
            };
        default:
            return state;
    }
};
