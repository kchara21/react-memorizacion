import React from "react";
import Contador from "./components/Contador";

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Memorizacion en React</h1>
      <hr />
      <h2>Teoria</h2>
      <h3>Memo</h3>
      <Contador/>
    </div>
  );
}

export default App;
