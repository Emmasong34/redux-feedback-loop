import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Feeling from '../Feeling/Feeling';

class Understanding extends Component {

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/support');
    }


    render () {
        return (
            <div>
                  <h2>How well are you understanding the content?</h2>
                  <p>understanding?</p>
                <input placeholder="1-5"></input>
                <button onClick={this.changePage}>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Understanding);