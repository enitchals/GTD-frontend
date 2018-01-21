import React, { Component } from 'react';
import { newTask } from '../actions/taskActions';
import { connect } from 'react-redux';
import { store } from '../';
import OneTask from './OneTask';

import './App.css';

class Tasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            newTask: '',
            newMemo: '',
            tasks: this.props.tasks
        }
        this.changeHandlerTask = this.changeHandlerTask.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandlerTask = (event) => {
        this.setState({newTask: event.target.value});
    }
    submitHandler = () => {
        this.props.newTask({task: this.state.newTask, memo: this.state.newMemo, project: this.props.projectID, status: this.props.status, user: this.props.userID})
        this.setState({newTask: ''});
    }

    render() {
        return (
            <div className = "Tasks Container-Column">
                <div className = "ListTasks">
                    <ul>{this.props.tasks.map((task, i) => <OneTask task={task} key={i} index={i} />)}</ul>
                </div>
                <div className = "NewItem Container-Column">
                    <div className="NewItem-Header">add task:</div>
                    <input type="text" className="TextInput" onChange={this.changeHandlerTask} placeholder="new task" value={this.state.newTask}/>
                    <button onClick={this.submitHandler}>Save</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
    }
}

export default connect(mapStateToProps, { newTask })(Tasks);