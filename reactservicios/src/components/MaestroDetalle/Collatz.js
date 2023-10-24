import React, { Component } from 'react'

export default class Collatz extends Component {
    state = {
        menu: []
    }

    generarCollatz = () => {
        var aux = [];
        var numero = parseInt(this.props.numeroParametro);
        while (numero != 1){
            if (numero % 2 == 0){
                numero = numero / 2;
            }else{
                numero = (numero * 3) + 1;
            }
            aux.push(numero);
        }
        this.setState ({
            menu: aux
        })
    }

    componentDidMount = () => {
        console.log(this.props.numeroParametro);
        this.generarCollatz();
    }

    componentDidUpdate = (oldProps) => {
        if (oldProps.numeroParametro != this.props.numeroParametro){
            this.generarCollatz();
        }
    }

  render() {
    return (
      <div>
        <h1>Collatz Component</h1>
        <h2>Numero: {this.props.numeroParametro}</h2>
        <ul>
            {
                this.state.menu.map((number, index) => {
                    return(<li key={index}>{number}</li>)
                })
            }
        </ul>
      </div>
    )
  }
}
