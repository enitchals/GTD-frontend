import React, { Component } from 'react';
import axios from 'axios';

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
        };
        this.signUp = this.signUp.bind(this);
    }

    changeHandlerEmail = (event) => {
        this.setState({email: event.target.value});
    }

    changeHandlerName = (event) => {
        this.setState({name: event.target.value});
    }

    changeHandlerPassword = (event) => {
        this.setState({password: event.target.value});
    }

    signUp = () => {
        axios.post('http://localhost:9001/user', {
            email: this.state.email,
            name: this.state.name,
            password: this.state.password
        }).then((res) => {
            if (res.data.code === 11000) {
                return this.setState({
                    error: 'Email already in use',
                });
            }
            //this.props.navigation.navigate('Home', { token: reponse.data.token });
        }).catch(err => {
            console.log(err);
        });
    }

    render() {
        return (
            <div className = "SignUp">
                <input type = "text" onChange = {this.changeHandlerEmail} placeholder="email" value = {this.state.email}/><br/>
                <input type = "text" onChange = {this.changeHandlerName} placeholder="name" value = {this.state.name} /><br/>
                <input type = "password" onChange = {this.changeHandlerPassword} placeholder="password" value = {this.state.password} /><br/>
                <button onClick = {this.signUp}>Sign Up</button>
            </div>
        )
    }
}