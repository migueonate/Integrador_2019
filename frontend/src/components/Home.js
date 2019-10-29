import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default class Home extends Component {
    state = {
        title: '',
        content: '',
        date: new Date(),
        empresaSelected: '',
        planSelected: '',
        servicioSelected: '',
        especialidadSelected: '',
        empresas: [],
        plans: [],
        servicios: [],
        especialidades: [],
        editing: false,
        _id: ''

    }

    async componentDidMount() {
        const res = await axios.get('http://localhost/api/empresas');
        if (res.data.length > 0) {
            this.setState({
                empresas: res.data.map(empresa => empresa.empresaname),
                empresaSelected: res.data[0].empresaname
            })
        }

        const res2 = await axios.get('http://localhost/api/plans');
        if (res2.data.length > 0) {
            this.setState({
                plans: res2.data.map(plan => plan.planname),
                planSelected: res2.data[0].planname
            })
        }

        const res3 = await axios.get('http://localhost/api/servicios');
        if (res3.data.length > 0) {
            this.setState({
                servicios: res3.data.map(servicio => servicio.servicioname),
                servicioSelected: res3.data[0].servicioname
            })
        }

        const res4 = await axios.get('http://localhost/api/especialidades');
        if (res4.data.length > 0) {
            this.setState({
                especialidades: res4.data.map(especialidad => especialidad.especialidadname),
                especialidadSelected: res4.data[0].especialidadname
            })
        }



    }

    onSubmit = async (e) => {
        e.preventDefault();
        if (this.state.editing) {
            const updatedNote = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.empresaSelected,
                author2: this.state.planSelected,
                date: this.state.date
            };
            await axios.put('http://localhost/api/notes/' + this.state._id, updatedNote);
        } else {
            const newNote = {
                title: this.state.title,
                content: this.state.content,
                author: this.state.empresaSelected,
                author2: this.state.planSelected,
                date: this.state.date
            };
            axios.post('http://localhost/api/notes', newNote);
        }
        window.location.href = '/';

    }

    onInputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }



    render() {
        return (
            
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4> </h4>
                    <form onSubmit={this.onSubmit}>
                        {/* SELECT THE EMPRESA */}
                        <div className="form-group">
                            Empresa*
                            <select
                                className="form-control"
                                value={this.state.empresaSelected}
                                onChange={this.onInputChange}
                                name="empresaSelected"
                                required>
                                {
                                    this.state.empresas.map(empresa => (
                                        <option key={empresa} value={empresa}>
                                            {empresa}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>
                        {/* SELECT THE PLAN */}
                        <div className="form-group">
                            Plan*
                            <select
                                className="form-control"
                                value={this.state.planSelected}
                                onChange={this.onInputChange}
                                name="planSelected"
                                required>
                                {
                                    this.state.plans.map(plan => (
                                        <option key={plan} value={plan}>
                                            {plan}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* SELECT SERVICE*/}
                        <div className="form-group">
                            Servicio*
                            <select
                                className="form-control"
                                value={this.state.servicioSelected}
                                onChange={this.onInputChange}
                                name="servicioSelected"
                                required>
                                {
                                    this.state.servicios.map(servicio => (
                                        <option key={servicio} value={servicio}>
                                            {servicio}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>

                        {/* SELECT  ESPECIALIDAD */}
                        <div className="form-group">
                            Especialidad*
                            <select
                                className="form-control"
                                value={this.state.especialidadSelected}
                                onChange={this.onInputChange}
                                name="especialidadSelected"
                                required>
                                {
                                    this.state.especialidades.map(especialidad => (
                                        <option key={especialidad} value={especialidad}>
                                            {especialidad}
                                        </option>
                                    ))
                                }
                            </select>
                        </div>




                        <div className="text-center">
                            <Link to="/map" className="btn btn-info" >
                                Buscar
                            </Link>
                        </div>

                    </form>
                </div>
            </div>


        )
    }
}