import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducer/rootReducer'
import composeEnhancers from './composeEnchancers';

export default createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(reduxThunk))
);
