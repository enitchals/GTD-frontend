import React, { Component } from 'react';
import OneEvent from './OneEvent';
import NewEvent from './NewEvent';
import './App.css';

const ListEvents = (props) => {
    const events = props.events.map((oneEvent, i) => <OneEvent oneEvent={oneEvent} key={i} index={i} />);
    return(
        <div>
            <h1> list of events</h1>
            <ul>{events}</ul>
            <NewEvent projectID={props.projectID}/>
        </div>
    )
}


export default ListEvents;