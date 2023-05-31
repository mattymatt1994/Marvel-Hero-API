import logo from './logo.svg';
import './App.css';
import FindHeroes from "./HeroComponents/superheroes.fetch.jsx";
import { useState } from "react";

function App(props) {
  const [filter, setFilter] = useState([]);

  function shieldFinder(vigilante) {
    console.log(vigilante.name);
    setFilter(vigilante);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <FindHeroes/>
    </div>
  );
}

export default App;
