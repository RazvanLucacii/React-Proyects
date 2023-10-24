import { Component } from "react";

class DibujosComplejosReact extends Component {
    //DECLARAMOS UN ARRAY DE NOMBRES 
    //DENTRO DE STATE PARA QUE SEA DINAMICO EL DIBUJO
    state = {
        nombres: ["Lucia", "Adrian", "Carlos", "Diana", "Antonia"]
    }

    //METODO PARA GENERAR NUEVO NOMBRE
    generarNombre = () => {
        this.state.nombres.push("NUEVO NOMBRE");
        this.setState({
            nombres: this.state.nombres
        })
    }

    render() {
        return (<div>
            <h1 style={{color:"red"}}>
                Dibujos complejos React Colección
            </h1>
            <button onClick={ () => this.generarNombre()}>
                Generar nombre
            </button>
            {
                //ESTE CODIGO REACT DEBE CONTENER UN RETURN 
                //Y ES CODIGO LOGICO QUE UTILIZA LA SINTAXIS JSX
                this.state.nombres.map((name, index) => {
                    //NUNCA PODEMOS DEJAR VACIO ESTE CODIGO
                    //DEBE CONTENER UN return 
                    return (<h3 key={index} style={{color:"blue"}}>
                        {name}
                    </h3>)
                })
            }
        </div>)
    }
}

export default DibujosComplejosReact;