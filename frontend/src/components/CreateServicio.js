import React, { Component } from 'react'
import axios from 'axios'

export default class CreateServicio extends Component {

    state = {
        servicioname: '',
        servicios: []
    }

    async componentDidMount() {
        this.getServicios();
    }

    getServicios = async () => {
        const res = await axios.get('http://10.154.12.29/api/servicios');
        this.setState({
            servicios: res.data
        });
    }

    onChangeServicioname = e => {
        this.setState({
            servicioname: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://10.154.12.29/api/servicios', {
            servicioname: this.state.servicioname
        });
        this.setState({ servicioname: '' });
        this.getServicios();
    }

    deleteServicio = async (servicioId) => {
        const response = window.confirm('Esta seguro de eliminar este SERVICIO?');
        if (response) {
            await axios.delete('http://10.154.12.29/api/servicios/' + servicioId);
            this.getServicios();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Nuevo Servicio</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.servicioname}
                                    type="text"
                                    onChange={this.onChangeServicioname}
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
                            this.state.servicios.map(servicio => (
                                <li className="list-group-item list-group-item-action" key={servicio._id} onDoubleClick={() => this.deleteServicio(servicio._id)}>
                                    {servicio.servicioname}
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}