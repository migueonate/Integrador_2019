import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../img/logo.png'


export default class DirectorioMedico extends Component {
    render() {
        return (
                <div className="container text-center">
                    <p>       </p>
                    <p>       </p>
                    <Link to="/"><img src={logo} alt="logo" /></Link>                   
                </div>
               
     
        )
    }
}
