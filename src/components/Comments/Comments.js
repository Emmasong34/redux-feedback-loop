import React, { Component } from 'react';
import {connect} from 'react-redux';


class Comments extends Component {

    //allows comment input to be left empty
    state = {
        comments: ''
    }

    //routes to next page
    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/review');
    }

      //routes one page back
      changePageBack = () => {
        console.log('going back one page');
        this.props.history.push('/support');
    }

    //sends comments input to reducer
    addComments = (event) => {
        console.log('in add comments');
        this.props.dispatch({type: 'COLLECT_COMMENTS', payload: this.state.comments})
        this.changePage();
    }

    //sets input value to comments
    handleChange = (event) => {
        this.setState({
                comments: event.target.value
        })
    }

    render () {
        return (
            
            <div className="commentsDiv">
                <h2>Any comments you want to leave?</h2>
                    <input className="commentsInput" type="text" onChange={this.handleChange}></input>
                <br></br>
                    <button onClick={this.changePageBack}>Back</button>
                    <button onClick={this.addComments}>Next</button>
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Comments);