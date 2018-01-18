import React, { Component } from 'react';
import { connect } from 'react-redux';
import { store } from '../';

import './App.css';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            notes: this.props.notes
            newTitle: '',
            newNote: ''
        }
        this.changeHandlerNote = this.changeHandlerNote.bind(this);
        this.changeHandlerTitle = this.changeHandlerTitle.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandlerNote = (event) => {
        this.setState({newNote: event.target.value});
    }
    changeHandlerTitle = (event) => {
        this.setState({newTitle: event.target.value});
    }
    submitHandler = () => {
        this.props.newNote({note: this.state.newNote, title: this.state.newTitle, project: this.props.projectID, user: this.state.userID})
        this.setState({newNote: ''});
        this.setState({newTitle: ''});
    }        

    render() {
        return (
            <div className = "newNote">
                <input type="text" onChange={this.changeHandlerTitle} placeholder="title" value={this.state.newTitle}/><br/>
                <textarea className="textarea" onChange={this.changeHandlerNote} placeholder="note" value={this.state.newNote}/><br/>
                <button onClick={this.submitHandler}>Save</button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
        notes: state.notes
    }
}

export default connect(mapStateToProps, { newNote })(NewNote);