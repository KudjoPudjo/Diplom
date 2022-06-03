import {ADD_NEW_NEWS_SUCCESS, DELETE_NEWS_SUCCESS, GET_NEWS_SUCCESS} from "../../actions/news";

const initialState = {

}

function newsReducer (state=initialState,action){
    switch (action.type){
        case GET_NEWS_SUCCESS:{
            return state
        }
        case ADD_NEW_NEWS_SUCCESS:{
            return state
        }
        case DELETE_NEWS_SUCCESS :{
            return state
        }
        default:{
            return state
        }
    }
}

export default newsReducer