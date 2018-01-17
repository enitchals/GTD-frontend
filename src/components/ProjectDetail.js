import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { store } from '../';
import './App.css';

import ListTasks from './ListTasks';
import ListNotes from './ListNotes';
import ListEvents from './ListEvents';
import OneProject from './OneProject';


class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            project: '',
            memo: '',
            tasks: [],
            notes: [],
            events: []
        }
    }

    componentDidMount() {
        //const token = this.props.navigation.state.params.token;
        axios.get(`http://localhost:9001/project/${this.props.projectID}`/*, {
            headers: {
                authorization: token,
            }
        }*/).then((res) => {
            this.setState({
                project: res.data.project,
                memo: res.data.memo,
                tasks: res.data.tasks,
                //notes: res.data.notes,
                events: res.data.events,
            });
        }).catch(err => {
            console.log(err);
        });
        axios.get(`http://localhost:9001/project/notes/${this.props.projectID}`)
        .then(res => {
            this.setState({
                notes: res.data,
            });
        }).catch(err => console.log(err));
        axios.get(`http://localhost:9001/project/tasks/${this.props.projectID}`)
        .then(res => {
            this.setState({
                tasks: res.data,
            });
        }).catch(err => console.log(err));
        axios.get(`http://localhost:9001/project/events/${this.props.projectID}`)
        .then(res => {
            this.setState({
                events: res.data,
            });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "ProjectDetail">
                <h1>{this.props.projectID}</h1>
                <OneProject project = {this.state.project} memo = {this.state.memo}/>
                <ListNotes notes = {this.state.notes}/>
                <ListTasks tasks = {this.state.tasks}/>
                <ListEvents events = {this.state.events}/>
            </div>
        );
    };
}

/*const mapStateToProps = (state) => {
    return {
        userID: state.userID,
        tasks: state.tasks.filter(task => task.project == this.props.projectID),
        notes: state.notes.filter(note => note.project == this.props.projectID),
        events: state.events.filter(anEvent => anEvent.project == this.props.projectID)
    }
}*/

export default ProjectDetail;
//export default connect(mapStateToProps, null)(ProjectDetail);