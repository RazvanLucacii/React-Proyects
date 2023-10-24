function Matematicas(props){
    const dobleNumero = (numero) => {
        var numeroDoble = parseInt(numero) * 2;
        console.log(numeroDoble);
    }
    var tripleNumero = props.metodoTriple;

    return(
        <div>
            <h1>Matematicas</h1>
            <hr/>
            <button onClick={ () => dobleNumero(33) }>Mostrar Doble</button>
            <button onClick={ () => tripleNumero(5) }>Mostrar Triple</button>
        </div>
    )
}

export default Matematicas;