import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {

    handleSubmit = () => {
        console.log('clicked submit for axios post request')
        axios.post('/feedback', this.props.reduxState.feedbackReducer).then((response) => {
            // this.props.getFeedback();
        }).catch((error) => {
            console.log(error);
        })
    }


    render () {
        return (
            <div>
            <ul>
                <li>Feeling: {this.props.reduxState.feedbackReducer.feeling} </li>
                <li>Understanding: {this.props.reduxState.feedbackReducer.understanding} </li>
                <li>Support: {this.props.reduxState.feedbackReducer.support}</li>
                <li>Comments: {this.props.reduxState.feedbackReducer.comments}</li>
            </ul>
            
            <button onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Review);