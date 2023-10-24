import { Component } from "react";

class DibujosComplejos extends Component {

    //VAMOS A DIBUJAR UNA SERIE DE NUMEROS EN FORMATO HTML
    //UTILIZANDO ARRAYS Y CODIGO HTML
    dibujarNumeros = () => {
        //DECLARAMOS UN ARRAY PARA GUARDAR TODOS LOS NUMEROS
        //EN FORMATO HTML COMO LISTA
        var lista = [];
        //CON UN BUCLE IREMOS GENERANDO NUMEROS DINAMICOS 
        //PARA IR AÑADIENDO ELEMENTOS A LA LISTA
        for (var i = 1; i <= 10; i++){
            var numero = parseInt(Math.random() * 100 ) + 1;
            //MEDIANTE EL METODO push DEL ARRAY IREMOS 
            //RELLENANDO CODIGO HTML DINAMICO EN UNA VARIABLE ARRAY
            lista.push(<li key={i}>{numero}</li>);
        }
        return lista;
    }

    render()  {
        return (<div>
            <h1 style={{color: "blue"}}>Dibujos Complejos HTML</h1>
            <ul>
                {this.dibujarNumeros()}
            </ul>
        </div>)
    } 
}

export default DibujosComplejos;