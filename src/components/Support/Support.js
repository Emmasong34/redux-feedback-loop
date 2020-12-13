import React, { Component } from 'react';
import {connect} from 'react-redux';

class Support extends Component {

    //routes to next page
    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/comments');
        this.addSupport();
    }

      //routes one page back
      changePageBack = () => {
        console.log('going back one page');
        this.props.history.push('/understanding');
    }

    //sends support input to reducer
    addSupport = (event) => {
        console.log('in add support');
        this.props.dispatch({type: 'COLLECT_SUPPORT', payload: this.state.support})
    }

    //sets input value to support
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
                        <input className="supportInput" required="required" type="text" onChange={this.handleChange}></input>
                    <br></br>
                        <button onClick={this.changePageBack}>Back</button>
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