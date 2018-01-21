import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { store } from '../';
import './App.css';

import Tasks from './Tasks';
import Notes from './Notes';
import Events from './Events';
import OneProject from './OneProject';

import NewTask from './NewTask';
import NewNote from './NewNote';
import NewEvent from './NewEvent';

import Header from './Header';

import { deleteProject } from '../actions/projectActions';


class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectID: '',
            project: '',
            memo: '',
            tasks: [],
            notes: [],
            events: [],
            projects: []
        }
    }

    delete = () => {
        this.props.deleteProject(`${this.props.match.params.projectID}`)
    }

    render() {
        return (
            <div className = "Container-Column Home">
                <div className = "Container-Row Header"><Header /></div>
                <div className="Container-Row Box ProjectDetails">
                    <div className = "Container-Column">
                        <div className="Section-Header">{this.state.project}</div>
                        <div className="Project-Text">{this.state.memo}</div>
                        <button onClick={this.delete}>Delete Project</button>
                    </div>
                </div>
                <div className = "Container-Row">
                    <div className="Container-Column Box ProjectTimeline">
                        <div className="Section-Header">Timeline</div>
                        <Events events={this.state.events} projectID={this.props.match.params.projectID}/>
                    </div>
                    <div className = "Container-Column Box ProjectTasks">
                        <div className = "Section-Header">Tasks</div>
                        <Tasks tasks={this.state.tasks} userID={this.state.userID} projectID={this.props.match.params.projectID}/>
                    </div>
                    <div className = "Container-Column Box ProjectNotes">
                        <div className = "Section-Header">Notes</div>
                        <Notes notes={this.state.notes} userID={this.state.userID} projectID={this.props.match.params.projectID}/>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
        tasks: [],
        notes: [],
        projects: [],
        events: []
    }
}


export default connect(mapStateToProps, { deleteProject })(ProjectDetail);