import React, { Component } from 'react';
import {connect} from 'react-redux';

class Feeling extends Component {

    // state = {
    //     feeling: 0
    // }

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/understanding');
    }

    addFeeling = () => {
        // console.log('in add feeling', this.state.feeling);
        this.props.dispatch({type: 'COLLECT_FEELING', payload: this.state.feeling})
        // this.state.addFeeling(this.state.feeling);
        this.changePage();
    }
    //make onchange function

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
        });
    }

    render () {
        return (
            <div>
                <h2>How are you feeling today?</h2>
                <p>feeling?</p>
            
                <input className="feelingInput" type="number" placeholder="1-5" onChange={this.handleChange}></input>
                <button onClick={this.addFeeling} 
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