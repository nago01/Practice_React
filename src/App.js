import logo from './logo.svg';
import './App.css';
import Game from './Components/Game';



function App() {
  return (
    <div className="App">
      <Game />
      <h1>{`Time: ${Date.now()}`}</h1>
    </div>
  );
}

export default App;
