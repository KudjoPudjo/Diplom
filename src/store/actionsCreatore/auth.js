import {LOGIN_USER_ERROR,LOGIN_USER_SUCCESS} from "../actions/auth";
import axiosCustom from "../../axios/axiosCustom";



export function loginUserSuccess (payload){
    return {
        type:LOGIN_USER_SUCCESS,
        payload:payload
    }
}

export function loginUserError (error){
    return {
        type:LOGIN_USER_ERROR,
        payload:error
    }
}

export function loginUser(user){
    return async (dispatch)=>{
        try{
            const response = await axiosCustom.post(`/login`,user)
            const {data} = response

            dispatch(loginUserSuccess(data))
        }catch (e){
            dispatch(loginUserError(e.response.data.error))
        }
    }
}
export function registerUserSuccess (payload){
    return {
        type:LOGIN_USER_SUCCESS,
        payload:payload
    }
}

export function registerUserError (error){
    return {
        type:LOGIN_USER_ERROR,
        payload:error
    }
}
export function registerUser(user){
    return async (dispatch)=>{
        try{
            const response = await axiosCustom.post(`/register`,user)
            const {data} = response
            console.log(data)
            dispatch(registerUserSuccess(data.data))
        }catch (e){
            dispatch(registerUserError(e.response.data.error))
        }
    }
}