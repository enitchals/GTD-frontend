import React, { Component } from 'react';
import { newEvent } from '../actions/eventActions';
import { connect } from 'react-redux';
import { store } from '../';
import OneEvent from './OneEvent';


import './App.css';

class Events extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userID: this.props.userID,
            newEvent: '',
            newMemo: '',
            newDate: null,
            newTime: null,
            events: this.props.events
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
        this.props.newEvent({ user: this.props.userID, event: this.state.newEvent, memo: this.state.newMemo, project: this.props.projectID, date: this.state.newDate, time: this.state.newTime })
        this.setState({newEvent: ''});
        this.setState({newMemo: ''});
        this.setState({newDate: ''});
        this.setState({newTime: ''});
    }

    render() {
        return (
            <div className = "Events">
                <div className = "ListEvents">
                    <ul>{this.props.events.map((oneEvent, i) => <OneEvent oneEvent={oneEvent} key={i} index={i} />)}</ul>
                </div>
                <div className = "NewItem Container-Column">
                    <div className="NewItem-Header">add event:</div>
                    <input type="text" className="TextInput" onChange={this.changeHandlerEvent} placeholder="event" value={this.state.newEvent}/>
                    <textarea className="TextArea" onChange={this.changeHandlerMemo} placeholder="note" value={this.state.newMemo}/>
                    <input type="date" onChange={this.changeHandlerDate} value={this.state.newDate}/>
                    <input type="time" onChange={this.changeHandlerTime} value={this.state.newTime}/>
                    <button onClick={this.submitHandler}>Save</button>
                </div>
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        userID: state.userID,
    }
}

export default connect(mapStateToProps, { newEvent })(Events);