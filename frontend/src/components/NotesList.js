import React, { Component } from 'react'
import axios from 'axios'
import { format } from 'timeago.js'
import { Link } from 'react-router-dom'

export default class NotesList extends Component {

    state = {
        notes: []
    }

    async componentDidMount() {
        this.getNotes();
    }

    getNotes = async () => {
        const res = await axios.get('http://localhost/api/notes')
        this.setState({
            notes: res.data
        });
    }

    deleteNote = async (noteId) => {
        await axios.delete('http://localhost/api/notes/' + noteId);
        this.getNotes();
    }


    render() {
        return (
            <div className="row">
                {
                    this.state.notes.map(note => (
                        <div className="col-md-4 p-2" key={note._id}>
                            <div className="card">
                                <div className="card-header d-flex justify-content-between">
                                    <h5>{note.title}</h5>

                                </div>
                                <div className="card-body">
                                    <h5>
                                        {note.author}
                                    </h5>
                                    <h6>
                                        {note.author2}
                                    </h6>

                                    <p>
                                        {note.content}
                                    </p>

                                    <p>
                                        {format(note.date)}
                                    </p>
                                </div>
                                <div className="card-footer text-right" >
                                    <button className="btn btn-danger mr-2" onClick={() => this.deleteNote(note._id)}>
                                        <i className="material-icons">
                                            delete</i>
                                    </button>

                                    <Link to={"/edit/" + note._id} className="btn btn-secondary " >
                                        <i className="material-icons">
                                            edit</i>
                                    </Link>

                                </div>



                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }
}