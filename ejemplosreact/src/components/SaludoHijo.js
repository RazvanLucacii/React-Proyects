function SaludoHijo(props) {
    //capturamos en una variable de metodo el props
    //que viene del parent (metodoPadre)
    var idhijo = props.idhijo;
    var ejecutarPadre = props.metodoPadre;

    return (
        <div>
            <h1 style={{color: "blue"}}>Saludo Hijo</h1>
            <button onClick={ () => ejecutarPadre(idhijo) }>Llamar al Parent</button>
        </div>
    )
}

export default SaludoHijo;