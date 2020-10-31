import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

    render () {
        return (
            <div>
                  <p></p>
                <input placeholder=""></input>
                <button>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Support);