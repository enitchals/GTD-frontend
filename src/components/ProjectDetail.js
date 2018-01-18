import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { store } from '../';
import './App.css';

import ListTasks from './ListTasks';
import ListNotes from './ListNotes';
import ListEvents from './ListEvents';
import OneProject from './OneProject';

import NewTask from './NewTask';
import NewNote from './NewNote';
import NewEvent from './NewEvent';


class ProjectDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projectID: '',
            project: '',
            memo: '',
            tasks: [],
            notes: [],
            events: []
        }
    }

    componentDidMount() {
        const projectID = this.props.match.params.projectID;
        this.setState({ projectID: this.props.match.params.projectID });
        //this.setState({
            //projectID: this.props.match.params.projectID,
        //});
        //const token = this.props.navigation.state.params.token;
        axios.get(`http://localhost:9001/project/${projectID}`/*, {
            headers: {
                authorization: token,
            }
        }*/).then((res) => {
            this.setState({
                project: res.data.project,
                memo: res.data.memo,
            });
        }).catch(err => {
            console.log(err);
        });
        axios.get(`http://localhost:9001/project/notes/${projectID}`)
        .then(res => {
            this.setState({
                notes: res.data,
            });
        }).catch(err => console.log(err));
        axios.get(`http://localhost:9001/project/tasks/${projectID}`)
        .then(res => {
            this.setState({
                tasks: res.data,
            });
        }).catch(err => console.log(err));
        axios.get(`http://localhost:9001/project/events/${projectID}`)
        .then(res => {
            this.setState({
                events: res.data,
            });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "ProjectDetail">
                <OneProject project = {this.state.project} memo = {this.state.memo}/>
                <ListNotes notes = {this.state.notes} projectID={this.state.projectID}/>
                <ListTasks tasks = {this.state.tasks} projectID={this.state.projectID} status="activeProject"/>
                <ListEvents events = {this.state.events} projectID={this.state.projectID}/>

                <h1>TESTING:</h1>
                <NewNote />
                <NewTask />
                <NewEvent />
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