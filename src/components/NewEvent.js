import React, { Component } from 'react';
import { newEvent } from '../actions/eventActions';
import { connect } from 'react-redux';
import { store } from '../';

import './App.css';

class NewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            newEvent: '',
            newMemo: '',
            newDate: null,
            newTime: null
        }
        this.changeHandlerEvent = this.changeHandlerEvent.bind(this);
        this.changeHandlerMemo = this.changeHandlerMemo.bind(this);
        this.changeHandlerDate = this.changeHandlerDate.bind(this);
        this.changeHandlerTime = this.changeHandlerTime.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
    }

    changeHandlerEvent = (event) => {
        this.setState({newEvent: event.target.value});
    }
    changeHandlerMemo = (event) => {
        this.setState({newMemo: event.target.value});
    }
    changeHandlerTime = (event) => {
        this.setState({newTime: event.target.value});
    }
    changeHandlerDate = (event) => {
        this.setState({newDate: event.target.value});
    }
    submitHandler = () => {
        this.props.newEvent({ user: this.state.userID, event: this.state.newEvent, memo: this.state.newMemo, project: this.props.projectID, date: this.state.newDate, time: this.state.newTime })
        this.setState({newEvent: ''});
        this.setState({newMemo: ''});
        this.setState({newDate: ''});
        this.setState({newTime: ''});
    }

    render() {
        return (
            <div className = "newEvent">
                <input type="text" onChange={this.changeHandlerEvent} placeholder="event" value={this.state.newEvent}/><br/>
                <textarea className="textarea" onChange={this.changeHandlerMemo} placeholder="note" value={this.state.newMemo}/><br/>
                <input type="date" onChange={this.changeHandlerDate} value={this.state.newDate}/><br/>
                <input type="time" onChange={this.changeHandlerTime} value={this.state.newTime}/><br/>
                <button onClick={this.submitHandler}>Save</button>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
    }
}

export default connect(mapStateToProps, { newEvent })(NewEvent);