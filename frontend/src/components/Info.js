import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import img from '../img/General_Florida.PNG'
import img2 from '../img/General_Florida_2.PNG'
import img3 from '../img/General_bga.PNG'


export default class Info extends Component {
    render() {
        return (

            <div >
                <h1>Lista De Prestadores</h1>
                <Link to="/map" className="btn btn-secondary " >
                    Mapa
                    <i className="material-icons">
                        map</i>
                </Link>
                <p>
                    
                </p>
                <Link to="/map"><img src={img} alt="General_Florida" /></Link>
                <Link to="/map"><img src={img2} alt="General_Florida_2" /></Link>
                <Link to="/map"><img src={img3} alt="General_bga" /></Link>
            </div>
        )
    }

}

