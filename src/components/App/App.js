import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import { HashRouter as Router, Route } from 'react-router-dom';

class App extends Component {




  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br/>
          {/* <Feeling /> */}
        </div>
        <Route exact path="/" component={Feeling}/>
        <Route exact path="/1" component={Understanding}/>
      </Router>
    );
  }
}

export default App;
