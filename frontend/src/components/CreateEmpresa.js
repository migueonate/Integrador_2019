import React, { Component } from 'react'
import axios from 'axios'

export default class CreateEmpresa extends Component {

    state = {
        empresaname: '',
        empresas: []
    }

    async componentDidMount() {
        this.getEmpresas();
    }

    getEmpresas = async () => {
        const res = await axios.get('http://10.154.12.29/api/empresas');
        this.setState({
            empresas: res.data
        });
    }

    onChangeEmpresaname = e => {
        this.setState({
            empresaname: e.target.value
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        await axios.post('http://10.154.12.29/api/empresas', {
            empresaname: this.state.empresaname
        });
        this.setState({ empresaname: '' });
        this.getEmpresas();
    }

    deleteEmpresa = async (empresaId) => {
        const response = window.confirm('Esta seguro de eliminar esta EMPRESA?');
        if (response) {
            await axios.delete('http://10.154.12.29/api/empresas/' + empresaId);
            this.getEmpresas();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Nueva Empresa</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.empresaname}
                                    type="text"
                                    onChange={this.onChangeEmpresaname}
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
                            this.state.empresas.map(empresa => (
                                <li className="list-group-item list-group-item-action" key={empresa._id} onDoubleClick={() => this.deleteEmpresa(empresa._id)}>
                                    {empresa.empresaname}
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}