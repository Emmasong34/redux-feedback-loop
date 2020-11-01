import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import { HashRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {

componentDidMount = () => {
  this.getFeedback();
}

getFeedback = () => {
  axios.get('/feedback').then((response) => {
    console.log('in get feedback', response.data);
    // this.props.dispatch({type: 'COLLECT_FEEDBACK', payload: response.data})
  }).catch((error) => {
    console.log('error', error);
  })
}


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
            <h1>{JSON.stringify(this.props.reduxState)}</h1>
          </header>
          <br/>
          {/* <Feeling /> */}
        </div>
        <Route exact path="/feeling" component={Feeling}/>
        <Route exact path="/understanding" component={Understanding}/>
        <Route exact path="/support" component={Support}/>
        <Route exact path="/comments" component={Comments}/>
        <Route exact path="/review" component={Review}/>
        
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState 
});
export default connect(putReduxStateOnProps)(App);


