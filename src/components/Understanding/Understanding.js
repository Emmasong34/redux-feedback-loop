import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Feeling from '../Feeling/Feeling';

class Understanding extends Component {

    // state = {
    //     understanding: 0
    // }

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/support');
        this.addUnderstanding();
    }

    addUnderstanding = (event) => {
        // console.log('in add understanding', this.state.understanding);
        // event.preventDefault();
        this.props.dispatch({type: 'COLLECT_UNDERSTANDING', payload: this.state.understanding})
        // this.state.addFeeling(this.state.feeling);
        // this.changePage();
    }

    handleChange = (event) => {
        this.setState({
                understanding: event.target.value
        })
    }


    render () {
        return (
            <div className="understandingDiv">
                <form onSubmit={this.changePage}>
                <h2>How well are you understanding the content?</h2>
                <p>understanding?</p>
                <input className="understandingInput" required="required" type="number" placeholder="1-5" onChange={this.handleChange}></input>
                <button>Next</button>
                </form>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Understanding);