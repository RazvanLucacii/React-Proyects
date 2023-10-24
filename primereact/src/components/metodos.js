function Metodos(){
    //los metodos, al igual que las variables
    //se declaran fuera de return
    const mostrarMensaje = () => {
        console.log("Boton pulsado");
    }
    return (
        mostrarMensaje(),
        <div>
            <h1>Ejemplo metodos React</h1>
            <button onClick={ () => mostrarMensaje() }>Mostrar Mensaje</button>
        </div>
    )
}
export default Metodos;