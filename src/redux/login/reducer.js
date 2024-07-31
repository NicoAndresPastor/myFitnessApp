
import {LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE} from './types';

const initialState = {
    user: null,
    error: null,
    isLoading: false,
};


const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST: {
            return {
                ...state,
                isLoading: true,
            }
        }
        case LOGIN_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                isLoading: false,
            }
        }
        case LOGIN_FAILURE: {
            return {
                ...state,
                error: action.payload,
                isLoading: false,
            }
        }

        default:
            return state;
    }
};

export default loginReducer;