import React, { Component } from 'react';
import { newTask } from '../actions/taskActions';
import { connect } from 'react-redux';
import { store } from '../';

import './App.css';

class NewTask extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            newTask: '',
            newMemo: ''
        }
        this.changeHandlerTask = this.changeHandlerTask.bind(this);
        this.changeHandlerMemo = this.changeHandlerMemo.bind(this);        
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandlerTask = (event) => {
        this.setState({newTask: event.target.value});
    }
    changeHandlerMemo = (event) => {
        this.setState({newMemo: event.target.value});
    }
    submitHandler = () => {
        this.props.newTask({task: this.state.newTask, memo: this.state.newMemo, project: this.props.projectID, status: this.props.status, user: this.state.userID})
        this.setState({newTask: ''});
        this.setState({newMemo: ''});
    }

    render() {
        return (
            <div className = "newTask">
                <input type="text" onChange={this.changeHandlerTask} placeholder="new task" value={this.state.newTask}/><br/>
                <textarea className="textarea" onChange={this.changeHandlerMemo} placeholder="note" value={this.state.newMemo}/><br/>
                <button onClick={this.submitHandler}>Save</button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
    }
}

export default connect(mapStateToProps, { newTask })(NewTask);