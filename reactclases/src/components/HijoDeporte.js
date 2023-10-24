import { Component } from "react";

class HijoDeporte extends Component {

    seleccionarFavorito = () => {
        //CAPTURAMOS PROPS PARA INDICAR EL DEPORTE SELECCIONADO
        var deporte = this.props.nombre;
        //REALIZAMOS LA LLAMADA AL PADRE ENVIANDO EL DEPORTE (PARAMETRO)
        this.props.mostrarFavorito(deporte);
    }

    render() {
        return (<div>
            <h1 style={{color: "blue"}}>
                {this.props.nombre}
            </h1>
            <button onClick={() => this.seleccionarFavorito()}>
                Seleccionar favorito
            </button>
        </div>)
    }
}

export default HijoDeporte;