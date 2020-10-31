import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';


const feedback = (state=[], action) => {
    if(action.type === 'COLLECT_FEEDBACK'){
        return action.payload
    }
    return state;
}

//holds all reducers
const storeInstance = createStore(
    combineReducers({
        feedback
    }),    
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, 
document.getElementById('root'));
registerServiceWorker();
