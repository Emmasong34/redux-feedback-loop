import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/understanding');
        console.log(this.props.feedback)
    }


    render () {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <p>feeling?</p>
                <input className="feelingInput" type="number" placeholder="1-5"></input>
                <button onClick={this.changePage} 
                // if {feelingInput === '' (alert('All fields must be completed.'))}
                >Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Feeling);