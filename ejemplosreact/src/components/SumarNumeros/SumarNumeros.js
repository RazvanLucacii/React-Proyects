import img from './../SumarNumeros/SumarNumeros.css';

function SumarNumeros(props) {
    const sumanums = (numero1, numero2) => {
        numero1 = parseInt(props.numero1);
        numero2 = parseInt(props.numero2);
        var resultado = numero1 + numero2;
        console.log(resultado);
    }
    return(
        <div>
            <h1>Sumar Numeros</h1>
            <img/><br/>
            <button onClick={ () => sumanums(11, 33)}>Resultado suma</button>
        </div>
    )
}

export default SumarNumeros;