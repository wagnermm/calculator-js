
import { useState, useEffect } from 'react';



function Calc() {

    const [valorTela, setValorTela] = useState('')
    const [resut, setResult] = useState(0)
    const [acumulator, setAcumulator] = useState(0)
    const [operator, setOperator] = useState(false)


    const resultado = document.querySelector('.result');
    const confirmar = document.querySelector('.igual');

    function insert( valor ) {
        resultado.innerHTML += valor;
    }

    function clean() {
        resultado.innerHTML = ' ';
    }

    function backspace() {
        if( resultado.textContent ) {
            let result = document.getElementById('resultado').innerHTML
            resultado.innerHTML = result.substring(0, result.length - 1);
        }
    }

    function confirma() {
        if(resultado.textContent != 'Erro') {
            document.getElementById('resultado').innerHTML = eval(resultado.innerHTML)
        }
    }
}

export default Calc