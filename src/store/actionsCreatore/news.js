import {
    GET_NEWS_SUCCESS,
    DELETE_NEWS_SUCCESS,
    ADD_NEW_NEWS_SUCCESS,
    GET_NEWS_ERROR,
    ADD_NEW_NEWS_ERROR
} from "../actions/news"
import axiosCustom from "../../axios/axiosCustom";


export function getNewsSuccess (list){
    return {
        type:GET_NEWS_SUCCESS,
        payload:list
    }
}

export function getNewsError (error){
    return {
        type:GET_NEWS_ERROR,
        payload:error
    }
}


export function getNews(){
    return async (dispatch)=>{
        try{
            const response = await axiosCustom("/news")
            const {list} = response

            dispatch(getNewsSuccess(list))
        }
        catch(error){
            dispatch(getNewsSuccess(error))
        }
    }
}

export function addNewsSuccess (list){
    return {
        type:ADD_NEW_NEWS_SUCCESS,
        payload:list
    }
}

export function addNewsError (error){
    return {
        type:ADD_NEW_NEWS_ERROR,
        payload:error
    }
}


export function addNews(news){
    return async (dispatch)=>{
        try{
            const response = await axiosCustom.post("/news",news)
            const {list} = response

            dispatch(addNewsSuccess(list))
        }
        catch(error){
            dispatch(addNewsError(error))
        }
    }
}

export function deleteNewsSuccess (idNews){
    return {
        type:ADD_NEW_NEWS_SUCCESS,
        payload:idNews
    }
}

export function deleteNewsError (error){
    return {
        type:ADD_NEW_NEWS_ERROR,
        payload:error
    }
}

export function deleteNews(id){
    return async (dispatch)=>{
        try{
            const response = await axiosCustom.delete(`/news/${id}`)
            const {idNews} = response

            dispatch(deleteNewsSuccess(idNews))
        }
        catch(error){
            dispatch(deleteNewsError(error))
        }
    }
}