import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { applyMiddleware } from 'redux';
import logger from 'redux-logger';

//guide for object being created for database
// const feedback = {
//     feeling: '',
//     understanding: '',
//     support: '',
//     comments: ''
//     }

const feedbackReducer = (state={}, action) => {
    if(action.type === 'COLLECT_FEELING'){
        return {
            ...state,
            feeling: action.payload
        }
    }
    else if(action.type === 'COLLECT_UNDERSTANDING'){
        return {
            ...state,
            understanding: action.payload
        }
    }
    else if(action.type === 'COLLECT_SUPPORT'){
        return {
            ...state,
            support: action.payload
        }
    }
    else if(action.type === 'COLLECT_COMMENTS'){
        return {
            ...state,
            comments: action.payload
        }
    }
    return state;
}


//holds all reducers
const storeInstance = createStore(
        combineReducers({
        feedbackReducer
    }),    
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
document.getElementById('root'));
registerServiceWorker();
