import React, {useState} from 'react'
import Rich from './Components/Projet'
import './App.css';

let App=() => {
  const titre = useState("Exercice 14")
  const parag = useState("Div2")
  return (
    <div className="App">
      <h1>{titre}</h1>
      <Rich para={parag}/>

    </div>
  );
}

export default App;
