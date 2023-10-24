import { useState } from "react";

function Car(props){
    //tendremos una variable para averigurar el estado del coche
    const [ estado, setEstado] = useState(false);
    //una variable para visualizar la velociadad actual del coche
    const [ velocidad, setVelocidad] = useState(0);
    //creamos un objeto coche con todas las caracteristicas necesarias
    //en forma de propiedades
    var coche = {
        marca: props.marca,
        modelo: props.modelo,
        aceleracion: parseInt(props.aceleracion),
        velocidadmaxima: parseInt(props.velocidadmaxima)
    }
    //vamos a tener una funcionalidad que nos permita
    //arrancar/detener el coche mediante la variable estado
    //tendremos un metodo que nos devolvera un dibujo HTML
    //dependiendo de dicho estado.
    const comprobarEstado = () => {
        if (estado == true){
            return (<h1 style={{color:"verde"}}>Arrancado</h1>)
        }else{
            return (<h1 style={{color:"red"}}>Detenido</h1>)
        }
    }

    //creamos un metodo para cambiar la aceleracion del coche
    const acelerarCoche = () => {
        if(estado == false){
            alert("El coche esta detenido");
            setVelocidad(0);
        }else{
            if(velocidad >= coche.velocidadmaxima){
                //ponemos la velocidad maxima del coche
                setVelocidad(coche.velocidadmaxima);
            }else{
                //aceleramos con la propiedad aceleracion del coche
                setVelocidad(velocidad + coche.aceleracion);
            }
        }
    }
    
    return(
        <div>
            <h1>Component Car {coche.marca}, {coche.modelo}</h1>
            <h1>Velociadad Actual: {velocidad} km/h</h1>
            <div>
                {comprobarEstado()}
            </div>
            <button onClick={ () => {
                //cambiamos el valor de la variable estado
                setEstado(!estado);
                console.log("Cambiando estado: " + estado);
            }}>Arrancar/Detener</button>
            <button onClick={ () => acelerarCoche()}>Acelerar coche</button>
        </div>
    )
}

export default Car;