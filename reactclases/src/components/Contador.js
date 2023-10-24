//DEBEMOS IMPORTAR Component PARA ESTA NUEVA SINTAXIS
import { Component } from "react";

//PODEMOS DECLARAR METODOS FUERA DEL COMPONENT, 
//DICHOS METODOS SE DECLARAN COMO function 
//Y NO PODEMOS UTILIZAR NADA DE LA CLASE DENTRO DE ELLOS
function metodoExterno() {
    console.log("Function externa a la clase");
}

class Contador extends Component {
    //LAS VARIABLES Y LOS METODOS SE DECLARAN FUERA
    //DEL RENDER
    //NO SE UTILIZAN PALABRAS CLAVE COMO var, let o const
    numero = 1;
    //CREAMOS UN METODO PARA INCREMENTAR DICHO NUMERO
    incrementarNumero = () => {
        //PARA HACER REFERENCIA A LAS VARIABLES DE LA CLASE
        //DEBEMOS UTILIZAR LA PALABRA this SIEMPRE
        this.numero = this.numero + 1;
        console.log("Valor de número: " + this.numero);
    }

    //EL CONCEPTO DE state ES EXACTAMENTE EL MISMO, VARIABLES 
    //QUE NECESITAMOS QUE SEAN DIBUJADAS, ES DECIR, QUE CAMBIEN EL render()
    //DICHAS VARIABLES VAN DECLARADAS COMO OBJETO DENTRO DE state
    state = {
        valor: parseInt(this.props.inicio)
    }

    //CREAMOS UN METODO PARA INCREMENTAR EL VALOR DEL CONTADOR
    incrementarValor = () => {
        //PARA MODIFICAR EL VALOR DE state, UTILIZAMOS setState
        //INDICANDO MEDIANTE JSON EL OBJETO/S QUE DESEAMOS MODIFICAR
        this.setState({
            valor: this.state.valor + 1
        });
    }

    render() {
        return (<div>
            <h1>Class Component Contador</h1>
            <h1 style={{color:"blue"}}>
                Inicio contador: {this.props.inicio}
            </h1>
            <h1 style={{color:"red"}}>
                Valor del contador {this.state.valor}
            </h1>
            {/* LA LLAMADA A LOS METODOS DE LA CLASE SE REALIZA DE FORMA
            MAS SENCILLA, NO SE UTILIZAN PARENTESIS NI NADA, SOLAMENTE EL 
            NOMBRE DEL METODO A EJECUTAR*/}
            <button onClick={this.incrementarValor}>
                Incrementar contador
            </button>
            {/* VAMOS A LLAMAR A ESTE METODO MEDIANTE UNA FUNCION
            ANONIMA */}
            <button onClick={() => {
                //PARA LA LLAMADA A LOS METODOS DE LA CLASE 
                //DEBEMOS UTILIZAR this
                this.incrementarNumero();
                //PARA LA LLAMADA A FUNCTION EXTERNA NO SE UTILIZA
                //LA PALABRA this
                metodoExterno();
            }}>Incrementar número</button>
        </div>)
    }
}

export default Contador;