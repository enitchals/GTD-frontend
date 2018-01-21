import React, { Component } from 'react';
import { newProject } from '../actions/projectActions';
import { connect } from 'react-redux';
import { store } from '../';
import OneProject from './OneProject';


import './App.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: '',
            newProject: '',
            newMemo: '',
            projects: [],
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
        this.props.newProject({project: this.state.newProject, memo: this.state.newMemo, user: this.props.userID})
        this.setState({newProject: ''});
        this.setState({newMemo: ''});        
    }

    render() {
        return (
            <div className = "Projects">
                <div className = "listProjects">
                    <ul>{this.props.projects.map((project, i) => <OneProject project={project} key={i} index={i} />)}</ul>
                </div>
                <div className = "NewItem Container-Column">
                    <div className="NewItem-Header">add project:</div>
                    <input type="text" className="TextInput" onChange={this.changeHandlerProject} placeholder="new project" value={this.state.newProject}/>
                    <textarea className="TextArea" onChange={this.changeHandlerMemo} placeholder="note" value={this.state.newMemo}/>
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

export default connect(mapStateToProps, { newProject })(Projects);