import SaludoHijo from "./SaludoHijo";

function SaludoPadre() {
    //necesitamos un metodo para poder ejecutar la accion
    //cuando el hijo lo necesite
    const metodoPadre = (nombre) => {
        console.log("Yo soy tu padre "+ nombre);
    }
     
    return (
        <div>
            <h1 style={{color: "red"}}>Saludo PARENT</h1>
            {/* el metodo lo llamaremos desde el hijo por lo que debemos
            enviar, mediante props el metodo al hijo en su dibujo*/}
            <SaludoHijo idhijo="1" metodoPadre={metodoPadre}/>
            <SaludoHijo idhijo="2" metodoPadre={metodoPadre}/>
            <SaludoHijo idhijo="3" metodoPadre={metodoPadre}/>

        </div>
    )
}

export default SaludoPadre;