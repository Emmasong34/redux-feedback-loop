import React, { Component } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

class Review extends Component {


    //axios post request sends data to database
    handleSubmit = () => {
        console.log('clicked submit for axios post request')
        axios.post('/feedback', this.props.reduxState.feedbackReducer).then((response) => {
        }).catch((error) => {
            console.log(error);
        })
        this.changePage();
    }

    //routes to next page
    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/5');
    }

       //routes one page back
       changePageBack = () => {
        console.log('going back one page');
        this.props.history.push('/comments');
    }


    render () {
        return (
            <div className="reviewDiv">
            
                <p>Feeling: {this.props.reduxState.feedbackReducer.feeling} </p>
                <p>Understanding: {this.props.reduxState.feedbackReducer.understanding} </p>
                <p>Support: {this.props.reduxState.feedbackReducer.support}</p>
                <p>Comments: {this.props.reduxState.feedbackReducer.comments}</p>
           
            
            <button className="reviewButton" onClick={this.handleSubmit}>SUBMIT</button>
            <br></br>
            <button onClick={this.changePageBack}>Back</button>
            </div>
          )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Review);