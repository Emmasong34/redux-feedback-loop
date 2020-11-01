import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Feeling from '../Feeling/Feeling';

class Understanding extends Component {

    state = {
        understanding: 0
    }

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/support');
    }

    addUnderstanding = (event) => {
        console.log('in add understanding', this.state.understanding);
        event.preventDefault();
        this.props.dispatch({type: 'COLLECT_UNDERSTANDING', payload: this.state.understanding})
        // this.state.addFeeling(this.state.feeling);
    }

    handleChange = (event) => {
        this.setState({
            understanding: {
                understanding: [event.target.value]
            }
        })
    }


    render () {
        return (
            <form onClick={this.addUnderstanding}>
                <h2>How well are you understanding the content?</h2>
                <p>understanding?</p>
                <input className="understandingInput" type="number" placeholder="1-5" onChange={this.handleChange}></input>
                <button onClick={this.changePage}>Next</button>
            </form>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Understanding);