import * as actionType from './types';
const initialState = {isLoggedIn: false, user: null}

// create reducer
export default function rootReducer (state = initialState, action){
    const {type, payload} = action;
    // switch case for different actions types 
    switch(type){
        case actionType.REGISTER_SUCCESS:
            return{
                ...state,
                isLoggedIn: true
            }
        case actionType.REGISTER_FAIL:
            return{
                ...state,
                isLoggedIn: false
            }
        case actionType.LOGIN_SUCCESS:
            return{
                ...state,
                isLoggedIn: true,
                user: payload.user
            }
        case actionType.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                user: null
            }
        case actionType.LOGIN_FAIL:
            return{
                ...state,
                isLoggedIn: false,
                user: null 
            }
        default:
            return state
    }
}