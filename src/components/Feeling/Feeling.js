import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    changePage = () => {
        console.log('changing pages');
        // this.props.history.push('/understanding');
    }


    render () {
        return (
            <div>
                <p>How are you feeling today?</p>
                <input placeholder="1-5"></input>
                <button onClick={this.changePage}>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Feeling);