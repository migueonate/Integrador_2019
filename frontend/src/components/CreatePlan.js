import React, { Component } from 'react'
import axios from 'axios'

export default class CreatePlan extends Component {

    state = {
        planname: '',
        plans: []
    }

    async componentDidMount() {
        this.getPlans();
    }

    getPlans = async () => {
        const res = await axios.get('http://localhost:4000/api/plans');
        this.setState({
            plans: res.data
        });
    }

    onChangePlanname = o => {
        this.setState({
            planname: o.target.value
        })
    }

    onSubmit = async (o) => {
        o.preventDefault();
        await axios.post('http://localhost:4000/api/plans', {
            planname: this.state.planname
        });
        this.setState({ planname: '' });
        this.getPlans();
    }

    deletePlan = async (planId) => {
        const response = window.confirm('Esta seguro de eliminar este PLAN?');
        if (response) {
            await axios.delete('http://localhost:4000/api/plans/' + planId);
            this.getPlans();
        }
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-4">
                    <div className="card card-body">
                        <h3>Create New Plan</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="form-group">
                                <input
                                    className="form-control"
                                    value={this.state.planname}
                                    type="text"
                                    onChange={this.onChangePlanname}
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
                            this.state.plans.map(plan => (
                                <li className="list-group-item list-group-item-action" key={plan._id} onDoubleClick={() => this.deletePlan(plan._id)}>
                                    {plan.planname}
                                    
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        )
    }
}