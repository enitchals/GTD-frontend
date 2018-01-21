import React, { Component } from 'react';
import NavBar from './NavBar.js';
import './App.css';

export default class Header extends Component {
    render() {
        return (
            <div className="Header">
                <h1>GETTING THINGS DONE</h1>
                <NavBar/>
            </div>
        );
    };
}