import React, { Component } from 'react';
import {connect} from 'react-redux';


class Comments extends Component {

    state = {
        comments: ''
    }

    //change page function goes here?
    changePage = () => {
        console.log('changing pages');
        this.props.history.push('/review');
    }

    addComments = (event) => {
        // console.log('in add comments', this.state.comments);
        // event.preventDefault();
        this.props.dispatch({type: 'COLLECT_COMMENTS', payload: this.state.comments})
        this.changePage();
    }

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