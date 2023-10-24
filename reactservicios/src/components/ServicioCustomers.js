import React, { Component } from 'react';
import axios from 'axios';
import Global from '../Global';

class ServicioCustomers extends Component {
    //necesitamos una url de acceso al servicio API
    urlApiCustomers = Global.urlApiCustomers;

    //necesitamos almacenar, dentro de state, un conjunto de objetos customers
    state = {
        customers: []
    }

    //metodo para cargar todos los clientes del servicio API
    loadCustomers = () => {
        console.log("Cargando CUSTOMERS");
        var request = "customers.json";
        axios.get(this.urlApiCustomers + request).then(response => {
            //console.log(response.data);
            this.setState({
                customers: response.data.results
            })
        })
    }

    //tendremos un metodo de ciclo de vida para cargar los clientes
    //solamente al iniciar el component
    componentDidMount = () => {
        console.log("Creando component");
        {this.loadCustomers()}
    }

    render() {
        return (
            <div>
                <h1>Servicio Customers</h1>
                {
                    this.state.customers.map((cliente, index) => {
                        return (<h2 style={{color: "blue"}} key={index}>
                            {cliente.contactName}
                        </h2>)
                    })
                }
            </div>
        );
    }
}

export default ServicioCustomers;<h1>Servicio Customers</h1>