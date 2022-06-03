import {LOGIN_USER_ERROR, LOGIN_USER_SUCCESS, REGISTER_USER_ERROR, REGISTER_USER_SUCCESS} from "../../actions/auth";

const initialState = {
    userId:'',
    login:"",
    password:'',
    userRole:'',
    errors:null
}


export default function authReducer(state=initialState,action){
    switch (action.type){
        case LOGIN_USER_SUCCESS : {
            return {userId:action.payload.data._id,...action.payload.data}
        }
        case LOGIN_USER_ERROR : {
            return {...state}
        }
        case REGISTER_USER_SUCCESS : {
            return {userId:action.payload.data._id,...action.payload.data}
        }
        case REGISTER_USER_ERROR : {
            return {...state}
        }
        default :{
            return state
        }
    }
}