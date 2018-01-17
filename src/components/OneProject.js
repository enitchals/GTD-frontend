import React from 'react';

export default class OneProject extends React.Component {
    render() {
        return (
            <div>
                <h1> project detail</h1>
                <p className="ProjectTitle"> {this.props.project} </p>
                <p className="ProjectMemo"> {this.props.memo} </p>
            </div>
        )
    }
}