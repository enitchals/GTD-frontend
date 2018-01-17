import React from 'react';

export default class OneNote extends React.Component {
    render(props) {
        return (
            <div>
            <p className="NoteTitle"> {this.props.note.title}</p>
            <p className="Note"> {this.props.note.note} </p>
            </div>
        )
    }
}