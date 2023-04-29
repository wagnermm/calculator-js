import './App.css';

function App() {
  
  return (
    <div className="App">
      <main className="App-main">
        <div className="calculator">
          <p className="result"></p>
          <table>
            <tr>
              <td><button className="btn ac">AC</button></td>
              <td><button className="btn neg"><i class="fa-solid fa-delete-left"></i></button></td>
              <td><button className="btn special"><i class="fa-solid fa-divide"></i></button></td>
            </tr>
            <tr>
            <td><button className="btn">7</button></td>
            <td><button className="btn">8</button></td>
            <td><button className="btn">9</button></td>
            <td><button className="btn special"><i class="fa-solid fa-xmark"></i></button></td>
            </tr>
            <tr>
            <td><button className="btn">4</button></td>
            <td><button className="btn">5</button></td>
            <td><button className="btn">6</button></td>
            <td><button className="btn special"><i class="fa-solid fa-minus"></i></button></td>
            </tr>
            <tr>
            <td><button className="btn">1</button></td>
            <td><button className="btn">2</button></td>
            <td><button className="btn">3</button></td>
            <td><button className="btn special"><i class="fa-sharp fa-solid fa-plus"></i></button></td>
            </tr>
            <tr>
            <td><button className="btn">0</button></td>
            <td><button className="btn">.</button></td>
            <td><button className="btn equal"><i class="fa-solid fa-equals"></i></button></td>
            </tr>
          </table>
        </div>
      </main>
    </div>
  );
}

export default App;
