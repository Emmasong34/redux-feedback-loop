import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    // state = {
    //     feeling: 0
    // }

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/understanding');
        this.addFeeling();
    }

    addFeeling = () => {
        // console.log('in add feeling', this.state.feeling);
        this.props.dispatch({type: 'COLLECT_FEELING', payload: this.state.feeling})
        // this.state.addFeeling(this.state.feeling);
        // this.changePage();
    }
    //make onchange function

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    render () {
        return (
            <div className="feelingDiv">
                <form onSubmit={this.changePage}>
                <h2>How are you feeling today?</h2>
                <p>feeling?</p>
                <input className="feelingInput" required="required" type="number" placeholder="1-5" onChange={this.handleChange}></input>
                <button>Next</button>
                </form>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Feeling);