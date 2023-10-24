function DobleNumero() {
    var ejemplo = "Soy una variable de lunes";
    const numeroDoble = (numero) => {
        var doble = numero * 2;
        console.log(doble);
    }
    const cambiarVariable = () => {
        console.log("Antes: " + ejemplo);
        ejemplo = "He cambiado de valor!!!";
        console.log("Despues: " + ejemplo);
    }
    var estilo = {
        color: "blue",
        backgroundColor: "yellow"
    }
    return (
    <div>
        <h1 style={estilo}>Ejemplo parametros</h1>
        <h2 style={{color: "red"}}>{ejemplo}</h2>
        <hr/>
        <button onClick={ () => numeroDoble(7) }>Doble 7</button>
        <button onClick={ () => numeroDoble(19) }>Doble 19</button>
        <button onClick={ () => cambiarVariable() }>Cambiar Variable</button>
    </div>
    )

}

export default DobleNumero;