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
        this.changePage();
    }

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/5');
    }


    render () {
        return (
            <div className="reviewDiv">
            
                <p>Feeling: {this.props.reduxState.feedbackReducer.feeling} </p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding} </p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
           
            
            <button className="reviewButton" onClick={this.handleSubmit}>SUBMIT</button>
            </div>
          )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Review);