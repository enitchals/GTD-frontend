import React, { Component } from 'react';
import NewNote from './NewNote';
import NewEvent from './NewEvent';
import NewTask from './NewTask';
import NewProject from './NewProject';
import ProjectDetail from './ProjectDetail';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:9001/notes/${this.props.userID}`)
    .then(res => {
      this.setState({
        notes: res.data.notes,
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <ProjectDetail projectID="5a5fcd187aea3626c8b6616b"/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      userID: state.userID,
      tasks: state.tasks,
      notes: state.notes,
      events: state.events,
      projects: state.projects
  }
}

export default App;


/*
        <h1>new task:</h1>
        <NewTask />
        <h1>new note:</h1>
        <NewNote />
        <h1>new event:</h1>
        <NewEvent />
        <h1>new project:</h1>
        <NewProject />
        */