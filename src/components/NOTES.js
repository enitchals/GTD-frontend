import React, { Component } from 'react';
import { connect } from 'react-redux';
import OneNote from './OneNote';
import { newNote, deleteNote } from '../actions/noteActions';
import { store } from '../';

import './App.css';

class Notes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            newTitle: '',
            newNote: '',
            notes: this.props.notes
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
        this.props.newNote({
            note: this.state.newNote,
            title: this.state.newTitle,
            project: this.props.projectID,
            user: this.props.userID});
        this.setState({newNote: ''});
        this.setState({newTitle: ''});
    }

    render() {
        return (
            <div className = "Notes">
                <div className = "ListNotes">
                    <ul>{this.props.notes.map((note, i) =>
                        <div>
                            <OneNote note={note} key={i} index={i} />
                            <button onClick={this.props.deleteNote(`${note._id}`)}>Delete</button>
                        </div>
                        )}</ul>
                </div>
                <div className = "NewItem Container-Column">
                    <div className="NewItem-Header">add note:</div>
                    <input type="text" className="TextInput" onChange={this.changeHandlerTitle} placeholder="title" value={this.state.newTitle}/>
                    <textarea className="TextArea" onChange={this.changeHandlerNote} placeholder="note" value={this.state.newNote}/>
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

export default connect(mapStateToProps, { newNote, deleteNote })(Notes);