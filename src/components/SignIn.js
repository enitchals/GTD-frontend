import React, { Component } from 'react';
import axios from 'axios';

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
        this.signIn = this.signIn.bind(this);
    }

    changeHandlerEmail = (event) => {
        this.setState({email: event.target.value});
    }

    changeHandlerPassword = (event) => {
        this.setState({password: event.target.value});
    }

    signIn() {
        axios.post('http://localhost:9001/login', {
            email: this.state.email,
            password: this.state.password,
        }).then((res) => {
            console.log('response.data.token');
            //this.props.navigation.navigate('Home', { token: response.data.token });
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