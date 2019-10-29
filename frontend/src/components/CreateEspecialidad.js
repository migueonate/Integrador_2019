import React, { Component } from 'react'
import axios from 'axios'

export default class CreateEspecialidad extends Component {

    state = {
        especialidadname: '',
        especialidades: []
    }

    async componentDidMount() {
        this.getEspecialidades();
    }

    getEspecialidades = async () => {
        const res = await axios.get('http://10.154.12.29/api/especialidades');
        this.setState({
            especialidades: res.data
        });
    }

    onChangeEspecialidadname = e => {
        this.setState({
            especialidadname: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://10.154.12.29/api/especialidades', {
            especialidadname: this.state.especialidadname
        });
        this.setState({ especialidadname: '' });
        this.getEspecialidades();
    }

    deleteEspecialidad = async (especialidadId) => {
        const response = window.confirm('Esta seguro de eliminar esta ESPECIALIDAD?');
        if (response) {
            await axios.delete('http://10.154.12.29/api/especialidades/' + especialidadId);
            this.getEspecialidades();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Nueva Especialidad</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.especialidadname}
                                    type="text"
                                    onChange={this.onChangeEspecialidadname}
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                <i className="material-icons">
                                    save</i>
                            </button>
                        </form>
                    </div>
                </div>
                <div className="col-md-8">
                    <ul className="list-group">
                        {
                            this.state.especialidades.map(especialidad => (
                                <li className="list-group-item list-group-item-action" key={especialidad._id} onDoubleClick={() => this.deleteEspecialidad(especialidad._id)}>
                                    {especialidad.especialidadname}
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}