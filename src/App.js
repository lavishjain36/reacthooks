// import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  const [data, setData] = useState("Lavish");
  return (
    <div className="App">
      <h1>{data}</h1>
      <button onClick={() => setData("Kushal")}>Update Data</button>
    </div>
  );
}

export default App;
