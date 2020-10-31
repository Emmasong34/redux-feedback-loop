import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

    render () {
        return (
            <div>
                <h2>Any comments you want to leave?</h2>
                <p>comments:</p>
                <input type="text" placeholder="comments"></input>
                <button>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Comments);