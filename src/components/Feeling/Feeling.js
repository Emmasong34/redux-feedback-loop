import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    //routes to next page
    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/understanding');
        this.addFeeling();
    }

    //sends feeling input to reducer
    addFeeling = () => {
        console.log('in add feeling');
        this.props.dispatch({type: 'COLLECT_FEELING', payload: this.state.feeling})
    }
   
    //sets input value to feeling
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
                <input className="feelingInput" required="required" type="number" onChange={this.handleChange}></input>
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