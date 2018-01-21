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
                        <div className="Task">
                            <input type="checkbox" onChange={this.deleteTask.bind(this)}/>
                            {this.props.task.task}
                        </div>
                    </div>
                : <div></div>}
            </div>
        )
    }
}

export default connect(null, { deleteTask })(OneTask);