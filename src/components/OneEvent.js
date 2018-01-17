import React from 'react';

export default class OneEvent extends React.Component {
    render() {
        return (
            <div>
            <p className="Event"> {this.props.oneEvent.event} </p>
            <p className="EventDate"> {this.props.oneEvent.date}</p>
            <p className="EventTime"> {this.props.oneEvent.time} </p>
            <p className="EventMemo"> {this.props.oneEvent.memo} </p>
            </div>
        )
    }
}