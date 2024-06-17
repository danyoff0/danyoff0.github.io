import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './pokemon.css' ;

const PokemonSearch = () => {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      if (response.data) {
        setPokemonData(response.data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearchClick = () => {
    fetchData();
  };

  useEffect(() => {
    if (pokemonData) {
      // Agrega aquí cualquier proceso que debas realizar después de cargar los datos
    }
  }, [pokemonData]);

  return (
    <div>
      <label>
        Pokémon Name:
        <input
          type="text"
          value={pokemonName}
          onChange={(e) => setPokemonName(e.target.value)}
        />
        <button onClick={handleSearchClick}>Search</button>
      </label>
      {pokemonData && (
        <div>
          <h2>{pokemonData.name}</h2>
          <img src={pokemonData.sprites.front_default} alt={pokemonData.name} />
          <ul>
            {Object.keys(pokemonData.types).map((type, index) => (
              <li key={index}>
                {pokemonData.types[type].type.name}
              </li>
            ))}
          </ul>
          <p>Altura: {pokemonData.height}</p>
          <p>ancho: {pokemonData.weight}</p>
          <p>habiliddades: {pokemonData.abilities.map((ability) => ability.ability.name).join(', ')}</p>
        </div>
      )}
    </div>
  );
};

export default PokemonSearch;