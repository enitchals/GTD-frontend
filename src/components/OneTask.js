import React from 'react';

export default class OneTask extends React.Component {
    render() {
        return (
            <div>
            <p className="Task"> {this.props.task.task} </p>
            <p className="TaskMemo"> {this.props.task.memo} </p>
            <p className="TaskProject"> {this.props.task.project} </p>
            </div>
        )
    }
}