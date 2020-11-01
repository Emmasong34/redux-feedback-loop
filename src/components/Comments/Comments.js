import React, { Component } from 'react';
import {connect} from 'react-redux';

class Comments extends Component {

    state = {
        comments: ''
    }

    //change page function goes here?

    addComments = (event) => {
        console.log('in add comments', this.state.comments);
        event.preventDefault();
        this.props.dispatch({type: 'COLLECT_COMMENTS', payload: this.state.comments})
    }

    handleChange = (event) => {
        this.setState({
            comments: {
                comments: [event.target.value]
            }
        })
    }

    render () {
        return (

            <form onClick={this.addComments}>
                <h2>Any comments you want to leave?</h2>
                <p>comments:</p>
                <input className="commentsInput" type="text" placeholder="comments" onChange={this.handleChange}></input>
                <button>Next</button>
            </form>
        )
    }
}


const putReduxStateOnProps = (reduxState) => ({
    reduxState 
  });
  export default connect(putReduxStateOnProps)(Comments);