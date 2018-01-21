import React, { Component } from 'react';
import setState from 'react';
import axios from 'axios';
import { store } from '../'

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.signIn = this.signIn.bind(this);
        this.changeHandlerEmail = this.changeHandlerEmail.bind(this);
        this.changeHandlerPassword = this.changeHandlerPassword.bind(this);
        this.userDataHander = this.userDataHander.bind(this);
    }

    changeHandlerEmail = (event) => {
        this.setState({email: event.target.value});
    }

    changeHandlerPassword = (event) => {
        this.setState({password: event.target.value});
    }

    userDataHander = (data) => {
        store.dispatch({
            type: 'LOGIN',
            payload: data
        })
    };

    signIn() {
        axios.post('http://localhost:9001/login', {
            email: this.state.email,
            password: this.state.password,
        }).then((res) => {
            this.userDataHander(res.data);
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className = "SignIn">
                <input type = "text" onChange = {this.changeHandlerEmail} placeholder = "email" value = {this.state.email}/> <br/>
                <input type = "text" onChange = {this.changeHandlerPassword} placeholder = "password" value = {this.state.password} /> <br/>
                <button onClick = {this.signIn}>Sign In</button>
            </div>
        )
    }
}