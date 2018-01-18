import React, { Component } from 'react';
import { connect } from 'react-redux';
import { deleteTask } from '../actions/taskActions';

class OneTask extends Component {
    constructor (props) {
        super(props);
        this.state = {
            show: true,
        }
    }
    deleteTask(task) {
        this.props.deleteTask(`${this.props.task._id}`);
        this.setState({ show: false });
    }
    render() {
        return (
            <div>
                {this.state.show ? 
                    <div>
                        <input type="checkbox" onChange={this.deleteTask.bind(this)}/>
                        <p className="Task"> {this.props.task.task} </p>
                        <p className="TaskMemo"> {this.props.task.memo} </p>
                        <p className="TaskProject"> {this.props.task.project.project} </p>
                </div>
                : <div></div>}
            </div>
        )
    }
}

export default connect(null, { deleteTask })(OneTask);