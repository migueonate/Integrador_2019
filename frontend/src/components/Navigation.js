import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        <i className="material-icons">
                        </i> SeekHealth
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Convenios</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/create" className="nav-link">Nuevo Convenio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/empresa" className="nav-link">Nueva Empresa</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/plan" className="nav-link">Nuevo Plan</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}
