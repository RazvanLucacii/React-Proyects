function Saludo(props){
    //podemos declarar variables dentro de la funcion
    var dato = "Mañana es fiesta y el viernes tambien";
    const {nombre, edad} = props;
    return (
        <div>
            <h1>Mi primer componente del Miercoles!!</h1>
            <h2>Dato objetivo: {dato}</h2>
            <h2>Otro triste mensaje, {nombre}</h2>
            <h2>Edad {edad}</h2>
        </div>
    )
}
export default Saludo;