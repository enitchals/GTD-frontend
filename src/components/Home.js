import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { store } from '../';
import './App.css';

import ListTasks from './ListTasks';
import ListNotes from './ListNotes';
import ListEvents from './ListEvents';
import ListProjects from './ListProjects';


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nextActions: [],
            projects: [],
        }
    }

    componentDidMount() {
        //const token = this.props.navigation.state.params.token;
        axios.get(`http://localhost:9001/nextActions/${this.props.userID}`)
        .then(res => {
            this.setState({
                nextActions: res.data,
            });
        }).catch(err => console.log(err));

        axios.get(`http://localhost:9001/projects/${this.props.userID}`)
        .then(res => {
            this.setState({
                projects: res.data,
            });
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div className = "Home">
                <h1>Next Actions:</h1>
                <ListTasks tasks = {this.state.nextActions}/>
                <h1>Project List:</h1>
                <ListProjects projects={this.state.projects}/>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
    }
}

export default connect(mapStateToProps, null)(Home);