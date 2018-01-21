import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { store } from '../';
import './App.css';

import Tasks from './Tasks';
import Notes from './Notes';
import Events from './Events';
import Projects from './Projects';
import Header from './Header';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextActions: [],
            projects: [],
            events: [],
        }
    }

    /*
        <h1>Next Actions:</h1>
        <Tasks tasks = {this.state.nextActions} userID = {this.state.userID}/>
        <h1>Project List:</h1>
        <Projects projects={this.state.projects} userID = {this.state.userID}/>
                */
    render() {
        return (
            <div className = "Container-Column Home">
                <Header/>
                <div className = "Container-Row">
                    <div className = "Container-Column Box NextActions">
                        <div className = "Section-Header">Next Actions</div>
                        <Tasks tasks={this.state.nextActions} userID={this.state.userID} status={"nextActions"}/>
                    </div>
                    <div className = "Container-Column Box CurrentProjects">
                        <div className = "Section-Header">Project List</div>
                        <Projects projects={this.state.projects} userID={this.state.userID}/>
                    </div>
                    <div className = "Container-Column Box Calendar">
                        <div className = "Section-Header">Calendar</div>
                        <Events events={this.state.events} userID={this.state.userID}/>
                    </div>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
        tasks: state.tasks,
        notes: state.notes,
        projects: state.projects,
        events: state.events
    }
}

export default connect(mapStateToProps, null)(Home);