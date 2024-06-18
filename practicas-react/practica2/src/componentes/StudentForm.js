import React, { useState } from 'react';
import { db } from './configuracionfirebase/firebase';

const StudentForm = () => {
  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [matricula, setMatricula] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await db.collection('EstudiantesInformatica2024').doc('Inscritos').set({
        Nombre: name,
        Apellidos: lastName,
        Matricula: Number(matricula),
      });
      setName('');
      setLastName('');
      setMatricula('');
      setError(null);
      setLoading(false);
      alert('Datos guardados exitosamente!');
    } catch (error) {
      setError('Error al guardar los datos: ' + error.message);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Nombre:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Apellidos:</label>
            <input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Matrícula:</label>
            <input
              type="number"
              value={matricula}
              onChange={(e) => setMatricula(e.target.value)}
              required
            />
          </div>
          {error && (
            <p style={{ color: 'red' }}>{error}</p>
          )}
          <button type="submit" disabled={loading}>
            {loading ? 'Guardando...' : 'Guardar'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentForm;