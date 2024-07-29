import React, { useState } from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDivide, faXmark, faMinus, faPlus, faEquals, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';

function App() {
  const [resultado, setResultado] = useState('');

  const insert = (valor) => {
    setResultado((prev) => prev + valor);
  };

  const clean = () => {
    setResultado('');
  };

  const backspace = () => {
    setResultado((prev) => prev.slice(0, -1));
  };

  const confirma = () => {
    try {
      const evalResult = eval(resultado);
      setResultado(evalResult.toString());
    } catch (error) {
      setResultado('Erro');
    }
  };

  return (
    <div className="main">
      <div className="calculator">
        <p className="result" id="resultado">{resultado}</p>

        <table>
          <tbody>
            <tr>
              <td><button className="btn c" style={{ width: '106px' }} onClick={clean}>C</button></td>
              <td><button className="btn neg" onClick={backspace}><FontAwesomeIcon icon={faDeleteLeft} /></button></td>
              <td><button className="btn special" onClick={() => insert('/')}><FontAwesomeIcon icon={faDivide} /></button></td>
            </tr>
            <tr>
              <td><button className="btn" onClick={() => insert('7')}>7</button></td>
              <td><button className="btn" onClick={() => insert('8')}>8</button></td>
              <td><button className="btn" onClick={() => insert('9')}>9</button></td>
              <td><button className="btn special" onClick={() => insert('*')}><FontAwesomeIcon icon={faXmark} /></button></td>
            </tr>
            <tr>
              <td><button className="btn" onClick={() => insert('4')}>4</button></td>
              <td><button className="btn" onClick={() => insert('5')}>5</button></td>
              <td><button className="btn" onClick={() => insert('6')}>6</button></td>
              <td><button className="btn special" onClick={() => insert('-')}><FontAwesomeIcon icon={faMinus} /></button></td>
            </tr>
            <tr>
              <td><button className="btn" onClick={() => insert('1')}>1</button></td>
              <td><button className="btn" onClick={() => insert('2')}>2</button></td>
              <td><button className="btn" onClick={() => insert('3')}>3</button></td>
              <td><button className="btn special" onClick={() => insert('+')}><FontAwesomeIcon icon={faPlus} /></button></td>
            </tr>
            <tr>
              <td><button className="btn" onClick={() => insert('0')}>0</button></td>
              <td><button className="btn" onClick={() => insert('.')}>.</button></td>
              <td><button className="btn igual" style={{ width: '106px' }} onClick={confirma}><FontAwesomeIcon icon={faEquals} /></button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;