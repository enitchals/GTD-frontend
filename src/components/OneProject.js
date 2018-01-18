import React from 'react';
import { Link } from 'react-router-dom';

export default class OneProject extends React.Component {
    render() {
        return (
            <div>
                <Link to={`/project/${this.props.project._id}`}>
                    <p className="ProjectTitle"> {this.props.project.project} </p>
                </Link>
                <p className="ProjectMemo"> {this.props.project.memo} </p>
            </div>
        )
    }
}