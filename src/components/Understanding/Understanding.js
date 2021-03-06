import React, { Component } from 'react';
import {connect} from 'react-redux';
// import Feeling from '../Feeling/Feeling';

class Understanding extends Component {

    //routes to next page
    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/support');
        this.addUnderstanding();
    }

    //routes one page back
    changePageBack = () => {
        console.log('going back one page');
        this.props.history.push('/');
    }

    //sends understanding input to reducer
    addUnderstanding = (event) => {
        console.log('in add understanding');
        this.props.dispatch({type: 'COLLECT_UNDERSTANDING', payload: this.state.understanding})
    }

    //sets input value to understanding
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
                        <input className="understandingInput" required="required" type="text" onChange={this.handleChange}></input>
                    <br></br>
                        <button className="backUnderstanding" onClick={this.changePageBack}>Back</button>
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