import { useState } from 'react';
import './App.css';
import ComponenteMsg from './componentes/ComponenteMsg';
import AgeCalculator from './componentes/AgeCalculator';
import RickandMortyComponent from './componentes/RickAndMortyComponents';
import PokemonSearch from './componentes/componentepokemon';


function App() {
  const [isMsgModuleEnabled, setShowComponentMsg] = useState(false);
  const [isAgeModuleEnabled, setAgeModuleEnabled] = useState(false);
  const [isRickandMortyModuleEnabled, setRickandMortyModuleEnabled] = useState(false);
  const [ispokemonModuleEnabled, setpokemonModuleEnabled] = useState(false);

  const togglepokModule = () => {
    setpokemonModuleEnabled(!ispokemonModuleEnabled);
  };

  const invokeNewComponent = () => {
    setShowComponentMsg(!isMsgModuleEnabled);
  };

  const toggleAgeModule = () => {
    setAgeModuleEnabled(!isAgeModuleEnabled);
  };

  const toggleRickandMortyModule = () => {
    setRickandMortyModuleEnabled(!isRickandMortyModuleEnabled);
  }

;


  return (
    <div className="container">
      <div className='Card'>
        <h1 className="titulo">Hola Bienvenidos a React</h1>
        <center>

          <button className="boton" onClick={invokeNewComponent}>
            {isMsgModuleEnabled
              ? "Deshabilitar Mensaje"
              : "Habilitar Mensaje"}
          </button>

          <button className="boton" onClick={toggleAgeModule}>
            {isAgeModuleEnabled
              ? "Deshabilitar Edad Canina"
              : "Habilitar Edad Canina"}
          </button>

          <button className='boton' onClick={toggleRickandMortyModule}>
            {isRickandMortyModuleEnabled
              ? "Deshabilitar Modulo Rick and Morty"
              : "Habilitar Modulo Rick and Morty"}
          </button>


          <button className='boton' onClick={togglepokModule}>
            {ispokemonModuleEnabled
              ? "Deshabilitar Modulo Pokemon"
              : "Habilitar Modulo Pokemon"}
          </button>


          {isRickandMortyModuleEnabled && <RickandMortyComponent />}
          {isMsgModuleEnabled && <ComponenteMsg />}
          {isAgeModuleEnabled && <AgeCalculator />}
          {ispokemonModuleEnabled && <PokemonSearch />}

        </center>
      </div>
    </div>
  );
}

export default App;





