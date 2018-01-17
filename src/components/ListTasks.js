import React, { Component } from 'react';
import OneTask from './OneTask';
import './App.css';


const ListTasks = (props) => {
    const tasks = props.tasks.map((task, i) => <OneTask task={task} key={i} index={i} />);
    return (
        <div>
            <h1> list of tasks</h1>
            <ul>{tasks}</ul>
        </div>
    )
}

export default ListTasks;