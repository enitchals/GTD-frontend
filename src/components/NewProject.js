import React, { Component } from 'react';
import { newProject } from '../actions/projectActions';
import { connect } from 'react-redux';
import { store } from '../';

import './App.css';

class NewProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            newProject: '',
            newMemo: '',
        }
        this.changeHandlerProject = this.changeHandlerProject.bind(this);
        this.changeHandlerMemo = this.changeHandlerMemo.bind(this);        
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandlerProject = (event) => {
        this.setState({newProject: event.target.value});
    }
    changeHandlerMemo = (event) => {
        this.setState({newMemo: event.target.value});
    }
    submitHandler = () => {
        this.props.newProject({project: this.state.newProject, memo: this.state.newMemo, user: this.state.userID})
        this.setState({newProject: ''});
        this.setState({newMemo: ''});        
    }

    render() {
        return (
            <div className = "newProject">
                <input type="text" onChange={this.changeHandlerProject} placeholder="new project" value={this.state.newProject}/><br/>
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

export default connect(mapStateToProps, { newProject })(NewProject);