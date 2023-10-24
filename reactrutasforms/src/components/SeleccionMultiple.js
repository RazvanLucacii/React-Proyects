import React, { Component } from 'react';

class SeleccionMultiple extends Component {
    //NECESITAMOS UNA VARIABLE PARA CAPTURAR LA REFERENCIA DEL CONTROL SELECT
    selectMultiple = React.createRef();
    //CREAMOS UN METODO PARA GENERAR N OPTIONS DINAMICAMENTE
    generarOptions = () => {
        var options = [];
        for (var i = 1; i <= 10; i++){
            options.push(<option key={i} value={"Elemento" + i}>
                {"Elemento " + i}
            </option>)
        }
        return options;
    }
    //TENDREMOS UNA VARIABLE STATE CON UN TIPO DE DATO string
    //PARA MOSTRAR UN MENSAJE CON LOS ELEMENTOS SELECCIONADOS
    state = {
        seleccionados: ""
    }
    //METODO PARA MOSTRAR LOS ELEMENTOS SELECCIONADOS
    mostrarSeleccionados = (e) => {
        e.preventDefault();
        //DENTRO DEL CONTROL <select> TENEMOS UN ARRAY 
        //LLAMADO options DONDE VIENEN TODAS LAS OPCIONES DEL CONTROL
        var options = this.selectMultiple.current.options;
        //PARA PODER ENCONTRAR LOS SELECCIONADOS, CADA <option>
        //CONTIENE UNA PROPIEDAD LLAMADA selected QUE INDICA SI ESTA 
        //SELECCIONADO O NO
        var datos = "";
        //REALIZAMOS UN BUCLE DE REFERENCIA PARA RECORRER CADA
        //ELEMENTO DENTRO DEL ARRAY
        for (var option of options){
            if (option.selected == true){
                //CADA OPTION TIENE UNA PROPIEDAD value O text
                datos += option.value + ", ";
            }
        }
        //MODIFICAMOS EL STATE PARA DIBUJO
        this.setState({
            seleccionados: datos
        })
    }
    
  render() {
    return (
        <div>
            <h1>SeleccionMultiple Forms</h1>
            <form onSubmit={this.mostrarSeleccionados}>
                <label>Seleccione elementos</label><br/>
                <select ref={this.selectMultiple} size="10" multiple>
                    {this.generarOptions()}
                </select>
                <br/>
                <button>
                    Mostrar seleccionados
                </button>
            </form>
            <h1 style={{color:"blue"}}>{this.state.seleccionados}</h1>
        </div>
    )
  }
}

export default SeleccionMultiple;