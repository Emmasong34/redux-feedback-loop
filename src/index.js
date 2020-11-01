import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const feeling = (state={}, action) => {
    if(action.type === 'COLLECT_FEELING'){
        return action.payload
    }
    return state;
}

const understanding = (state={}, action) => {
    if(action.type === 'COLLECT_UNDERSTANDING'){
        return action.payload
    }
    return state;
}

const support = (state={}, action) => {
    if(action.type === 'COLLECT_SUPPORT'){
        return action.payload
    }
    return state;
}

const comments = (state={}, action) => {
    if(action.type === 'COLLECT_COMMENTS'){
        return action.payload
    }
    return state;
}

//holds all reducers
const storeInstance = createStore(
    combineReducers({
        feeling,
        understanding, 
        support,
        comments
    }),    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
document.getElementById('root'));
registerServiceWorker();
