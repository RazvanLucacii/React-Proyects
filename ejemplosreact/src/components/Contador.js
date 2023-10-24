//para poder utilizar useState
//necesitamos importarlo de la libreria react
import { useState } from "react";

function Contador(){
    //declaramos una variable state y en la creacion
    // debemos indicar su valor respecto a su tipo de dato
    const [numero, setNumero] = useState(0);
    const sumarNumero = () => {
        //para modificar el valor de una variable state
        //debemos hacerlo mediante setVariable, que se utiliza
        //como metodo
        setNumero(numero + 1);
    }
    return(
        <div>
            <h1>Ejemplo useState</h1>
            <h2 style={{color:"blue"}}>Contador: {numero}</h2>
            <button onClick={ () => sumarNumero() }>Sumar contador</button>
            <button onClick={ () => {setNumero(numero - 1)} }>Restar contador</button>
        </div>
    )
}

export default Contador;