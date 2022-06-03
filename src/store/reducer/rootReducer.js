import { combineReducers } from 'redux';
import authReducer from "./reducers/auth";
import newsReducer from "./reducers/news";


export default combineReducers({
    auth: authReducer,
    news: newsReducer,
});