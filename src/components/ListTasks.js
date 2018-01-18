import React, { Component } from 'react';
import OneTask from './OneTask';
import NewTask from './NewTask';
import './App.css';


const ListTasks = (props) => {
    const tasks = props.tasks.map((task, i) => <OneTask task={task} key={i} index={i} />);
    return (
        <div>
            <h1> list of tasks</h1>
            <ul>{tasks}</ul>
            <NewTask projectID={props.projectID} status={props.status}/>
        </div>
    )
}

export default ListTasks;