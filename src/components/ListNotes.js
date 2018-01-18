import React, { Component } from 'react';
import OneNote from './OneNote';
import NewNote from './NewNote';
import './App.css';

const ListNotes = (props) => {
    const notes = props.notes.map((note, i) => <OneNote note={note} key={i} index={i} />);
    return(
        <div>
            <h1> list of notes</h1>
            <ul>{notes}</ul>
            <NewNote projectID={props.projectID}/>
        </div>
    )
}

export default ListNotes;