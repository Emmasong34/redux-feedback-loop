import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/comments');
    }


    render () {
        return (

            <div>
                  <h2>How well are you being supported</h2>
                  <p>support?</p>
                <input type="number" placeholder="1-5"></input>
                <button onClick={this.changePage}>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Support);