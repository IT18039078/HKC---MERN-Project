import * as actionType from './types';
import * as AuthServices from '../components/services/auth.services';


// action for register 


// register action
export const registerAction = (payload) =>(dispatch)=>{
    return AuthServices.resister(payload)
        .then(response =>{
            dispatch({
                type:actionType.REGISTER_SUCCESS,
                payload: response.data
            })
            
            return Promise.resolve(response.data)
        })
        .catch(error =>{
            dispatch({
                type:actionType.REGISTER_FAIL,
                payload: {err: error.message || "Registration failed"}
            })

            return Promise.reject(error)
        })
}


// loggin action 

export const loginAction = (userCredntial) => (dispatch) =>{
    return AuthServices.loginService(userCredntial)
        .then(data =>{
            dispatch({
                type: actionType.LOGIN_SUCCESS,
                payload:data
            })
            return Promise.resolve(data)
        })
        .catch(error=>{

            dispatch({
                type: actionType.LOGIN_FAIL,
                payload:{err: error.message || "Login Failed"}
            })
            return Promise.reject(error)
        })
}

// logout action
export const logoutAction = () => (dispatch) =>{
    const msg = AuthServices.logout()

    dispatch({
        type: actionType.LOGOUT,
    })

    return Promise.resolve(msg)
}