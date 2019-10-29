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


                            <li className="nav-item dropdown"  >
                                <Link className="nav-link " data-toggle="dropdown" >Servicios</Link>
                                <ul className="dropdown-menu">
                                    <li><Link to="/empresa" >Nueva Empresa</Link></li>
                                    <li><Link to="/plan" >Nuevo Plan</Link></li>
                                    <li><Link to="/servicio" >Nuevo Servicio</Link></li>
                                    <li><Link to="/especialidad" >Nueva Especialidad</Link></li>

                                </ul>
                            </li>

                        </ul>
                    </div>


                </div>

            </nav >
        )
    }
}
