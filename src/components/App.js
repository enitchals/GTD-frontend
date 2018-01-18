import React, { Component } from 'react';
import NewNote from './NewNote';
import NewEvent from './NewEvent';
import NewTask from './NewTask';
import NewProject from './NewProject';
import ProjectDetail from './ProjectDetail';
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import axios from 'axios';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userID: '',
      tasks: [],
      notes: [],
      events: [],
      projects: []
    }
  }

  componentDidMount() {
    axios.get(`http://localhost:9001/notes/${this.state.userID}`)
    .then(res => {
      this.setState({
        notes: res.data.notes,
      });
    }).catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <Home/>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
      userID: state.userID,
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