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
                  <p></p>
                <input placeholder=""></input>
                <button onClick={this.changePage}>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Support);