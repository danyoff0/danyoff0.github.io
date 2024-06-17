import React, { useState, useEffect } from 'react';
import './RickandMortyComponent.css'; 

const RickandMortyComponent = () => {
    const [characters, setCharacters] = useState([]);
    const [page, setPage] = useState(1);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    const [showCharacterInfo, setShowCharacterInfo] = useState(false);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);
                const data = await response.json();
                setCharacters(data.results);
            } catch (error) {
                console.error('Error fetching data', error);
            }
        };

        fetchCharacters();
    }, [page]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1);
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage(prevPage => prevPage - 1);
        }
    };

    const handleSelectCharacter = (character) => {
        setSelectedCharacter(character);
        setShowCharacterInfo(true);
    };

    const handleCloseCharacterInfo = () => {
        setShowCharacterInfo(false);
    };

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Status</th>
                        <th>Species</th>
                        <th>Gender</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {characters.map(character => ( 
                        <tr key={character.id}>
                            <td>{character.name}</td>
                            <td>{character.status}</td>
                            <td>{character.species}</td>
                            <td>{character.gender}</td>
                            <td>
                                <img
                                    src={character.image}
                                    alt={character.name}
                                    className="character-image"
                                    onClick={() => handleSelectCharacter(character)}style={{width: '50px', height : '50px' }}
                                />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <button className='boton' onClick={handlePrevPage}>Previous</button>
                <button className='boton' onClick={handleNextPage}>Next</button>
            </div>
            {showCharacterInfo && selectedCharacter && (
                <div className="character-info-container">
                    <div className="character-info-box">
                        <img
                            src={selectedCharacter.image}
                            alt={selectedCharacter.name}
                            className="character-info-image"
                        />
                        <div className="character-info-details">
                            <h2>{selectedCharacter.name}</h2>
                            <p>Status: {selectedCharacter.status}</p>
                            <p>especie: {selectedCharacter.species}</p>
                            <p>Gender: {selectedCharacter.gender}</p>
                            
                            <button className="close-button" onClick={handleCloseCharacterInfo}>Cerrar</button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RickandMortyComponent;
