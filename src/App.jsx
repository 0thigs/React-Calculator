import React from "react";
import './App.css'
import { BsFillCalculatorFill } from 'react-icons/bs'
import { useState } from 'react'

function App() {

  
  const [count, setCount] = useState('')

  function calc() {
    let res = document.getElementById("calc").value
    setCount(eval(res))
  }
  
  return (
    <div className="container">

    <main>
        <div className="pcont">
          <p className="result">{count}</p>
        </div>
      <input id="calc" className="input" type="text" />
      <button className="btn" onClick={calc}><BsFillCalculatorFill className="img"/></button>
    </main>

    </div>
  );
}

export default App;
