import React, { Component } from 'react';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import ThankYou from '../ThankYou/ThankYou';
import { HashRouter as Router, Route } from 'react-router-dom';
import {connect} from 'react-redux';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>

            {/* stringify is helpful for testing that the inputs are being added to the reducer */}
            {/* <h1>{JSON.stringify(this.props.reduxState)}</h1> */}

          </header>
          <br/>
        </div>
        <Route exact path="/" component={Feeling}/>
        <Route exact path="/understanding" component={Understanding}/>
        <Route exact path="/support" component={Support}/>
        <Route exact path="/comments" component={Comments}/>
        <Route exact path="/review" component={Review}/>
        <Route exact path="/5" component={ThankYou}/>
        
      </Router>
    );
  }
}

const putReduxStateOnProps = (reduxState) => ({
  reduxState 
});
export default connect(putReduxStateOnProps)(App);


