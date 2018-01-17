import React, { Component } from 'react';
import OneProject from './OneProject';
import './App.css';

const ListProjects = (props) => {
    const projects = props.projects.map((project, i) => <OneProject project={project} key={i} index={i} />);
    return(
        <div>
            <h1> list of projects</h1>
            <ul>{projects}</ul>
        </div>
    )
}

export default ListProjects;