import React, { Component } from 'react';
import {connect} from 'react-redux';

class Review extends Component {

    render () {
        return (
            <ul>
                <li>Feeling: {this.props.reduxState.feedbackReducer.feeling} </li>
                <li>Understanding: {this.props.reduxState.feedbackReducer.understanding} </li>
                <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
                <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
            </ul>
          
          )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Review);