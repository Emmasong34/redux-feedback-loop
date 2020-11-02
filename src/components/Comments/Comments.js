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
                <p>comments:</p>
                <input className="commentsInput" type="text" placeholder="comments" onChange={this.handleChange}></input>
                <button onClick={this.addComments}>Next</button>
            
            
            </div>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Comments);