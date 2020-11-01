import React, { Component } from 'react';
import {connect} from 'react-redux';


class ThankYou extends Component {


    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/feeling');
    }


    render () {
        return (
            <div>
            <button onClick={this.changePage}>Leave New Feedback</button>
            </div>
          )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(ThankYou);