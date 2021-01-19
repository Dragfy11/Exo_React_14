import React, {useState} from 'react'
import './App.css';

let App=() => {
  const titre = useState("Exercice 14")
    
  return (
    <div className="App">
      <h1>{titre}</h1>
    </div>
  );
}

export default App;
