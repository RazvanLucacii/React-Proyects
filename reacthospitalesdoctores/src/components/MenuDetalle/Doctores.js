import React, { Component } from 'react'
import axios from 'axios'
import Global from '../../Global'

export default class Doctores extends Component {
    state = {
        doctores: []
    }
    loadDoctores = () => {
        var request = "/api/Doctores/DoctoresHospital/" + this.props.idHospital;
        var url = Global.apiUrlDoctores + request;
        axios.get(url).then(response => {
            this.setState({
                doctores: response.data
            })
        })
    }

    componentDidUpdate = (oldProps) => {
        if(oldProps.idHospital !== this.props.idHospital){
            this.loadDoctores();
        }
    }

    componentDidMount = () => {
        this.loadDoctores();
    }

    render() {
        return (
        <div>
            <ul>
                {
                    this.state.doctores.map((doctor, index) => {
                        return(<li key={index}>{doctor.apellido}</li>)
                    })
                }
            </ul>
        </div>
        )
    }
}
