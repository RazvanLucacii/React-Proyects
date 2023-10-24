import { Component } from "react";

class Prueba extends Component {
    render() {
        return (<div>
            <h1 style={{color: "red"}}>
                La suma es 151
            </h1>
            <button>
                Nuevo número
            </button>
            <hr/>
            <h1 style={{color: "blue"}}>
                Numero hijo: 14
            </h1>
            <button>
                Sumar 14
            </button>
            <h1 style={{color: "blue"}}>
                Numero hijo: 26
            </h1>
            <button>
                Sumar 26
            </button>   
            <h1 style={{color: "blue"}}>
                Numero hijo: 70
            </h1>
            <button>
                Sumar 70
            </button>                     
        </div>)
    }
}

export default Prueba;