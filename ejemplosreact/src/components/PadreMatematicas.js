import Matematicas from "./Matematicas";

function PadreMatematicas() {
    const metodoTriple = (numero) => {
        var NumeroTriple = parseInt(numero) * 3;
        console.log(NumeroTriple);
    }

    return(
        <div>
            <h1>Padre Matematicas</h1>
            <Matematicas metodoTriple={metodoTriple}/>
        </div>
    )
}

export default PadreMatematicas;