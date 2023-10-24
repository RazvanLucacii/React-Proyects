import { Component } from "react";
import HijoDeporte from "./HijoDeporte";

class PadreDeportes extends Component {
    deportes = ["Petanca", "Curling", "Poker", "Futbol", "Paintball"]

    //NECESITAMOS UNA VARIABLE PARA SABER EL DEPORTE 
    //FAVORITO.  DICHA VARIABLE SERA DINAMICA DEPENDIENDO DEL HIJO
    //SELECCIONADO
    state = {
        favorito: ""
    }

    //NECESITAMOS UN METODO QUE RECIBIRA EL DEPORTE SELECCIONADO
    //DESDE EL HIJO
    mostrarFavorito = (deporteSeleccionado) => {
        //MODIFICAMOS EL STATE PARA INDICAR EL FAVORITO
        this.setState({
            favorito: deporteSeleccionado
        })
    }

    render() {
        return (<div>
            <h1>Padre deportes</h1>
            <h2 style={{backgroundColor: "yellow"}}>
                Su deporte favorito es...{this.state.favorito}
            </h2>
            {
                //RECORREMOS TODOS LOS DEPORTES Y CREAMOS 
                //ETIQUETAS <HijoDeporte/> ENVIANDO EL NOMBRE
                this.deportes.map((deporte, index) => {
                    return (<HijoDeporte key={index} nombre={deporte}
                        mostrarFavorito={this.mostrarFavorito}/>)
                })
            }
        </div>)
    }
}

export default PadreDeportes;