import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

    // state = {
    //     support: 0
    // }

    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/comments');
        this.addSupport();
    }

    addSupport = (event) => {
        // console.log('in add support', this.state.support);
        // event.preventDefault();
        this.props.dispatch({type: 'COLLECT_SUPPORT', payload: this.state.support})
        // this.changePage();
    }

    handleChange = (event) => {
        this.setState({
                support: event.target.value
        })
    }

    render () {
        return (

            <div className="supportDiv">
                <form onSubmit={this.changePage}>
                <h2>How well are you being supported</h2>
                <p>support?</p>
                <input className="supportInput" required="required" type="number" onChange={this.handleChange}></input>
                <button>Next</button>
                </form>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Support);