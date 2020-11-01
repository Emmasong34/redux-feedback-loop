import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

const feedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: ''
    }

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

// const understanding = (state={}, action) => {
//     if(action.type === 'COLLECT_UNDERSTANDING'){
//         return action.payload
//     }
//     return state;
// }

// const support = (state={}, action) => {
//     if(action.type === 'COLLECT_SUPPORT'){
//         return action.payload
//     }
//     return state;
// }

// const comments = (state={}, action) => {
//     if(action.type === 'COLLECT_COMMENTS'){
//         return action.payload
//     }
//     return state;
// }

//holds all reducers
const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
        // understanding, 
        // support,
        // comments
    }),    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
document.getElementById('root'));
registerServiceWorker();
