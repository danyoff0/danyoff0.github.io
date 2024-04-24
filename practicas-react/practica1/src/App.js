import React, { useState } from "react";
import ComponenteMsg from "./componentes/ComponenteMsg";
import './App.css';

function App() {
  const [showComponentMsg, setShowComponentMsg] = useState(false);

  const invokeNewComponent = () => {
    setShowComponentMsg(true);
  }

  const hideComponentMsg = () => {
    setShowComponentMsg(false);
  }

  return (
   
    <div className="container">
      <div className="card">
        <h1 className="title">hola mundo bienvenido a react</h1>
        <center>
          <button className="button" onClick={invokeNewComponent}>Mostrar</button>
        </center>
      </div>
      {showComponentMsg && <ComponenteMsg />}
      {showComponentMsg && <button className="button1" onClick={hideComponentMsg}>Ocultar</button>}
    </div>
    
  );
}

export default App;
