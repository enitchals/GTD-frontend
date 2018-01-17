import React, { Component } from 'react';
import NavBar from './NavBar.js';

import './App.css';

export default class Header extends Component {
    render() {
        return (
            <div>
                <h1>Getting Things Done!</h1>
                <NavBar/>
            </div>
        );
    };
}