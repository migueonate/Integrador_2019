import React, { Component } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'
import axios from 'axios'

export default class CreateNote extends Component {

    state = {
        title: '',
        content: '',
        date: new Date(),
        empresaSelected: '',
        planSelected: '',
        empresas: [],
        plans: [],
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
        
        if (this.props.match.params.id) {
            console.log(this.props.match.params.id)
            const res = await axios.get('http://localhost/api/notes/' + this.props.match.params.id);
            console.log(res.data)
            console.log(res2.data)
            
            this.setState({
                title: res.data.title,
                content: res.data.content,
                date: new Date(res.data.date),
                empresaSelected: res.data.author,
                planSelected: res2.data.author2,
                _id: res.data._id,
                editing: true
            });
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


    onChangeDate = date => {
        this.setState({ date });
    }

    render() {
        return (
            <div className="col-md-6 offset-md-3">
                <div className="card card-body">
                    <h4>Crear Convenio</h4>
                    <form onSubmit={this.onSubmit}>
                        {/* SELECT THE EMPRESA */}
                        Empresa*
                        <div className="form-group">
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
                        Plan*
                        {/* SELECT THE PLAN */}
                        <div className="form-group">
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
                        {/* Note Title */}
                        <div className="form-group">
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Nombre Convenio"
                                onChange={this.onInputChange}
                                name="title"
                                value={this.state.title}
                                required />
                        </div>
                        {/* Note Content */}
                        <div className="form-group">
                            <textarea
                                type="text"
                                className="form-control"
                                placeholder="Anotaciones"
                                name="content"
                                onChange={this.onInputChange}
                                value={this.state.content}
                                required
                                >
                            </textarea>
                        </div>
                        Valido Hasta...
                        {/* Note Date */}
                        <div className="form-group">
                            <DatePicker className="form-control" selected={this.state.date} onChange={this.onChangeDate} />
                        </div>

                        <div className="text-center">
                            <button className="btn btn-primary ">
                                <i className="material-icons">
                                    save</i>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        )
    }
}
